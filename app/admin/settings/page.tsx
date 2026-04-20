"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Building, Mail, Phone, MapPin, Save } from "lucide-react"
import { useState } from "react"

export default function SettingsPage() {
  const [companyInfo, setCompanyInfo] = useState({
    name: "Touch Wood Technical Services L.L.C",
    email: "infotouchwood@gmail.com",
    phone: "971-4-5830376",
    mobile: "971-54-9941632",
    address: "IC1-MOR-I04-S12, International City, Dubai",
    license: "656792",
    dcci: "195124",
    description: "Expert technical services in Dubai since 2011. Carpentry, electrical maintenance, building cleaning, AC installation, painting, tiling, and wallpaper fixing."
  })

  const handleSave = () => {
    // Simulate save
    alert("Settings saved successfully!")
  }

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-serif text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your company information and preferences</p>
      </div>

      {/* Company Information */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Building className="w-5 h-5 text-primary" />
            </div>
            <div>
              <CardTitle className="font-serif">Company Information</CardTitle>
              <CardDescription>Basic details about your company</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Company Name</label>
              <Input
                value={companyInfo.name}
                onChange={(e) => setCompanyInfo({ ...companyInfo, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Trade License Number</label>
              <Input
                value={companyInfo.license}
                onChange={(e) => setCompanyInfo({ ...companyInfo, license: e.target.value })}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">DCCI Number</label>
              <Input
                value={companyInfo.dcci}
                onChange={(e) => setCompanyInfo({ ...companyInfo, dcci: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Company Description</label>
            <Textarea
              value={companyInfo.description}
              onChange={(e) => setCompanyInfo({ ...companyInfo, description: e.target.value })}
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <CardTitle className="font-serif">Contact Information</CardTitle>
              <CardDescription>How customers can reach you</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  value={companyInfo.email}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, email: e.target.value })}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  value={companyInfo.phone}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, phone: e.target.value })}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Mobile Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  value={companyInfo.mobile}
                  onChange={(e) => setCompanyInfo({ ...companyInfo, mobile: e.target.value })}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Address</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <Textarea
                value={companyInfo.address}
                onChange={(e) => setCompanyInfo({ ...companyInfo, address: e.target.value })}
                className="pl-10"
                rows={2}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSave} className="gap-2">
          <Save className="w-5 h-5" />
          Save Changes
        </Button>
      </div>
    </div>
  )
}
