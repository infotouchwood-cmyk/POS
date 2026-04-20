import { AdminSidebar } from "@/components/admin/sidebar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Admin Dashboard | Touch Wood Technical Services',
  description: 'Manage work orders, staff assignments, and company metrics.',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <AdminSidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
