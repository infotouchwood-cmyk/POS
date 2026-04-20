"use client"

import { useState, useRef } from "react"
import { useReactToPrint } from "react-to-print"
import {
  Plus,
  Minus,
  Trash2,
  Search,
  ShoppingCart,
  Calculator,
  Printer,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { TaxInvoice, InvoiceData, InvoiceItem } from "@/components/pos/tax-invoice"

import { initialProducts as products, type Product } from "@/lib/products"

interface CartItem {
  id: string
  productId: string
  name: string
  quantity: number
  unitPrice: number
  total: number
  vatPercentage: number
}

function generateInvoiceNumber() {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const random = String(Math.floor(Math.random() * 10000)).padStart(4, "0")
  return `TW-${year}${month}-${random}`
}

// POS Sales & Billing Page
export default function POSSalesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [cart, setCart] = useState<CartItem[]>([])
  const [customerName, setCustomerName] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const [customerEmail, setCustomerEmail] = useState("")
  const [projectLocation, setProjectLocation] = useState("")
  const [showInvoicePreview, setShowInvoicePreview] = useState(false)
  const [invoiceData, setInvoiceData] = useState<InvoiceData | null>(null)

  const invoiceRef = useRef<HTMLDivElement>(null)

  const handlePrint = useReactToPrint({
    contentRef: invoiceRef,
    documentTitle: `Invoice-${invoiceData?.invoiceNumber || ""}`,
  })

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.productId === product.id)
    if (existingItem) {
      updateQuantity(existingItem.id, 1)
    } else {
      const newItem: CartItem = {
        id: Date.now().toString(),
        productId: product.id,
        name: product.name,
        quantity: 1,
        unitPrice: product.salePrice,
        total: product.salePrice,
        vatPercentage: product.vatPercentage,
      }
      setCart([...cart, newItem])
    }
  }

  const updateQuantity = (itemId: string, delta: number) => {
    setCart(
      cart.map((item) => {
        if (item.id === itemId) {
          const newQty = Math.max(1, item.quantity + delta)
          return { ...item, quantity: newQty, total: newQty * item.unitPrice }
        }
        return item
      })
    )
  }

  const updatePrice = (itemId: string, newPrice: number) => {
    setCart(
      cart.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            unitPrice: newPrice,
            total: item.quantity * newPrice,
          }
        }
        return item
      })
    )
  }

  const removeFromCart = (itemId: string) => {
    setCart(cart.filter((item) => item.id !== itemId))
  }

  const clearCart = () => {
    setCart([])
    setCustomerName("")
    setCustomerPhone("")
    setCustomerEmail("")
    setProjectLocation("")
  }

  const grandTotal = cart.reduce((sum, item) => sum + item.total, 0)
  const vatAmount = (grandTotal * 5) / 105
  const subtotal = grandTotal - vatAmount

  const handleCheckout = () => {
    if (cart.length === 0) return

    const invoiceItems: InvoiceItem[] = cart.map((item) => ({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      total: item.total,
      vatPercentage: item.vatPercentage,
    }))

    const data: InvoiceData = {
      invoiceNumber: generateInvoiceNumber(),
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      customerName,
      customerPhone,
      customerEmail,
      projectLocation,
      items: invoiceItems,
      subtotal,
      vatAmount,
      grandTotal,
    }

    setInvoiceData(data)
    setShowInvoicePreview(true)
  }

  const completeSale = () => {
    handlePrint()
    setShowInvoicePreview(false)
    clearCart()
  }

  const [showCustomerDetails, setShowCustomerDetails] = useState(false)

  return (
    <div className="p-4 lg:p-6 min-h-screen">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-1">
              Sales & Billing
            </h1>
            <p className="text-muted-foreground text-sm">
              Search products, add to cart, and generate tax invoices
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowCustomerDetails(!showCustomerDetails)}
          >
            {showCustomerDetails ? "Hide" : "Show"} Customer Details
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Column - Product Search & Selection */}
          <div className="lg:col-span-3 space-y-6">
            {/* Customer Info */}
            {showCustomerDetails && (
              <Card className="animate-in fade-in slide-in-from-top-1 duration-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Customer Details (Optional)</CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Customer Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                  <Input
                    placeholder="Phone Number"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                  />
                  <Input
                    placeholder="Email (Optional)"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                  />
                  <Input
                    placeholder="Project Location"
                    value={projectLocation}
                    onChange={(e) => setProjectLocation(e.target.value)}
                  />
                </CardContent>
              </Card>
            )}

            {/* Product Search */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Search Products
                </CardTitle>
                <div className="relative mt-2">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Type to search products by name or category..."
                    className="pl-10 text-lg h-12"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    autoFocus
                  />
                  {searchTerm && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                      onClick={() => setSearchTerm("")}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 max-h-[600px] overflow-y-auto">
                  {filteredProducts.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => addToCart(product)}
                      className="p-4 border rounded-lg text-left hover:bg-muted/50 hover:border-primary transition-colors group"
                    >
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate group-hover:text-primary">
                            {product.name}
                          </p>
                          <Badge variant="outline" className="mt-1 text-xs">
                            {product.category}
                          </Badge>
                        </div>
                        <div className="shrink-0 text-right">
                          <p className="font-bold text-primary">
                            {product.salePrice.toFixed(2)}
                          </p>
                          <p className="text-xs text-muted-foreground">AED</p>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                        <span>Stock: {product.stockQuantity}</span>
                        <Plus className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                      </div>
                    </button>
                  ))}
                  {filteredProducts.length === 0 && (
                    <div className="col-span-full text-center py-12 text-muted-foreground">
                      <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No products found for &quot;{searchTerm}&quot;</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Cart */}
          <div className="lg:col-span-1">
            <Card className="sticky top-0">
              <CardHeader className="bg-muted/50 p-2 py-1.5 px-3">
                <CardTitle className="flex items-center gap-2 text-sm">
                  <ShoppingCart className="h-4 w-4" />
                  Cart ({cart.length} items)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {cart.length === 0 ? (
                  <div className="p-4 text-center text-muted-foreground">
                    <ShoppingCart className="h-10 w-10 mx-auto mb-2 opacity-30" />
                    <p className="text-sm font-bold">Cart is empty</p>
                    <p className="text-xs mt-0.5">Select products to add</p>
                  </div>
                ) : (
                  <div className="divide-y max-h-[400px] overflow-y-auto">
                    {cart.map((item) => (
                      <div key={item.id} className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <p className="font-medium text-sm flex-1 pr-2">
                            {item.name}
                          </p>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 text-destructive hover:text-destructive shrink-0"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-3">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-1">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, -1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <span className="text-muted-foreground font-light text-xs mx-1">x</span>
                          {/* Editable Price */}
                          <div className="flex items-center gap-1">
                            <Input
                              type="number"
                              min="0"
                              step="0.01"
                              value={item.unitPrice}
                              onChange={(e) =>
                                updatePrice(
                                  item.id,
                                  parseFloat(e.target.value) || 0
                                )
                              }
                              className="w-20 h-8 text-right text-sm"
                            />
                            <span className="text-xs text-muted-foreground">
                              AED
                            </span>
                          </div>
                        </div>
                        <div className="mt-2 text-right">
                          <span className="font-bold text-primary">
                            {item.total.toFixed(2)} AED
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {cart.length > 0 && (
                  <>
                    <Separator />
                    <div className="p-4 space-y-2 bg-muted/30">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>{subtotal.toFixed(2)} AED</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">VAT (5%)</span>
                        <span>{vatAmount.toFixed(2)} AED</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between text-xl font-bold pt-2">
                        <span>Grand Total</span>
                        <span className="text-primary text-2xl font-black">
                          {grandTotal.toFixed(2)} <span className="text-xs">AED</span>
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
              <CardFooter className="flex-col gap-1.5 bg-muted/50 p-3 pt-2 pb-2">
                <Button
                  className="w-full h-11 text-base bg-[#734A26] hover:bg-[#5C3B1E] text-white font-bold"
                  disabled={cart.length === 0}
                  onClick={handleCheckout}
                >
                  <Calculator className="h-4 w-4 mr-2" />
                  Checkout
                </Button>
                <Button
                  variant="ghost"
                  className="w-full h-7 text-red-600 hover:text-red-700 hover:bg-red-50 font-bold text-[10px] uppercase tracking-widest"
                  onClick={clearCart}
                  disabled={cart.length === 0}
                >
                  Clear Cart
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      {/* Invoice Preview Dialog */}
      <Dialog open={showInvoicePreview} onOpenChange={setShowInvoicePreview}>
        <DialogContent className="max-w-md max-h-[95vh] overflow-y-auto bg-slate-100 border-none shadow-2xl">
          <DialogHeader className="mb-4">
            <DialogTitle className="flex items-center gap-2 text-xl font-bold">
              <Printer className="h-6 w-6 text-primary" />
              Receipt Preview
            </DialogTitle>
          </DialogHeader>
          {invoiceData && (
            <div className="space-y-6">
              <div className="shadow-lg border rounded-sm overflow-hidden bg-white mx-auto">
                <TaxInvoice ref={invoiceRef} data={invoiceData} />
              </div>
              <div className="flex flex-col gap-3 pb-2 text-center">
                <Button
                  onClick={completeSale}
                  className="w-full h-16 text-xl font-black bg-blue-600 hover:bg-blue-700 text-white shadow-xl flex items-center justify-center gap-3 animate-pulse"
                >
                  <Printer className="h-6 w-6" />
                  Print Receipt Now
                </Button>
                <Button
                  variant="ghost"
                  className="text-muted-foreground hover:text-foreground text-xs"
                  onClick={() => setShowInvoicePreview(false)}
                >
                  Close & Edit Cart
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
