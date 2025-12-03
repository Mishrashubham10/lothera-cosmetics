'use client';

import Footer from '@/components/Footer';
// import Navigation from "@/components/Navigation";

const Returns = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Navigation /> */}

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Returns &amp; Refund Policy
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* RETURN POLICY */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Our Return Policy
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At LuxeBeauty, your satisfaction is our priority. We offer a
                  hassle-free return policy to ensure you&apos;re completely
                  happy with your purchase.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Returns accepted within <strong>30 days</strong> of delivery
                  </li>
                  <li>
                    Items must be unused, unopened, and in original packaging
                  </li>
                  <li>Proof of purchase required</li>
                  <li>Original shipping costs are non-refundable</li>
                </ul>
              </div>
            </section>

            {/* NON RETURNABLE ITEMS */}
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
                  <li>Pierced jewelry</li>
                  <li>Personalized or engraved items</li>
                  <li>Gift cards</li>
                  <li>Items marked as &quot;Final Sale&quot;</li>
                </ul>
              </div>
            </section>

            {/* HOW TO RETURN */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                How to Initiate a Return
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>To start a return, follow these steps:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Log into your LuxeBeauty account</li>
                  <li>Select the order containing the item(s)</li>
                  <li>Click &ldquo;Request Return&rdquo;</li>
                  <li>Print the prepaid return label (domestic only)</li>
                  <li>Pack items in original packaging</li>
                  <li>Drop off at an authorized shipping center</li>
                </ol>

                <p>
                  For help, email{' '}
                  <a
                    href="mailto:returns@luxebeauty.com"
                    className="text-primary hover:underline"
                  >
                    returns@luxebeauty.com
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* REFUND PROCESS */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Refund Process
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Once your return is received and inspected:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Inspection: 3-5 business days</li>
                  <li>Refund: 5-7 business days after approval</li>
                  <li>
                    Card refunds may take 5-10 additional days to appear on your
                    statement
                  </li>
                  <li>Store credit is issued within 24 hours (optional)</li>
                </ul>
                <p>You will receive an email confirmation when completed.</p>
              </div>
            </section>

            {/* EXCHANGES */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Exchanges
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We do not offer direct exchanges:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Return the original item</li>
                  <li>Place a new order</li>
                </ol>
              </div>
            </section>

            {/* DAMAGED ITEMS */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Damaged or Defective Items
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Please contact us within 48 hours with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Order number</li>
                  <li>Photos of damage + packaging</li>
                  <li>Description of the issue</li>
                </ul>
              </div>
            </section>

            {/* INTERNATIONAL RETURNS */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                International Returns
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>You are responsible for return shipping costs.</p>
                <p>
                  Please mark packages as &ldquo;Returned Merchandise&rdquo; to
                  avoid customs fees.
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