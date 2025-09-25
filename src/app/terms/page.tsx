'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <Card className="shadow-lg">
        <CardContent className="p-6 space-y-8">
          <h1 className="text-3xl font-bold">Terms & Conditions</h1>
          <p className="text-muted-foreground">
            These Terms of Use govern your access to and use of our website,
            mobile application, and services. By using our platform, you agree
            to these Terms. Please read them carefully.
          </p>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">1. Eligibility</h2>
            <p className="text-muted-foreground">
              You must be at least 18 years old to register, purchase, or use
              our services. If you are under 18, you may only use our platform
              with the involvement of a parent or guardian.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              2. Account Responsibilities
            </h2>
            <p className="text-muted-foreground">
              When creating an account, you must provide accurate and complete
              information. You are responsible for safeguarding your login
              details and for all activities under your account.
            </p>
            <p className="text-muted-foreground mt-2">
              We reserve the right to suspend or terminate accounts that provide
              false information or misuse our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Orders & Payments</h2>
            <p className="text-muted-foreground">
              All prices listed on our platform are inclusive of applicable
              taxes unless stated otherwise. We reserve the right to change
              prices, products, or promotions at any time without notice.
            </p>
            <p className="text-muted-foreground mt-2">
              Once you place an order, you agree to pay the full price including
              applicable shipping and handling fees. Payments must be completed
              using our approved payment methods.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              4. Shipping & Delivery
            </h2>
            <p className="text-muted-foreground">
              Delivery timelines are estimates and may vary due to external
              factors like courier delays, strikes, or natural events. We are
              not liable for such delays.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Returns & Refunds</h2>
            <p className="text-muted-foreground">
              Eligible products can be returned within 7 days of delivery,
              subject to our return policy. Refunds are processed back to the
              original payment method within 5–7 business days after inspection.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              6. Prohibited Activities
            </h2>
            <p className="text-muted-foreground">
              You agree not to misuse our services, including but not limited
              to: uploading harmful content, attempting to breach security,
              reselling products without authorization, or engaging in
              fraudulent activity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms shall be governed by and interpreted under the laws of
              your country of residence. Any disputes shall be subject to the
              exclusive jurisdiction of courts in that region.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}