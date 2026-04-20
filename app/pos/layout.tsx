"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Calculator, 
  ClipboardList, 
  Users, 
  Settings,
  Home,
  Menu,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/pos", label: "Sales & Billing", icon: Calculator },
  { href: "/pos/products", label: "Manage Products", icon: ClipboardList },
  { href: "/pos/quotes", label: "Saved Invoices", icon: ClipboardList },
  { href: "/pos/customers", label: "Customers", icon: Users },
  { href: "/pos/settings", label: "Settings", icon: Settings },
]

export default function POSLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-background border-b z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <span className="font-serif text-lg font-semibold text-foreground">
            Touch Wood POS
          </span>
        </div>
        <Link href="/">
          <Button variant="outline" size="sm">
            <Home className="h-4 w-4 mr-2" />
            Website
          </Button>
        </Link>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-background border-r z-50 transform transition-transform duration-200 lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6 border-b">
          <Link href="/pos" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Calculator className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-serif text-lg font-semibold text-foreground">
                Touch Wood
              </h1>
              <p className="text-xs text-muted-foreground">POS System</p>
            </div>
          </Link>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <Link href="/">
            <Button variant="outline" className="w-full">
              <Home className="h-4 w-4 mr-2" />
              Back to Website
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0 min-h-screen">
        {children}
      </main>
    </div>
  )
}
