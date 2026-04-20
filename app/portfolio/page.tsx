"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, X } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion, AnimatePresence } from "framer-motion"

const categories = ["All", "Carpentry", "Electrical", "Painting", "Tiling", "AC/Ventilation"]

const projects = [
  {
    id: 1,
    title: "Modern Kitchen Renovation",
    category: "Carpentry",
    description: "Complete kitchen cabinet installation and custom woodwork for a luxury villa in Palm Jumeirah.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    location: "Palm Jumeirah, Dubai"
  },
  {
    id: 2,
    title: "Commercial Office Wiring",
    category: "Electrical",
    description: "Full electrical installation for a 5000 sq ft office space in Business Bay.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
    location: "Business Bay, Dubai"
  },
  {
    id: 3,
    title: "Villa Exterior Painting",
    category: "Painting",
    description: "Complete exterior repainting and weatherproofing for a family villa.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop",
    location: "Emirates Hills, Dubai"
  },
  {
    id: 4,
    title: "Bathroom Tile Installation",
    category: "Tiling",
    description: "Luxury marble tile installation for master bathroom renovation.",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop",
    location: "Downtown Dubai"
  },
  {
    id: 5,
    title: "Restaurant HVAC System",
    category: "AC/Ventilation",
    description: "Complete ventilation and AC system installation for a new restaurant.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=600&fit=crop",
    location: "JBR, Dubai"
  },
  {
    id: 6,
    title: "Custom Wardrobe Design",
    category: "Carpentry",
    description: "Built-in wardrobes with custom shelving and lighting system.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=600&fit=crop",
    location: "Marina, Dubai"
  },
  {
    id: 7,
    title: "Smart Home Lighting",
    category: "Electrical",
    description: "Complete smart lighting installation with automated controls.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    location: "Arabian Ranches, Dubai"
  },
  {
    id: 8,
    title: "Interior Feature Wall",
    category: "Painting",
    description: "Decorative textured painting with metallic accents for living room.",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&h=600&fit=crop",
    location: "DIFC, Dubai"
  },
  {
    id: 9,
    title: "Pool Deck Tiling",
    category: "Tiling",
    description: "Non-slip tile installation around luxury pool area.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    location: "Palm Jumeirah, Dubai"
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

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
                  Portfolio
                </p>
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                  Our Work Speaks for Itself
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Explore our portfolio of completed projects across Dubai. Each project showcases our commitment to quality craftsmanship and attention to detail.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Filter & Gallery */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Category Filter */}
            <ScrollReveal variant="fadeIn" delay={0.2}>
              <div className="flex flex-wrap gap-3 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                      activeCategory === category
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:col-span-3 w-full"
                >
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="group text-left bg-card h-full w-full rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
                      >
                        <div className="aspect-[4/3] overflow-hidden">
                          <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                            style={{ backgroundImage: `url(${project.image})` }}
                          />
                        </div>
                        <div className="p-6">
                          <span className="text-xs font-medium text-primary tracking-widest uppercase">
                            {project.category}
                          </span>
                          <h3 className="font-serif text-xl font-semibold text-foreground mt-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-2">{project.location}</p>
                        </div>
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <div className="aspect-video">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${selectedProject.image})` }}
                    />
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center text-foreground hover:bg-background transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-8">
                  <span className="text-xs font-medium text-primary tracking-widest uppercase">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-foreground mt-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-muted-foreground mt-1">{selectedProject.location}</p>
                  <p className="text-foreground mt-4 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  <Link href="/contact" className="inline-block mt-6">
                    <Button className="gap-2">
                      Start Similar Project
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <section className="py-24 bg-sidebar text-sidebar-foreground">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <ScrollReveal variant="scaleUp">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-sidebar-foreground/80 mb-8 max-w-2xl mx-auto">
                Let us bring your vision to life. Contact us for a free consultation and quote.
              </p>
              <Link href="/contact">
                <Button size="lg" className="gap-2 bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90">
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
