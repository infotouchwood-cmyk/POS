"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Calendar } from "lucide-react"
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts"

const monthlyRevenue = [
  { month: "Jan", revenue: 65000, expenses: 42000 },
  { month: "Feb", revenue: 72000, expenses: 45000 },
  { month: "Mar", revenue: 68000, expenses: 44000 },
  { month: "Apr", revenue: 85000, expenses: 52000 },
  { month: "May", revenue: 92000, expenses: 55000 },
  { month: "Jun", revenue: 88000, expenses: 53000 },
]

const serviceRevenue = [
  { name: "Carpentry", value: 185000 },
  { name: "Electrical", value: 142000 },
  { name: "AC/HVAC", value: 128000 },
  { name: "Painting", value: 95000 },
  { name: "Tiling", value: 78000 },
  { name: "Cleaning", value: 52000 },
]

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))', 'hsl(var(--primary))']

const customerSatisfaction = [
  { month: "Jan", score: 4.2 },
  { month: "Feb", score: 4.3 },
  { month: "Mar", score: 4.5 },
  { month: "Apr", score: 4.4 },
  { month: "May", score: 4.6 },
  { month: "Jun", score: 4.7 },
]

export default function ReportsPage() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground mt-1">View detailed business insights and metrics</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Calendar className="w-5 h-5" />
            Date Range
          </Button>
          <Button className="gap-2">
            <Download className="w-5 h-5" />
            Export
          </Button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Total Revenue (YTD)</p>
            <p className="font-serif text-3xl font-bold text-foreground mt-1">AED 680K</p>
            <p className="text-sm text-green-600 mt-1">+23% vs last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Total Expenses (YTD)</p>
            <p className="font-serif text-3xl font-bold text-foreground mt-1">AED 291K</p>
            <p className="text-sm text-yellow-600 mt-1">+8% vs last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Net Profit (YTD)</p>
            <p className="font-serif text-3xl font-bold text-foreground mt-1">AED 389K</p>
            <p className="text-sm text-green-600 mt-1">+35% vs last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Avg. Customer Rating</p>
            <p className="font-serif text-3xl font-bold text-foreground mt-1">4.5/5.0</p>
            <p className="text-sm text-green-600 mt-1">+0.3 vs last year</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue vs Expenses */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Revenue vs Expenses</CardTitle>
            <CardDescription>Monthly comparison for the past 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyRevenue}>
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
                    name="Revenue"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="expenses" 
                    stroke="hsl(var(--chart-2))" 
                    strokeWidth={2}
                    name="Expenses"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Revenue by Service */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif">Revenue by Service</CardTitle>
            <CardDescription>Distribution across service categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={serviceRevenue}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {serviceRevenue.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Customer Satisfaction */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif">Customer Satisfaction Trend</CardTitle>
          <CardDescription>Average customer rating over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={customerSatisfaction}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis domain={[0, 5]} stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="score" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="Rating" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
