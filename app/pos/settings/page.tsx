"use client"

import { useState } from "react"
import { 
  Building2,
  Phone,
  Mail,
  FileText,
  Percent,
  Save,
  Plus,
  Trash2,
  Printer
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export default function POSSettingsPage() {
  const [companyInfo, setCompanyInfo] = useState({
    name: "Touch Wood Technical Services LLC",
    phone: "+971 4 XXX XXXX",
    email: "info@touchwooduae.com",
    address: "Office 123, Al Quoz Industrial Area 3, Dubai, UAE",
    trn: "100XXXXXXXXX",
    licenseNo: "XXXXX",
  })

  const [quoteSettings, setQuoteSettings] = useState({
    vatRate: 5,
    validityDays: 30,
    prefix: "QT",
    autoNumber: true,
    showVat: true,
    terms: "1. This quotation is valid for 30 days from the date of issue.\n2. 50% advance payment required upon confirmation.\n3. Balance payment upon completion of work.\n4. Prices are inclusive of materials and labor unless stated otherwise.\n5. Any additional work requested will be quoted separately.",
  })

  const [categories, setCategories] = useState([
    "Carpentry",
    "Electrical",
    "Plumbing",
    "Painting",
    "Tiling",
    "AC & HVAC",
    "General Maintenance",
  ])

  const [newCategory, setNewCategory] = useState("")

  const addCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories([...categories, newCategory.trim()])
      setNewCategory("")
    }
  }

  const removeCategory = (cat: string) => {
    setCategories(categories.filter((c) => c !== cat))
  }

  return (
    <div className="p-4 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-2">
            POS Settings
          </h1>
          <p className="text-muted-foreground">
            Configure your quotation system settings
          </p>
        </div>

        <div className="space-y-6">
          {/* Company Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Company Information
              </CardTitle>
              <CardDescription>
                This information will appear on all quotations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input
                    id="company-name"
                    value={companyInfo.name}
                    onChange={(e) =>
                      setCompanyInfo({ ...companyInfo, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="trn">TRN (Tax Registration Number)</Label>
                  <Input
                    id="trn"
                    value={companyInfo.trn}
                    onChange={(e) =>
                      setCompanyInfo({ ...companyInfo, trn: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    <Phone className="h-4 w-4 inline mr-1" />
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    value={companyInfo.phone}
                    onChange={(e) =>
                      setCompanyInfo({ ...companyInfo, phone: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    <Mail className="h-4 w-4 inline mr-1" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={companyInfo.email}
                    onChange={(e) =>
                      setCompanyInfo({ ...companyInfo, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  value={companyInfo.address}
                  onChange={(e) =>
                    setCompanyInfo({ ...companyInfo, address: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="license">Trade License Number</Label>
                <Input
                  id="license"
                  value={companyInfo.licenseNo}
                  onChange={(e) =>
                    setCompanyInfo({ ...companyInfo, licenseNo: e.target.value })
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Quote Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Quote Settings
              </CardTitle>
              <CardDescription>
                Configure how quotations are generated
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="vat">
                    <Percent className="h-4 w-4 inline mr-1" />
                    VAT Rate (%)
                  </Label>
                  <Input
                    id="vat"
                    type="number"
                    value={quoteSettings.vatRate}
                    onChange={(e) =>
                      setQuoteSettings({
                        ...quoteSettings,
                        vatRate: parseFloat(e.target.value) || 0,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="validity">Quote Validity (Days)</Label>
                  <Input
                    id="validity"
                    type="number"
                    value={quoteSettings.validityDays}
                    onChange={(e) =>
                      setQuoteSettings({
                        ...quoteSettings,
                        validityDays: parseInt(e.target.value) || 30,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="prefix">Quote Number Prefix</Label>
                  <Input
                    id="prefix"
                    value={quoteSettings.prefix}
                    onChange={(e) =>
                      setQuoteSettings({ ...quoteSettings, prefix: e.target.value })
                    }
                  />
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <Label>Auto-generate Quote Numbers</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically number new quotations
                  </p>
                </div>
                <Switch
                  checked={quoteSettings.autoNumber}
                  onCheckedChange={(checked) =>
                    setQuoteSettings({ ...quoteSettings, autoNumber: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Show VAT on Quotes</Label>
                  <p className="text-sm text-muted-foreground">
                    Display VAT breakdown on quotations
                  </p>
                </div>
                <Switch
                  checked={quoteSettings.showVat}
                  onCheckedChange={(checked) =>
                    setQuoteSettings({ ...quoteSettings, showVat: checked })
                  }
                />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="terms">Default Terms & Conditions</Label>
                <Textarea
                  id="terms"
                  rows={6}
                  value={quoteSettings.terms}
                  onChange={(e) =>
                    setQuoteSettings({ ...quoteSettings, terms: e.target.value })
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Service Categories */}
          <Card>
            <CardHeader>
              <CardTitle>Service Categories</CardTitle>
              <CardDescription>
                Manage the categories available when creating quotes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="New category name"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addCategory()}
                />
                <Button onClick={addCategory}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <div
                    key={cat}
                    className="flex items-center gap-1 px-3 py-1.5 bg-muted rounded-lg"
                  >
                    <span className="text-sm">{cat}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-5 w-5 text-muted-foreground hover:text-destructive"
                      onClick={() => removeCategory(cat)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Print Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Printer className="h-5 w-5" />
                Print Settings
              </CardTitle>
              <CardDescription>
                Configure how printed quotes look
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Include Company Logo</Label>
                  <p className="text-sm text-muted-foreground">
                    Show logo at the top of printed quotes
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Include Terms & Conditions</Label>
                  <p className="text-sm text-muted-foreground">
                    Print terms at the bottom of quotes
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Include Signature Line</Label>
                  <p className="text-sm text-muted-foreground">
                    Add customer signature area
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button size="lg">
              <Save className="h-4 w-4 mr-2" />
              Save Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
