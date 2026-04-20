import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Hammer, Zap, Sparkles, Wind, Paintbrush, Grid3X3, Wallpaper } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import type { Metadata } from "next"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: 'Our Services | Touch Wood Technical Services L.L.C',
  description: 'Comprehensive technical services in Dubai: Carpentry, Electrical Maintenance, Building Cleaning, AC Installation, Painting, Tiling, and Wallpaper Fixing.',
}

const services = [
  {
    icon: Hammer,
    title: "Carpentry",
    description: "Expert woodwork solutions from custom furniture to structural carpentry. Our skilled craftsmen bring decades of experience to every project, ensuring precision and durability.",
    features: ["Custom Furniture", "Kitchen Cabinets", "Door Installation", "Wood Repairs", "Structural Work"],
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=600&fit=crop"
  },
  {
    icon: Zap,
    title: "Electrical Maintenance",
    description: "Complete electrical services from installations to repairs. Our certified electricians ensure safety and compliance with all Dubai regulations.",
    features: ["Wiring & Rewiring", "Panel Upgrades", "Lighting Installation", "Emergency Repairs", "Safety Inspections"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop"
  },
  {
    icon: Sparkles,
    title: "Building Cleaning",
    description: "Professional cleaning services for commercial and residential properties. We use eco-friendly products and state-of-the-art equipment.",
    features: ["Deep Cleaning", "Window Cleaning", "Post-Construction", "Regular Maintenance", "Specialized Cleaning"],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop"
  },
  {
    icon: Wind,
    title: "AC/Ventilation Installation",
    description: "Full-service HVAC solutions including installation, maintenance, and repair. Keep your space comfortable year-round with our expert services.",
    features: ["AC Installation", "Duct Cleaning", "Maintenance Plans", "Emergency Repairs", "Energy Optimization"],
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=600&fit=crop"
  },
  {
    icon: Paintbrush,
    title: "Painting",
    description: "Transform your space with our professional painting services. From interior walls to exterior facades, we deliver flawless finishes every time.",
    features: ["Interior Painting", "Exterior Painting", "Decorative Finishes", "Color Consultation", "Surface Preparation"],
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop"
  },
  {
    icon: Grid3X3,
    title: "Tiling",
    description: "Expert tile installation for floors, walls, and decorative features. We work with all types of tiles to create stunning, durable surfaces.",
    features: ["Floor Tiling", "Wall Tiling", "Bathroom Renovation", "Kitchen Backsplash", "Pattern Design"],
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop"
  },
  {
    icon: Wallpaper,
    title: "Wallpaper Fixing",
    description: "Professional wallpaper installation and removal services. We handle all types of wallpapers with precision and care for perfect results.",
    features: ["Wallpaper Installation", "Removal Services", "Surface Preparation", "Pattern Matching", "Accent Walls"],
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&h=600&fit=crop"
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal variant="slideUp">
              <div className="max-w-3xl">
                <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
                  Our Services
                </p>
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                  Comprehensive Technical Solutions
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  From carpentry to electrical work, we provide end-to-end technical services with quality craftsmanship and attention to detail.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Services List */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div 
                  key={service.title}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Image */}
                  <ScrollReveal
                    variant={index % 2 === 0 ? "slideLeft" : "slideRight"}
                    className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  >
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <div 
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                        style={{ backgroundImage: `url(${service.image})` }}
                      />
                    </div>
                  </ScrollReveal>

                  {/* Content */}
                  <ScrollReveal
                    variant={index % 2 === 0 ? "slideRight" : "slideLeft"}
                    delay={0.2}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shadow-inner">
                          <service.icon className="w-7 h-7 text-primary" />
                        </div>
                        <h2 className="font-serif text-3xl font-bold text-foreground">
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="grid grid-cols-2 gap-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-foreground group">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                            <span className="text-sm font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link href="/contact" className="inline-block pt-4">
                        <Button className="gap-2 px-8">
                          Get a Quote
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </ScrollReveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-sidebar text-sidebar-foreground">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <ScrollReveal variant="scaleUp">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-sidebar-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Contact us today for a free consultation and quote. Our expert team is ready to bring your project to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="gap-2 px-8 bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 shadow-lg">
                    Request a Quote
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:971549941632">
                  <Button size="lg" variant="outline" className="gap-2 px-8 border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent shadow-md">
                    <Phone className="w-5 h-5" />
                    971-54-9941632
                  </Button>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
