import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Shield, Clock, Award, Users, Target, Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: 'About Us | Touch Wood Technical Services L.L.C',
  description: 'Learn about Touch Wood Technical Services - Dubai\'s trusted technical services company since 2011. Licensed, certified, and committed to quality.',
}

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every project, no matter the size. Our attention to detail sets us apart."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Honesty and transparency guide all our interactions with clients and partners."
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We listen, understand, and deliver beyond expectations."
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Our skilled professionals work together seamlessly to deliver outstanding results."
  },
]

const milestones = [
  { year: "2011", title: "Company Founded", description: "Touch Wood Technical Services was established in Dubai" },
  { year: "2014", title: "100th Project", description: "Completed our 100th successful project milestone" },
  { year: "2017", title: "Team Expansion", description: "Grew our team to include specialized craftsmen" },
  { year: "2020", title: "Digital Transformation", description: "Launched online booking and management systems" },
  { year: "2024", title: "500+ Projects", description: "Celebrating over 500 completed projects in Dubai" },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal variant="slideRight">
                <div>
                  <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
                    About Us
                  </p>
                  <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                    Building Trust Since 2011
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    Touch Wood Technical Services L.L.C has been providing exceptional technical services to Dubai&apos;s residential and commercial sectors for over 15 years. Our commitment to quality and customer satisfaction has made us a trusted name in the industry.
                  </p>
                  <div className="flex gap-8">
                    <div>
                      <p className="font-serif text-4xl font-bold text-primary">15+</p>
                      <p className="text-sm text-muted-foreground font-medium">Years Experience</p>
                    </div>
                    <div>
                      <p className="font-serif text-4xl font-bold text-primary">500+</p>
                      <p className="text-sm text-muted-foreground font-medium">Projects Completed</p>
                    </div>
                    <div>
                      <p className="font-serif text-4xl font-bold text-primary">50+</p>
                      <p className="text-sm text-muted-foreground font-medium">Team Members</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="slideLeft">
                <div className="relative">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=1000&fit=crop')` }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <ScrollReveal variant="slideUp">
                <div className="bg-card rounded-2xl h-full p-10 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To deliver exceptional technical services that exceed client expectations through quality craftsmanship, innovative solutions, and unwavering commitment to excellence. We aim to be the most trusted name in Dubai&apos;s technical services industry.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="slideUp" delay={0.2}>
                <div className="bg-sidebar text-sidebar-foreground h-full rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow">
                  <h2 className="font-serif text-3xl font-bold mb-4">Our Vision</h2>
                  <p className="text-sidebar-foreground/80 leading-relaxed text-lg">
                    To be the leading provider of comprehensive technical services in the UAE, recognized for our expertise, reliability, and customer-centric approach. We envision a future where quality craftsmanship is accessible to all.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ScrollReveal variant="slideUp">
                <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
                  Our Values
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                  What Drives Us
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our core values shape everything we do, from how we interact with clients to how we approach every project.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} variant="scaleUp" delay={index * 0.1}>
                  <div className="bg-card h-full rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-all group">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3 text-center">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed text-center">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ScrollReveal variant="slideUp">
                <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
                  Our Journey
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Milestones
                </h2>
              </ScrollReveal>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <ScrollReveal
                    key={milestone.year}
                    variant={index % 2 === 0 ? "slideRight" : "slideLeft"}
                    delay={index * 0.1}
                  >
                    <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                        <div className={`bg-card rounded-xl p-6 border border-border shadow-sm inline-block ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                          <p className="font-serif text-2xl font-bold text-primary mb-2">{milestone.year}</p>
                          <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{milestone.title}</h3>
                          <p className="text-sm text-muted-foreground">{milestone.description}</p>
                        </div>
                      </div>
                      <div className="hidden lg:flex w-4 h-4 rounded-full bg-primary shrink-0 z-10" />
                      <div className="flex-1 hidden lg:block" />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal variant="slideRight">
                <div>
                  <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
                    Credentials
                  </p>
                  <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                    Licensed & Certified
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Touch Wood Technical Services operates with full compliance to Dubai&apos;s regulations. We are proud to hold all necessary licenses and certifications that ensure our clients receive legitimate, professional services.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-card rounded-lg p-6 border border-border">
                      <p className="text-sm text-muted-foreground mb-1">Trade License Number</p>
                      <p className="font-serif text-2xl font-bold text-foreground">656792</p>
                    </div>
                    <div className="bg-card rounded-lg p-6 border border-border">
                      <p className="text-sm text-muted-foreground mb-1">Dubai Chamber of Commerce & Industry</p>
                      <p className="font-serif text-2xl font-bold text-foreground">DCCI: 195124</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=500&fit=crop',
                  'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&h=500&fit=crop',
                  'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop',
                  'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500&h=500&fit=crop'
                ].map((img, i) => (
                  <ScrollReveal key={i} variant="scaleUp" delay={i * 0.15} className={i % 2 === 1 ? "mt-8" : ""}>
                    <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${img}')` }}
                      />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-sidebar text-sidebar-foreground">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <ScrollReveal variant="scaleUp">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
                Let&apos;s Work Together
              </h2>
              <p className="text-xl text-sidebar-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Ready to start your next project? Contact us today and experience the Touch Wood difference.
              </p>
              <Link href="/contact">
                <Button size="lg" className="gap-2 bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 shadow-lg">
                  Get In Touch
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
