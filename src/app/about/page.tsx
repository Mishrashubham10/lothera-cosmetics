'use client';

import { Sparkles, Award, Users, Heart, Leaf, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Beauty for Everyone",
      description:
        "We believe beauty comes in all forms and our products celebrate diversity and individuality.",
    },
    {
      icon: Leaf,
      title: "Natural Ingredients",
      description:
        "Our formulations prioritize natural, sustainable ingredients that are gentle on your skin.",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description:
        "Every product undergoes rigorous testing to ensure the highest standards of quality and safety.",
    },
    {
      icon: Award,
      title: "Award Winning",
      description:
        "Recognized by industry leaders for innovation and excellence in beauty and skincare.",
    },
  ];

  const stats = [
    { number: '50K+', label: "Happy Customers" },
    { number: '200+', label: "Premium Products" },
    { number: '15+', label: "Years Experience" },
    { number: '98%', label: "Satisfaction Rate" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            <Sparkles className="w-3 h-3 mr-1" />
            Our Story
          </Badge>

          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6">
            Redefining Beauty
            <span className="text-gradient-primary block">Since 2009</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Lothera was founded on the belief that everyone deserves to feel
            confident and beautiful. We curate and create premium beauty
            products that enhance your natural radiance while respecting your
            skin and the environment.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              To democratize beauty by making premium, effective, and
              sustainable cosmetics accessible to everyone. We&apos;re committed to
              creating products that not only make you look beautiful but also
              feel confident in your own skin.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every formula is carefully crafted with the finest ingredients,
              rigorously tested for safety and efficacy, and packaged with
              sustainability in mind. Because beauty should never come at the
              cost of your health or our planet.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="beauty-card text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-gradient-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do, from product
              development to customer service and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="beauty-card text-center product-hover"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beauty experts, chemists, and passionate individuals working
            together to bring you the best in cosmetics and skincare.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              name: 'Sarah Chen',
              role: 'Founder & CEO',
              bio: 'Former Sephora executive with 15+ years in beauty industry',
            },
            {
              name: 'Dr. Maria Rodriguez',
              role: 'Chief Formulator',
              bio: 'PhD in Chemistry, specialized in sustainable beauty formulations',
            },
            {
              name: 'James Thompson',
              role: 'Creative Director',
              bio: 'Award-winning designer with expertise in luxury brand aesthetics',
            },
          ].map((member, index) => (
            <Card key={index} className="beauty-card text-center product-hover">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-hero border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
            Ready to Start Your Beauty Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover our curated collection of premium beauty products and find
            your perfect match today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-medium rounded-lg shadow-luxury hover:shadow-glow transition-bounce"
            >
              Shop Collection
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-border bg-background text-foreground font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}