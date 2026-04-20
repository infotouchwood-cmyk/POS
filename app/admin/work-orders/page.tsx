"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Plus, 
  Search, 
  Filter,
  Clock,
  CheckCircle2,
  AlertCircle,
  MoreHorizontal
} from "lucide-react"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const workOrders = [
  { id: "WO-001", client: "Emirates Towers", service: "AC Maintenance", status: "In Progress", assignee: "Ahmed K.", date: "2024-03-15", priority: "High" },
  { id: "WO-002", client: "Palm Residence", service: "Carpentry", status: "Completed", assignee: "Mohammed R.", date: "2024-03-14", priority: "Medium" },
  { id: "WO-003", client: "Business Bay Office", service: "Electrical", status: "Pending", assignee: "Unassigned", date: "2024-03-16", priority: "High" },
  { id: "WO-004", client: "Marina Heights", service: "Painting", status: "In Progress", assignee: "Khalid S.", date: "2024-03-13", priority: "Low" },
  { id: "WO-005", client: "Downtown Villa", service: "Tiling", status: "Completed", assignee: "Omar H.", date: "2024-03-12", priority: "Medium" },
  { id: "WO-006", client: "JBR Penthouse", service: "Building Cleaning", status: "Pending", assignee: "Unassigned", date: "2024-03-17", priority: "Low" },
  { id: "WO-007", client: "DIFC Tower", service: "Wallpaper", status: "In Progress", assignee: "Faisal M.", date: "2024-03-15", priority: "Medium" },
  { id: "WO-008", client: "Silicon Oasis", service: "AC Maintenance", status: "Completed", assignee: "Ahmed K.", date: "2024-03-10", priority: "High" },
]

const statusFilters = ["All", "Pending", "In Progress", "Completed"]

export default function WorkOrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")

  const filteredOrders = workOrders.filter(order => {
    const matchesSearch = order.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.service.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "All" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Work Orders</h1>
          <p className="text-muted-foreground mt-1">Manage and track all work orders</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-5 h-5" />
          New Work Order
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search orders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              {statusFilters.map((status) => (
                <Button
                  key={status}
                  variant={statusFilter === status ? "default" : "outline"}
                  size="sm"
                  onClick={() => setStatusFilter(status)}
                >
                  {status}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Work Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif">All Work Orders</CardTitle>
          <CardDescription>{filteredOrders.length} orders found</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Order ID</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Client</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Service</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Assignee</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Priority</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-4 text-sm font-medium text-foreground">{order.id}</td>
                    <td className="py-4 px-4 text-sm text-foreground">{order.client}</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{order.service}</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{order.assignee}</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{order.date}</td>
                    <td className="py-4 px-4">
                      <span className={`
                        inline-flex px-2.5 py-1 rounded-full text-xs font-medium
                        ${order.priority === 'High' 
                          ? 'bg-red-100 text-red-700' 
                          : order.priority === 'Medium'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-green-100 text-green-700'
                        }
                      `}>
                        {order.priority}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`
                        inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium
                        ${order.status === 'Completed' 
                          ? 'bg-green-100 text-green-700' 
                          : order.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-yellow-100 text-yellow-700'
                        }
                      `}>
                        {order.status === 'Completed' && <CheckCircle2 className="w-3 h-3" />}
                        {order.status === 'In Progress' && <Clock className="w-3 h-3" />}
                        {order.status === 'Pending' && <AlertCircle className="w-3 h-3" />}
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Order</DropdownMenuItem>
                          <DropdownMenuItem>Assign Staff</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Cancel Order</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
