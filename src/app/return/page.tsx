// import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Returns = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Navigation /> */}

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Returns & Refund Policy
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Our Return Policy
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At LuxeBeauty, your satisfaction is our priority. We offer a
                  hassle-free return policy to ensure you're completely happy
                  with your purchase.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Returns accepted within <strong>30 days</strong> of delivery
                  </li>
                  <li>
                    Items must be unused, unopened, and in original packaging
                  </li>
                  <li>
                    Proof of purchase (order confirmation or receipt) required
                  </li>
                  <li>Original shipping costs are non-refundable</li>
                </ul>
              </div>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Non-Returnable Items
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  For hygiene and safety reasons, the following items cannot be
                  returned:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Opened or used cosmetics and skincare products</li>
                  <li>Pierced jewelry (earrings)</li>
                  <li>Personalized or custom-engraved items</li>
                  <li>Gift cards and e-gift certificates</li>
                  <li>Items marked as "Final Sale" or "Non-Returnable"</li>
                </ul>
              </div>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                How to Initiate a Return
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>To start a return, please follow these steps:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    Log into your LuxeBeauty account and navigate to "Order
                    History"
                  </li>
                  <li>
                    Select the order containing the item(s) you wish to return
                  </li>
                  <li>
                    Click "Request Return" and select the items and reason for
                    return
                  </li>
                  <li>
                    Print the prepaid return shipping label (for domestic
                    orders)
                  </li>
                  <li>Pack items securely in original packaging if possible</li>
                  <li>
                    Drop off the package at any authorized shipping location
                  </li>
                </ol>
                <p>
                  Alternatively, contact our customer service team at{' '}
                  <a
                    href="mailto:returns@luxebeauty.com"
                    className="text-primary hover:underline"
                  >
                    returns@luxebeauty.com
                  </a>{' '}
                  for assistance.
                </p>
              </div>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Refund Process
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Once we receive and inspect your return, we will process your
                  refund:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Inspection Period:</strong> 3-5 business days after
                    receipt
                  </li>
                  <li>
                    <strong>Refund Processing:</strong> 5-7 business days after
                    approval
                  </li>
                  <li>
                    <strong>Credit Card Refunds:</strong> May take an additional
                    5-10 business days to appear on your statement
                  </li>
                  <li>
                    <strong>Store Credit:</strong> Issued within 24 hours of
                    approval (optional)
                  </li>
                </ul>
                <p>
                  You will receive an email confirmation once your refund has
                  been processed.
                </p>
              </div>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Exchanges
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We currently do not offer direct exchanges. If you need a
                  different size, color, or product:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Return the original item for a refund</li>
                  <li>Place a new order for the desired item</li>
                </ol>
                <p>
                  This ensures the fastest processing time and guarantees
                  availability of your desired item.
                </p>
              </div>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Damaged or Defective Items
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  If you receive a damaged or defective item, please contact us
                  within 48 hours of delivery with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your order number</li>
                  <li>Photos of the damaged item and packaging</li>
                  <li>Description of the damage or defect</li>
                </ul>
                <p>
                  We will arrange for a replacement or full refund, including
                  original shipping costs, at no additional charge.
                </p>
              </div>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                International Returns
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  International customers are responsible for return shipping
                  costs. We recommend using a trackable shipping method, as we
                  cannot be responsible for items lost in transit.
                </p>
                <p>
                  Please mark the package as "Returned Merchandise" to avoid
                  additional customs charges.
                </p>
              </div>
            </section>

            <p className="text-muted-foreground text-sm">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Returns;