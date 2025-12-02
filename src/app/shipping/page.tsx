// import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Navigation /> */}
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Shipping & Delivery
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Domestic Shipping</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We offer the following shipping options within the United States:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Standard Shipping (5-7 business days):</strong> Free on orders over ₹799, otherwise ₹99</li>
                  <li><strong>Express Shipping (2-3 business days):</strong> ₹199</li>
                  <li><strong>Overnight Shipping (1 business day):</strong> ₹299</li>
                </ul>
                <p>Orders placed before 2 PM EST on business days will be processed the same day.</p>
              </div>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">International Shipping</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We ship to over 50 countries worldwide. International shipping rates and delivery times vary by destination:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Canada & Mexico:</strong> ₹299 (7-10 business days)</li>
                  <li><strong>Europe:</strong> ₹399 (10-14 business days)</li>
                  <li><strong>Asia & Australia:</strong> ₹299 (14-21 business days)</li>
                  <li><strong>Rest of World:</strong> ₹299 (14-28 business days)</li>
                </ul>
                <p>Please note that international orders may be subject to import duties and taxes, which are the responsibility of the customer.</p>
              </div>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Order Tracking</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Once your order has been shipped, you will receive a confirmation email with your tracking number. You can track your package by:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Clicking the tracking link in your shipping confirmation email</li>
                  <li>Logging into your LuxeBeauty account and viewing your order history</li>
                  <li>Contacting our customer service team</li>
                </ul>
              </div>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Shipping Restrictions</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Due to carrier restrictions and regulations, certain products may not be available for shipping to all locations. These include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Aerosol products (hairsprays, setting sprays)</li>
                  <li>Products containing alcohol</li>
                  <li>Fragile or oversized items to certain destinations</li>
                </ul>
                <p>If any items in your order cannot be shipped to your location, we will contact you to discuss alternatives.</p>
              </div>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Delivery Issues</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>If you experience any issues with your delivery, please contact us within 48 hours of the expected delivery date. We will work with our shipping partners to locate your package or arrange a replacement shipment.</p>
                <p>LuxeBeauty is not responsible for packages that are stolen after delivery confirmation. We recommend using a secure delivery location or requiring a signature upon delivery for valuable orders.</p>
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

export default Shipping;