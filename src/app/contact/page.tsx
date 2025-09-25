'use client';

import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PopupCheckout } from '@/components/PopupCheckout';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState<boolean>(false);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 9823311319',
      description: 'Mon-Sat, 10:30am-6:30pm EST',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'lothera@gmail.com',
      description: 'We respond within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Thawar Apartment, flat no 201, Main Carter Road',
      description: 'Borivali East, Mumbai - 400066, Maharashtra',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 10:30 AM - 6:30 PM',
      description: 'Weekend: 10:30 AM-6:30 PM',
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setIsLoading(false);
      setOpen(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            <MessageCircle className="w-3 h-3 mr-1" />
            Get in Touch
          </Badge>

          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
            Contact
            <span className="text-gradient-primary block">Lothera</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about our products? Need beauty advice? Want to
            collaborate? We&apos;d love to hear from you. Our beauty experts are
            here to help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-playfair font-bold text-foreground mb-6">
              Let&apos;s Connect
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you have questions about our products, need personalized
              beauty recommendations, or want to share feedback, we&apos;re here
              to help.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h3>
                    <p className="text-foreground font-medium mb-1">
                      {info.details}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            {/* <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex space-x-3">
                {[
                  { name: 'Instagram', href: '#' },
                  { name: 'TikTok', href: '#' },
                  { name: 'YouTube', href: '#' },
                  { name: 'Twitter', href: '#' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-smooth"
                  >
                    <span className="text-xs font-medium">
                      {social.name[0]}
                    </span>
                  </a>
                ))}
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-r from-[#e94057]/95 to-[#f27121]/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair flex items-center text-primary-foreground">
                  <Sparkles className="w-5 h-5 text-primary-foreground mr-2" />
                  Send us a Message
                </CardTitle>
              </CardHeader>

              <CardContent>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 text-primary-foreground"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2 text-primary-foreground">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="text-primary-foreground placeholder:text-primary-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="text-primary-foreground placeholder:text-primary-foreground"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="text-primary-foreground placeholder:text-primary-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="text-primary-foreground placeholder:text-primary-foreground"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full text-primary-foreground shadow-luxury hover:shadow-md transition-bounce"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                  <PopupCheckout
                    open={open}
                    setOpen={setOpen}
                    title="Thanks for contacting us"
                    description="We've received your message and will reply as soon as possible. Keep an eye on your inbox!"
                  />
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our products and services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'How do I choose the right foundation shade?',
                answer:
                  'We recommend using our virtual try-on tool or visiting our store for a professional color match. You can also order samples of your top 3 shade choices.',
              },
              {
                question: 'Are your products cruelty-free?',
                answer:
                  "Yes! All BeautyLux products are 100% cruelty-free and we never test on animals. We're also certified by Leaping Bunny.",
              },
              {
                question: "What's your return policy?",
                answer:
                  "We offer a 30-day satisfaction guarantee. If you're not happy with your purchase, return it for a full refund or exchange.",
              },
              {
                question: 'Do you offer makeup consultations?',
                answer:
                  "Absolutely! Book a complimentary consultation with our beauty experts either in-store or virtually. We'll help you find your perfect routine.",
              },
            ].map((faq, index) => (
              <Card key={index} className="beauty-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
