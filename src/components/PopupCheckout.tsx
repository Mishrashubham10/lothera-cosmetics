'use client';

import { Dispatch, SetStateAction } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { useRouter } from 'next/navigation';

interface CheckoutButtonProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function PopupCheckout({ open, setOpen }: CheckoutButtonProps) {
  const router = useRouter();

  function handleContinueShoping() {
    setOpen(false);
    router.push('/products');
  }
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md rounded-2xl shadow-xl">
          <DialogHeader className="text-center">
            <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <DialogTitle className="text-2xl font-bold text-foreground">
              Order Successful 🎉
            </DialogTitle>
            <DialogDescription className="text-muted-foreground mt-2">
              Thank you for shopping with us. Your order has been placed and
              will be delivered soon!
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="flex justify-center">
            <Button
              onClick={handleContinueShoping}
              className="gradient-primary text-primary-foreground shadow-md"
            >
              Continue Shopping
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}