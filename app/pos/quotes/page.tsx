"use client"

import { useState } from "react"
import { 
  Search, 
  Eye, 
  Printer, 
  Trash2, 
  MoreHorizontal,
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  Filter
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const mockQuotes = [
  {
    id: "QT-2024-001",
    customer: "Ahmed Al Maktoum",
    phone: "+971 50 123 4567",
    location: "Dubai Marina, Tower A",
    total: 4500.00,
    status: "pending",
    date: "2024-01-15",
    items: 5,
  },
  {
    id: "QT-2024-002",
    customer: "Sarah Johnson",
    phone: "+971 55 987 6543",
    location: "JBR, Rimal 3",
    total: 12750.00,
    status: "approved",
    date: "2024-01-14",
    items: 8,
  },
  {
    id: "QT-2024-003",
    customer: "Mohammed Hassan",
    phone: "+971 52 456 7890",
    location: "Business Bay, Executive Tower",
    total: 2800.00,
    status: "completed",
    date: "2024-01-12",
    items: 3,
  },
  {
    id: "QT-2024-004",
    customer: "Emirates Mall Management",
    phone: "+971 4 341 4567",
    location: "Emirates Mall, Store 234",
    total: 45000.00,
    status: "approved",
    date: "2024-01-10",
    items: 15,
  },
  {
    id: "QT-2024-005",
    customer: "Fatima Al Rashid",
    phone: "+971 56 234 5678",
    location: "Downtown Dubai, Burj Views",
    total: 6200.00,
    status: "rejected",
    date: "2024-01-08",
    items: 4,
  },
  {
    id: "QT-2024-006",
    customer: "Al Futtaim Properties",
    phone: "+971 4 567 8901",
    location: "Festival City, Office Complex",
    total: 89500.00,
    status: "pending",
    date: "2024-01-05",
    items: 25,
  },
]

const statusConfig = {
  pending: { label: "Pending", icon: Clock, color: "bg-amber-100 text-amber-800" },
  approved: { label: "Approved", icon: CheckCircle, color: "bg-emerald-100 text-emerald-800" },
  completed: { label: "Completed", icon: CheckCircle, color: "bg-blue-100 text-blue-800" },
  rejected: { label: "Rejected", icon: XCircle, color: "bg-red-100 text-red-800" },
}

export default function SavedQuotesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredQuotes = mockQuotes.filter((quote) => {
    const matchesSearch =
      quote.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === "all" || quote.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const totalValue = filteredQuotes.reduce((sum, q) => sum + q.total, 0)

  return (
    <div className="p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-2">
            Saved Quotes
          </h1>
          <p className="text-muted-foreground">
            View and manage all your quotations
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{mockQuotes.length}</p>
                  <p className="text-xs text-muted-foreground">Total Quotes</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-100">
                  <Clock className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {mockQuotes.filter((q) => q.status === "pending").length}
                  </p>
                  <p className="text-xs text-muted-foreground">Pending</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-100">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {mockQuotes.filter((q) => q.status === "approved").length}
                  </p>
                  <p className="text-xs text-muted-foreground">Approved</p>
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
                    {totalValue.toLocaleString()} <span className="text-sm font-normal">AED</span>
                  </p>
                  <p className="text-xs text-muted-foreground">Total Value</p>
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
                  placeholder="Search by customer, quote ID, or location..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Quotes Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              Quotations ({filteredQuotes.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Quote ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden md:table-cell">Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead className="hidden sm:table-cell">Date</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredQuotes.map((quote) => {
                    const status = statusConfig[quote.status as keyof typeof statusConfig]
                    return (
                      <TableRow key={quote.id}>
                        <TableCell className="font-medium">{quote.id}</TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{quote.customer}</p>
                            <p className="text-xs text-muted-foreground">
                              {quote.phone}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell text-muted-foreground">
                          {quote.location}
                        </TableCell>
                        <TableCell>
                          <Badge className={status.color}>
                            {status.label}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          {quote.total.toLocaleString()} AED
                        </TableCell>
                        <TableCell className="hidden sm:table-cell text-muted-foreground">
                          {new Date(quote.date).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Printer className="h-4 w-4 mr-2" />
                                Print Quote
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
