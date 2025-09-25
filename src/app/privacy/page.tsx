'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <Card className="shadow-lg">
        <CardContent className="p-6 space-y-8">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Your privacy is important to us. This policy outlines how we
            collect, use, disclose, and protect your information when you use
            our platform.
          </p>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground">
              We may collect personal details such as your name, email, phone
              number, billing/shipping address, and payment information. We also
              collect non-personal data like device type, IP address, and
              browsing patterns.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground">
              We use your data to: - Process and fulfill orders - Provide
              customer support - Improve our products and services - Send
              updates, promotions, and offers (you can opt-out anytime) - Detect
              and prevent fraud or misuse
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              3. Sharing of Information
            </h2>
            <p className="text-muted-foreground">
              We do not sell or rent your personal data. We may share your
              information with trusted service providers (payment gateways,
              shipping partners, analytics providers) strictly for business
              operations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              4. Cookies & Tracking
            </h2>
            <p className="text-muted-foreground">
              Our site uses cookies and similar technologies to enhance user
              experience, analyze traffic, and deliver personalized
              recommendations. You may disable cookies in your browser settings,
              but certain features may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Data Retention</h2>
            <p className="text-muted-foreground">
              We retain your information as long as necessary for business
              purposes or as required by law. You may request deletion of your
              account and associated data anytime.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Data Security</h2>
            <p className="text-muted-foreground">
              We implement industry-standard encryption and security practices
              to protect your data from unauthorized access, alteration, or
              disclosure. However, no system is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
            <p className="text-muted-foreground">
              You have the right to access, update, and delete your personal
              data. You may also opt-out of marketing communications at any time
              by following unsubscribe instructions or contacting support.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Policy Updates</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. The latest
              version will always be available on this page with the effective
              date noted at the top.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}