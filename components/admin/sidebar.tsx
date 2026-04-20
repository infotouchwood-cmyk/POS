"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  ClipboardList, 
  Users, 
  BarChart3, 
  Settings,
  LogOut,
  Menu,
  X,
  Receipt
} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/work-orders", label: "Work Orders", icon: ClipboardList },
  { href: "/admin/staff", label: "Staff", icon: Users },
  { href: "/admin/reports", label: "Reports", icon: BarChart3 },
  { href: "/pos", label: "POS System", icon: Receipt },
  { href: "/admin/settings", label: "Settings", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-sidebar p-2 rounded-lg text-sidebar-foreground"
      >
        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-foreground/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 h-screen w-64 bg-sidebar text-sidebar-foreground z-40
        transform transition-transform duration-300 ease-in-out
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-sidebar-border">
            <Link href="/admin" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sidebar-primary rounded-sm flex items-center justify-center">
                <span className="text-sidebar-primary-foreground font-serif font-bold text-lg">TW</span>
              </div>
              <div>
                <p className="font-serif text-base font-semibold leading-tight">Touch Wood</p>
                <p className="text-xs text-sidebar-foreground/70">Admin Panel</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== "/admin" && pathname.startsWith(item.href))
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground' 
                      : 'text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50'
                    }
                  `}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-sidebar-border">
            <Link href="/">
              <Button 
                variant="ghost" 
                className="w-full justify-start gap-3 text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
              >
                <LogOut className="w-5 h-5" />
                Back to Website
              </Button>
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}
