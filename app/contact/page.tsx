"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const services = [
  "Carpentry",
  "Electrical Maintenance",
  "Building Cleaning",
  "AC/Ventilation Installation",
  "Painting",
  "Tiling",
  "Wallpaper Fixing",
  "Other"
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
  }

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
                  Contact Us
                </p>
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                  Get In Touch
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Ready to start your project? Contact us for a free consultation and quote. Our team is here to help bring your vision to life.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <ScrollReveal variant="slideRight">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                    Send Us a Message
                  </h2>

                  {isSubmitted ? (
                    <div className="bg-primary/10 rounded-2xl p-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                      </p>
                      <Button 
                        onClick={() => setIsSubmitted(false)} 
                        variant="outline" 
                        className="mt-6"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-foreground">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-foreground">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="h-12"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-foreground">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+971 50 000 0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="service" className="text-sm font-medium text-foreground">
                            Service Required
                          </label>
                          <select
                            id="service"
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full h-12 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                              <option key={service} value={service}>{service}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-foreground">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          className="min-h-[150px] resize-none"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>Sending...</>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </ScrollReveal>

              {/* Contact Info */}
              <ScrollReveal variant="slideLeft">
                <div className="space-y-8">
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    <ScrollReveal variant="scaleUp" delay={0.1}>
                      <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                            Address
                          </h3>
                          <p className="text-muted-foreground">
                            IC1-MOR-I04-S12, International City, Dubai
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal variant="scaleUp" delay={0.2}>
                      <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                            Phone
                          </h3>
                          <p className="text-muted-foreground">
                            <a href="tel:97145830376" className="hover:text-primary transition-colors">
                              971-4-5830376
                            </a>
                          </p>
                          <p className="text-muted-foreground">
                            <a href="tel:971549941632" className="hover:text-primary transition-colors">
                              971-54-9941632
                            </a>
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal variant="scaleUp" delay={0.3}>
                      <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                            Email
                          </h3>
                          <p className="text-muted-foreground">
                            <a href="mailto:infotouchwood@gmail.com" className="hover:text-primary transition-colors">
                              infotouchwood@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal variant="scaleUp" delay={0.4}>
                      <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                            Business Hours
                          </h3>
                          <p className="text-muted-foreground">
                            Saturday - Thursday: 8:00 AM - 6:00 PM
                          </p>
                          <p className="text-muted-foreground">
                            Friday: Closed
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Map Placeholder */}
                  <ScrollReveal variant="scaleUp" delay={0.5}>
                    <div className="aspect-video rounded-xl overflow-hidden border border-border shadow-inner bg-muted">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.8684534839583!2d55.40544!3d25.1636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f61c62f6c1e3d%3A0x4c6d98c6f6a4c6a5!2sInternational%20City%20-%20Dubai!5e0!3m2!1sen!2sae!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Touch Wood Technical Services Location"
                      />
                    </div>
                  </ScrollReveal>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
