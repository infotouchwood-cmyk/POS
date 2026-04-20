import { Shield, Clock, Award, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Licensed & Certified",
    description: "Fully licensed with Dubai Chamber of Commerce certification. You can trust our professional services."
  },
  {
    icon: Clock,
    title: "15+ Years Experience",
    description: "Serving Dubai since 2011, we bring expertise and reliability to every project we undertake."
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "We use premium materials and employ skilled craftsmen to ensure lasting quality in every job."
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Our professional team is committed to delivering exceptional results and customer satisfaction."
  }
]

import { ScrollReveal } from "@/components/scroll-reveal"

export function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <ScrollReveal variant="slideRight">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-medium text-primary tracking-widest uppercase">
                  Why Choose Us
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                  Building Trust Through Quality Craftsmanship
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Touch Wood Technical Services, we combine traditional craftsmanship with modern techniques to deliver exceptional results. Our commitment to quality and customer satisfaction has made us a trusted name in Dubai&apos;s technical services industry.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <ScrollReveal key={feature.title} variant="scaleUp" delay={index * 0.1}>
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal variant="slideLeft">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=1000&fit=crop')` }}
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-card shadow-xl rounded-xl p-6 border border-border max-w-[200px]">
                <p className="font-serif text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Successful Projects Completed</p>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
