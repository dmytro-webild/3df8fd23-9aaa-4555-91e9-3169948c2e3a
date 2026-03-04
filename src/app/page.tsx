"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroLogoBillboardSplit from "@/components/sections/hero/HeroLogoBillboardSplit";
import MetricCardThree from "@/components/sections/metrics/MetricCardThree";
import AboutMetric from "@/components/sections/about/AboutMetric";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import ContactText from "@/components/sections/contact/ContactText";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Star, MessageSquare, Clock, DollarSign, Coffee, Zap, Users, Smile } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="mediumLargeSizeLargeTitles"
      background="fluid"
      cardStyle="solid"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Roast & Toast"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Reviews", id: "social-proof" },
          ]}
          button={{
            text: "Call Now",            href: "tel:+966XXXXXXXXX"}}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplit
          logoText="ROAST & TOAST"
          description="Specialty Coffee. Crafted with Care in Al Aziziyah. 4.9-Star Rated Local Favorite • Open Until 3 AM"
          background={{ variant: "plain" }}
          buttons={[
            { text: "Call Now", href: "tel:+966XXXXXXXXX" },
            { text: "Order Online", href: "#" },
          ]}
          buttonAnimation="slide-up"
          layoutOrder="default"
          imageSrc="http://img.b2bpic.net/free-photo/barista-work-coffee-shop_158595-2333.jpg"
          imageAlt="Premium specialty coffee with latte art"
          mediaAnimation="slide-up"
          frameStyle="card"
        />
      </div>

      <div id="trust-signals" data-section="trust-signals">
        <MetricCardThree
          title="Why Choose Roast & Toast"
          description="The perfect blend of quality, convenience, and community"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          metrics={[
            { id: "rating", icon: Star, title: "Rating", value: "4.9★" },
            { id: "reviews", icon: MessageSquare, title: "Reviews", value: "266+" },
            { id: "hours", icon: Clock, title: "Open Late", value: "Until 3 AM" },
            { id: "pricing", icon: DollarSign, title: "Affordable", value: "SAR 1-20" },
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Our Story: Passion for Specialty Coffee Since Day One"
          useInvertedBackground={false}
          metricsAnimation="slide-up"
          metrics={[
            { icon: Coffee, label: "Specialty Coffee", value: "Premium" },
            { icon: Zap, label: "Relaxed Vibe", value: "Cozy" },
            { icon: Users, label: "Community", value: "First" },
            { icon: Smile, label: "Friendly Service", value: "Always" },
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardOne
          title="Featured Menu Highlights"
          description="Discover our most popular specialty drinks and treats"
          tag="Menu"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "1",              name: "Classic Espresso",              price: "SAR 8",              imageSrc: "http://img.b2bpic.net/free-photo/glass-with-delicious-coffee_23-2149703760.jpg",              imageAlt: "Classic espresso shot"},
            {
              id: "2",              name: "Signature Latte",              price: "SAR 15",              imageSrc: "http://img.b2bpic.net/free-photo/man-pours-from-one-cup-coffee-into-another-full-cup-coffee-spills-from-edges_140725-9169.jpg",              imageAlt: "Signature specialty latte"},
            {
              id: "3",              name: "Coffee & Dessert",              price: "SAR 20",              imageSrc: "http://img.b2bpic.net/free-photo/view-delicious-cake-made-from-carrots_23-2150316412.jpg",              imageAlt: "Coffee paired with pastry"},
            {
              id: "4",              name: "Seasonal Special",              price: "SAR 16",              imageSrc: "http://img.b2bpic.net/free-photo/espresso-details-close-up-pouring-coffee-into-white-cup-from-coffee-pot-selective-focus-concept-making-coffee-bar-pub-restaurant-brewing-coffee-cezve_166373-2016.jpg",              imageAlt: "Limited edition seasonal drink"},
          ]}
          carouselMode="buttons"
          buttons={[
            { text: "View Full Menu", href: "#" },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <TestimonialCardSix
          title="What Our Customers Say"
          description="Real reviews from our community of coffee lovers"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          speed={40}
          topMarqueeDirection="left"
          testimonials={[
            {
              id: "1",              name: "أحمد محمد",              handle: "@ahmadm",              testimonial: "المكان رايق والقهوة في الراس وأسعاره حلوة. الخدمة ودودة وتجربة ممتعة.",              imageSrc: "http://img.b2bpic.net/free-photo/alone-specialist-handsome-daydreaming-collar_1262-870.jpg?_wi=1",              imageAlt: "Ahmad Muhammad"},
            {
              id: "2",              name: "Sarah Johnson",              handle: "@sarahj",              testimonial: "Best specialty coffee in Riyadh! Perfect location inside the hospital. Open late is a lifesaver for night shifts.",              imageSrc: "http://img.b2bpic.net/free-photo/alone-specialist-handsome-daydreaming-collar_1262-870.jpg?_wi=2",              imageAlt: "Sarah Johnson"},
            {
              id: "3",              name: "فاطمة الدعيع",              handle: "@fatimaad",              testimonial: "جودة عالية جداً بأسعار معقولة. الموظفين لطفاء ودائماً يرحبون بك.",              imageSrc: "http://img.b2bpic.net/free-photo/alone-specialist-handsome-daydreaming-collar_1262-870.jpg?_wi=3",              imageAlt: "Fatima Al-Doaea"},
            {
              id: "4",              name: "Mohammad Ali",              handle: "@mohammadali",              testimonial: "The perfect late-night spot. Cozy atmosphere, excellent coffee, and genuinely friendly staff. Highly recommend!",              imageSrc: "http://img.b2bpic.net/free-photo/alone-specialist-handsome-daydreaming-collar_1262-870.jpg?_wi=4",              imageAlt: "Mohammad Ali"},
            {
              id: "5",              name: "ليلى عبدالرحمن",              handle: "@laylaabdulrahman",              testimonial: "مشهورة عند الطلاب والموظفين. القهوة حقيقية والسعر مناسب. مكان آمن وهادئ.",              imageSrc: "http://img.b2bpic.net/free-photo/alone-specialist-handsome-daydreaming-collar_1262-870.jpg?_wi=5",              imageAlt: "Layla Abdulrahman"},
            {
              id: "6",              name: "David Smith",              handle: "@davidsmith",              testimonial: "Found this gem near the hospital. Consistently excellent coffee, modern vibe, and always respectful service.",              imageSrc: "http://img.b2bpic.net/free-photo/alone-specialist-handsome-daydreaming-collar_1262-870.jpg?_wi=6",              imageAlt: "David Smith"},
          ]}
        />
      </div>

      <div id="location" data-section="location">
        <ContactText
          text="Visit us inside Ali Bin Ali Hospital at 7469 4250 Mohammad Rashid Rida, Al Aziziyah, Riyadh 14514. Get directions or call us anytime—we're open until 3 AM."
          animationType="entrance-slide"
          buttons={[
            {
              text: "Get Directions",              href: "https://maps.google.com/?q=7469+4250+Mohammad+Rashid+Rida+Al+Aziziyah+Riyadh"},
            { text: "Call Now", href: "tel:+966XXXXXXXXX" },
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="final-cta" data-section="final-cta">
        <SocialProofOne
          title="Craving Great Coffee?"
          description="Connect with us now via phone, WhatsApp, or online order. We're here to serve you."
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "Call Now",            "WhatsApp Us",            "Order Online",            "Get Directions"]}
          speed={30}
          showCard={false}
          buttons={[
            { text: "Call: +966 XX XXX XXXX", href: "tel:+966XXXXXXXXX" },
            { text: "WhatsApp Us", href: "https://wa.me/966XXXXXXXXX" },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/woman-works-cafe-evening_1153-3549.jpg"
          imageAlt="Roast & Toast cozy coffee shop interior"
          logoText="Roast & Toast"
          copyrightText="© 2025 Roast & Toast. All rights reserved."
          columns={[
            {
              title: "Quick Links",              items: [
                { label: "Home", href: "#hero" },
                { label: "About", href: "#about" },
                { label: "Menu", href: "#menu" },
                { label: "Reviews", href: "#social-proof" },
              ],
            },
            {
              title: "Contact",              items: [
                { label: "Call Us", href: "tel:+966XXXXXXXXX" },
                { label: "WhatsApp", href: "https://wa.me/966XXXXXXXXX" },
                {
                  label: "Get Directions",                  href: "https://maps.google.com/?q=7469+4250+Mohammad+Rashid+Rida+Al+Aziziyah+Riyadh"},
                { label: "Email Us", href: "mailto:info@roastandtoast.com" },
              ],
            },
            {
              title: "Info",              items: [
                { label: "Hours: Until 3 AM", href: "#" },
                { label: "Location: Ali Bin Ali Hospital", href: "#" },
                { label: "Rating: 4.9★ (266+ reviews)", href: "#" },
                { label: "Privacy Policy", href: "#" },
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
