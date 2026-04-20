import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

const services = [
  "Carpentry",
  "Electrical Maintenance",
  "Building Cleaning",
  "AC/Ventilation Installation",
  "Painting",
  "Tiling",
  "Wallpaper Fixing",
]

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sidebar-primary rounded-sm flex items-center justify-center">
                <span className="text-sidebar-primary-foreground font-serif font-bold text-lg">TW</span>
              </div>
              <div>
                <p className="font-serif text-lg font-semibold leading-tight">Touch Wood</p>
                <p className="text-xs text-sidebar-foreground/70 tracking-wide">Technical Services L.L.C</p>
              </div>
            </div>
            <p className="text-sidebar-foreground/80 text-sm leading-relaxed">
              Providing expert technical services in Dubai since 2011. Quality craftsmanship you can trust.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sidebar-primary shrink-0 mt-0.5" />
                <span className="text-sm text-sidebar-foreground/80">
                  IC1-MOR-I04-S12, International City, Dubai
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sidebar-primary shrink-0" />
                <div className="text-sm text-sidebar-foreground/80">
                  <p>971-4-5830376</p>
                  <p>971-54-9941632</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sidebar-primary shrink-0" />
                <a
                  href="mailto:infotouchwood@gmail.com"
                  className="text-sm text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors"
                >
                  infotouchwood@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Signals & Copyright */}
        <div className="mt-12 pt-8 border-t border-sidebar-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-sidebar-foreground/60">
              <span>License No: <strong className="text-sidebar-foreground/80">656792</strong></span>
              <span>DCCI: <strong className="text-sidebar-foreground/80">195124</strong></span>
            </div>
            <p className="text-sm text-sidebar-foreground/60">
              &copy; {new Date().getFullYear()} Touch Wood Technical Services L.L.C. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
