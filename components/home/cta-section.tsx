import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CTASection() {
  return (
    <section className="py-24 bg-sidebar text-sidebar-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <ScrollReveal variant="slideRight">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-medium text-sidebar-primary tracking-widest uppercase">
                  Get In Touch
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight text-balance">
                  Ready to Start Your Project?
                </h2>
                <p className="text-lg text-sidebar-foreground/80 leading-relaxed">
                  Contact us today for a free consultation and quote. Our team is ready to bring your vision to life with expert craftsmanship.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="gap-2 text-base px-8 bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 shadow-lg">
                    Request a Quote
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:971549941632">
                  <Button size="lg" variant="outline" className="gap-2 text-base px-8 border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent shadow-md">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Info Cards */}
          <div className="grid gap-4">
            <ScrollReveal variant="slideLeft" delay={0.1}>
              <div className="bg-sidebar-accent/50 rounded-xl p-6 flex items-start gap-4 hover:bg-sidebar-accent transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-sidebar-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-sidebar-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold mb-1">Phone</h4>
                  <p className="text-sidebar-foreground/80 font-medium tracking-wide">971-4-5830376</p>
                  <p className="text-sidebar-foreground/80 font-medium tracking-wide">971-54-9941632</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideLeft" delay={0.2}>
              <div className="bg-sidebar-accent/50 rounded-xl p-6 flex items-start gap-4 hover:bg-sidebar-accent transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-sidebar-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-sidebar-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold mb-1">Email</h4>
                  <a 
                    href="mailto:infotouchwood@gmail.com"
                    className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors font-medium"
                  >
                    infotouchwood@gmail.com
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideLeft" delay={0.3}>
              <div className="bg-sidebar-accent/50 rounded-xl p-6 flex items-start gap-4 hover:bg-sidebar-accent transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-sidebar-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-sidebar-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold mb-1">Address</h4>
                  <p className="text-sidebar-foreground/80 font-medium">
                    IC1-MOR-I04-S12, International City, Dubai
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
