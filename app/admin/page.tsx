"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  ClipboardList, 
  Users, 
  DollarSign, 
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react"
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts"

const stats = [
  {
    title: "Total Work Orders",
    value: "156",
    change: "+12%",
    changeType: "positive",
    icon: ClipboardList
  },
  {
    title: "Active Staff",
    value: "24",
    change: "+2",
    changeType: "positive",
    icon: Users
  },
  {
    title: "Revenue (AED)",
    value: "847,500",
    change: "+18%",
    changeType: "positive",
    icon: DollarSign
  },
  {
    title: "Completion Rate",
    value: "94%",
    change: "+3%",
    changeType: "positive",
    icon: TrendingUp
  },
]

const revenueData = [
  { month: "Jan", revenue: 65000 },
  { month: "Feb", revenue: 72000 },
  { month: "Mar", revenue: 68000 },
  { month: "Apr", revenue: 85000 },
  { month: "May", revenue: 92000 },
  { month: "Jun", revenue: 88000 },
]

const workOrdersByService = [
  { service: "Carpentry", count: 45 },
  { service: "Electrical", count: 32 },
  { service: "Painting", count: 28 },
  { service: "AC/HVAC", count: 24 },
  { service: "Tiling", count: 18 },
  { service: "Cleaning", count: 15 },
]

const recentWorkOrders = [
  { id: "WO-001", client: "Emirates Towers", service: "AC Maintenance", status: "In Progress", assignee: "Ahmed K." },
  { id: "WO-002", client: "Palm Residence", service: "Carpentry", status: "Completed", assignee: "Mohammed R." },
  { id: "WO-003", client: "Business Bay Office", service: "Electrical", status: "Pending", assignee: "Unassigned" },
  { id: "WO-004", client: "Marina Heights", service: "Painting", status: "In Progress", assignee: "Khalid S." },
  { id: "WO-005", client: "Downtown Villa", service: "Tiling", status: "Completed", assignee: "Omar H." },
]

export default function AdminDashboard() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-serif text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here&apos;s what&apos;s happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="font-serif text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                  <p className={`text-sm mt-1 ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Revenue Overview</CardTitle>
            <CardDescription>Monthly revenue for the past 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--primary))' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Work Orders by Service */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Work Orders by Service</CardTitle>
            <CardDescription>Distribution of work orders across services</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={workOrdersByService} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis dataKey="service" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} width={80} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="count" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Work Orders */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif">Recent Work Orders</CardTitle>
          <CardDescription>Latest work orders and their status</CardDescription>
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
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentWorkOrders.map((order) => (
                  <tr key={order.id} className="border-b border-border last:border-0">
                    <td className="py-4 px-4 text-sm font-medium text-foreground">{order.id}</td>
                    <td className="py-4 px-4 text-sm text-foreground">{order.client}</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{order.service}</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{order.assignee}</td>
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
