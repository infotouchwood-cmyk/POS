import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <ScrollReveal variant="slideRight">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-medium text-primary tracking-widest uppercase">
                  Since 2011
                </p>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] text-balance">
                  Expert Technical Services in Dubai
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  From carpentry to electrical maintenance, we bring craftsmanship and reliability to every project. Your trusted partner for quality technical services.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <Button size="lg" className="gap-2 text-base px-8 shadow-lg shadow-primary/20">
                    Explore Services
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:971549941632">
                  <Button size="lg" variant="outline" className="gap-2 text-base px-8">
                    <Phone className="w-5 h-5" />
                    Call Us Now
                  </Button>
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-12 pt-8 border-t border-border">
                <div>
                  <p className="font-serif text-4xl font-bold text-foreground">15+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="font-serif text-4xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div>
                  <p className="font-serif text-4xl font-bold text-foreground">100%</p>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Image Grid */}
          <ScrollReveal variant="slideLeft" delay={0.2}>
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/5] rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 shadow-xl overflow-hidden group">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=750&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="aspect-square rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 shadow-lg overflow-hidden group">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-lg bg-gradient-to-br from-muted to-secondary shadow-lg overflow-hidden group">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="aspect-[4/5] rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 shadow-xl overflow-hidden group">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=750&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 bg-card shadow-2xl rounded-lg p-6 border border-border">
                <p className="font-serif text-2xl font-bold text-primary">Licensed</p>
                <p className="text-sm text-muted-foreground">& Certified</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
