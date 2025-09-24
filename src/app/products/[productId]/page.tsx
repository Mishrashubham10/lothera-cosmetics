'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { useParams, useRouter } from 'next/navigation';
import { useBeauty } from '@/context/BeautyContext';
import Image from 'next/image';
import { RatingStars } from '@/components/RatingStars';
import { QuantitySelector } from '@/components/QuantitySelector';

export default function SingleProduct() {
  const { productId } = useParams<{ productId: string }>();
  const router = useRouter();
  const { state, dispatch } = useBeauty();
  const [quantity, setQuantity] = useState(1);

  // Find product by slug
  const product = state.products.find((p) => p.id === productId);

  const isWishlisted = useMemo(
    () => product && state.wishlist.some((w) => w.id === product.id),
    [state.wishlist, product]
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Product Not Found
          </h1>
          <Button onClick={() => router.push('/products')}>
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
    toast.success(`${quantity} ${product.name} added to cart`);
    router.push("/cart");
  };

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product.id });
      toast.success('Removed from wishlist');
    } else {
      dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
      toast.success('Added to wishlist');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* =============== PRODUCT IMG =============== */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="relative w-full h-full aspect-square overflow-hidden rounded-lg beauty-card">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* =============== PRODUCT INFO =============== */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* =============== BADGES =============== */}
              <div className="flex flex-wrap gap-2">
                {product.isNew && (
                  <Badge className="bg-accent text-accent-foreground">
                    New
                  </Badge>
                )}
                {product.isOnSale && discountPercentage > 0 && (
                  <Badge className="bg-destructive text-destructive-foreground">
                    -{discountPercentage}% OFF
                  </Badge>
                )}
                {product.isBestSeller && (
                  <Badge>
                    Best Seller
                  </Badge>
                )}
              </div>

              <p className="text-sm text-primary font-medium uppercase tracking-wide">
                {product.brand}
              </p>
              <h1 className="text-3xl font-playfair font-bold text-foreground">
                {product.name}
              </h1>

              {/* =============== RATING =============== */}
              <div className="flex items-center space-x-4">
                <RatingStars rating={product.rating} />
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* =============== PRICE =============== */}
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-foreground">
                  ₹{product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ₹{product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <Separator />

              {/* =============== DESCRIPTION ============== */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Description
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* ============ QUANTITY AND ACTIONS =============== */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-foreground">
                    Quantity:
                  </span>
                  <QuantitySelector
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
                </div>

                <div className="flex space-x-4">
                  <Button
                    className="flex-1 bg-gradient-to-r from-[#e94057]/95 to-[#f27121]/95 text-primary-foreground shadow-luxury"
                    onClick={handleAddToCart}
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-12 h-12"
                    onClick={handleWishlistToggle}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isWishlisted ? 'fill-current text-destructive' : ''
                      }`}
                    />
                  </Button>
                </div>
              </div>

              {/* ============== PRODUCT DETAILS ============= */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Product Details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Category:</span>
                      <span className="text-foreground capitalize">
                        {product.category}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Brand:</span>
                      <span className="text-foreground">{product.brand}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rating:</span>
                      <span className="text-foreground">
                        {product.rating}/5
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Reviews:</span>
                      <span className="text-foreground">{product.reviews}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}