import Link from "next/link"
import { ArrowRight, Hammer, Zap, Sparkles, Wind, Paintbrush, Grid3X3, Wallpaper } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Hammer,
    title: "Carpentry",
    description: "Custom woodwork, furniture, and structural carpentry with expert craftsmanship.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&h=400&fit=crop"
  },
  {
    icon: Zap,
    title: "Electrical Maintenance",
    description: "Complete electrical solutions from repairs to new installations.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop"
  },
  {
    icon: Sparkles,
    title: "Building Cleaning",
    description: "Professional cleaning services for commercial and residential buildings.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop"
  },
  {
    icon: Wind,
    title: "AC/Ventilation",
    description: "Installation, maintenance, and repair of cooling and ventilation systems.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop"
  },
  {
    icon: Paintbrush,
    title: "Painting",
    description: "Interior and exterior painting with premium finishes and attention to detail.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop"
  },
  {
    icon: Grid3X3,
    title: "Tiling",
    description: "Expert tile installation for floors, walls, and decorative features.",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=400&fit=crop"
  },
]

import { ScrollReveal } from "@/components/scroll-reveal"

export function ServicesPreview() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal variant="slideUp">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
              Our Services
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Comprehensive Technical Solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From small repairs to large-scale projects, we deliver excellence across all our services with skilled professionals and quality materials.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.title}
              variant={index % 2 === 0 ? "slideRight" : "slideLeft"}
              delay={index * 0.1}
            >
              <Link
                href="/services"
                className="group block relative bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
              >
                {/* Image */}
                <div className="aspect-[3/2] overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Button */}
        <ScrollReveal variant="slideUp" delay={0.3}>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" variant="outline" className="gap-2">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
