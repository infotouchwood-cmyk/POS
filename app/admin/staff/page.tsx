"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  Plus, 
  Search, 
  Phone,
  Mail,
  MoreHorizontal
} from "lucide-react"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const staff = [
  { id: 1, name: "Ahmed Khan", role: "Lead Technician", department: "AC/Ventilation", phone: "+971 50 123 4567", email: "ahmed@touchwood.ae", status: "Active", activeOrders: 3 },
  { id: 2, name: "Mohammed Rashid", role: "Senior Carpenter", department: "Carpentry", phone: "+971 50 234 5678", email: "mohammed@touchwood.ae", status: "Active", activeOrders: 2 },
  { id: 3, name: "Khalid Saeed", role: "Painter", department: "Painting", phone: "+971 50 345 6789", email: "khalid@touchwood.ae", status: "Active", activeOrders: 1 },
  { id: 4, name: "Omar Hassan", role: "Tile Specialist", department: "Tiling", phone: "+971 50 456 7890", email: "omar@touchwood.ae", status: "Active", activeOrders: 2 },
  { id: 5, name: "Faisal Malik", role: "Electrician", department: "Electrical", phone: "+971 50 567 8901", email: "faisal@touchwood.ae", status: "Active", activeOrders: 4 },
  { id: 6, name: "Yusuf Ali", role: "Technician", department: "AC/Ventilation", phone: "+971 50 678 9012", email: "yusuf@touchwood.ae", status: "On Leave", activeOrders: 0 },
  { id: 7, name: "Hassan Ibrahim", role: "Junior Carpenter", department: "Carpentry", phone: "+971 50 789 0123", email: "hassan@touchwood.ae", status: "Active", activeOrders: 1 },
  { id: 8, name: "Samir Noor", role: "Cleaning Supervisor", department: "Building Cleaning", phone: "+971 50 890 1234", email: "samir@touchwood.ae", status: "Active", activeOrders: 5 },
]

export default function StaffPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredStaff = staff.filter(member => 
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.department.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Staff Management</h1>
          <p className="text-muted-foreground mt-1">Manage your team members and assignments</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-5 h-5" />
          Add Staff Member
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search staff..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Staff Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStaff.map((member) => (
          <Card key={member.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="w-14 h-14">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>Edit Details</DropdownMenuItem>
                    <DropdownMenuItem>View Schedule</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Remove</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Department</span>
                  <span className="font-medium text-foreground">{member.department}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Active Orders</span>
                  <span className="font-medium text-foreground">{member.activeOrders}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <span className={`
                    inline-flex px-2.5 py-1 rounded-full text-xs font-medium
                    ${member.status === 'Active' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                    }
                  `}>
                    {member.status}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border space-y-2">
                <a 
                  href={`tel:${member.phone}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {member.phone}
                </a>
                <a 
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {member.email}
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
