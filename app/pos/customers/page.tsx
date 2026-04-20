"use client"

import { useState } from "react"
import { 
  Search, 
  Plus,
  Phone,
  Mail,
  MapPin,
  FileText,
  MoreHorizontal,
  User,
  Building,
  Edit,
  Trash2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const mockCustomers = [
  {
    id: 1,
    name: "Ahmed Al Maktoum",
    type: "individual",
    phone: "+971 50 123 4567",
    email: "ahmed@example.com",
    address: "Dubai Marina, Tower A, Apt 2504",
    totalQuotes: 5,
    totalSpent: 24500,
    lastOrder: "2024-01-15",
  },
  {
    id: 2,
    name: "Emirates Mall Management",
    type: "corporate",
    phone: "+971 4 341 4567",
    email: "maintenance@emiratesmall.ae",
    address: "Emirates Mall, Management Office",
    totalQuotes: 12,
    totalSpent: 185000,
    lastOrder: "2024-01-10",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    type: "individual",
    phone: "+971 55 987 6543",
    email: "sarah.j@gmail.com",
    address: "JBR, Rimal 3, Unit 1802",
    totalQuotes: 3,
    totalSpent: 18750,
    lastOrder: "2024-01-14",
  },
  {
    id: 4,
    name: "Al Futtaim Properties",
    type: "corporate",
    phone: "+971 4 567 8901",
    email: "facilities@alfuttaim.ae",
    address: "Festival City, Office Complex B",
    totalQuotes: 25,
    totalSpent: 450000,
    lastOrder: "2024-01-05",
  },
  {
    id: 5,
    name: "Mohammed Hassan",
    type: "individual",
    phone: "+971 52 456 7890",
    email: "m.hassan@outlook.com",
    address: "Business Bay, Executive Tower, Office 1205",
    totalQuotes: 2,
    totalSpent: 5600,
    lastOrder: "2024-01-12",
  },
  {
    id: 6,
    name: "Dubai Holdings",
    type: "corporate",
    phone: "+971 4 890 1234",
    email: "maintenance@dubaiholdings.ae",
    address: "DIFC, Gate Village, Building 3",
    totalQuotes: 45,
    totalSpent: 890000,
    lastOrder: "2024-01-18",
  },
]

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const filteredCustomers = mockCustomers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm)
    
    const matchesType = typeFilter === "all" || customer.type === typeFilter

    return matchesSearch && matchesType
  })

  return (
    <div className="p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-2">
              Customers
            </h1>
            <p className="text-muted-foreground">
              Manage your customer database
            </p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Customer
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Customer</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Customer Name</Label>
                  <Input id="name" placeholder="Enter customer name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="type">Customer Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">Individual</SelectItem>
                      <SelectItem value="corporate">Corporate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+971 XX XXX XXXX" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="email@example.com" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Full address" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsAddDialogOpen(false)}>
                  Add Customer
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{mockCustomers.length}</p>
                  <p className="text-xs text-muted-foreground">Total Customers</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-100">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {mockCustomers.filter((c) => c.type === "individual").length}
                  </p>
                  <p className="text-xs text-muted-foreground">Individuals</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-100">
                  <Building className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {mockCustomers.filter((c) => c.type === "corporate").length}
                  </p>
                  <p className="text-xs text-muted-foreground">Corporate</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {mockCustomers.reduce((sum, c) => sum + c.totalSpent, 0).toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground">Total Revenue (AED)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, or phone..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="individual">Individual</SelectItem>
                  <SelectItem value="corporate">Corporate</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Customer Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredCustomers.map((customer) => (
            <Card key={customer.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      {customer.type === "corporate" ? (
                        <Building className="h-5 w-5 text-primary" />
                      ) : (
                        <User className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-base">{customer.name}</CardTitle>
                      <Badge
                        variant="secondary"
                        className="text-xs mt-1 capitalize"
                      >
                        {customer.type}
                      </Badge>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <FileText className="h-4 w-4 mr-2" />
                        New Quote
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  {customer.phone}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  {customer.email}
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  <span className="line-clamp-2">{customer.address}</span>
                </div>
                <div className="pt-3 border-t grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-lg font-bold">{customer.totalQuotes}</p>
                    <p className="text-xs text-muted-foreground">Quotes</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold">
                      {customer.totalSpent.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">AED Spent</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
