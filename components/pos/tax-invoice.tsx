"use client"

import { forwardRef } from "react"

export interface InvoiceItem {
  id: string
  name: string
  quantity: number
  unitPrice: number
  total: number
  vatPercentage: number
}

export interface InvoiceData {
  invoiceNumber: string
  date: string
  customerName: string
  customerPhone: string
  customerEmail: string
  projectLocation: string
  items: InvoiceItem[]
  subtotal: number
  vatAmount: number
  grandTotal: number
}

interface TaxInvoiceProps {
  data: InvoiceData
}

export const TaxInvoice = forwardRef<HTMLDivElement, TaxInvoiceProps>(
  ({ data }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white text-black p-4 w-[80mm] mx-auto text-sm"
        style={{ fontFamily: "'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
      >
        {/* Header - Thermal Style */}
        <div className="text-center mb-6 space-y-1">
          <h1 className="text-xl font-extrabold uppercase leading-tight tracking-tight">
            Touch Wood
            <br />
            Technical Services LLC
          </h1>
          <p className="text-[11px] font-medium text-gray-700">
            Building & construction materials trading
          </p>
          <div className="text-[10px] leading-relaxed">
            <p>Morocco cluster building i04</p>
            <p>shop# 12 international city Dubai UAE</p>
            <p className="mt-1">Tel: 055 450 5473 / 054 373 9160</p>
            <p>Tax No.: 10020351500003</p>
          </div>
        </div>

        {/* Receipt Info */}
        <div className="border-t border-dashed border-black pt-3 mb-4 text-[12px] space-y-1">
          <div className="flex justify-between">
            <span>Invoice No:</span>
            <span className="font-bold">{data.invoiceNumber}</span>
          </div>
          <div className="flex justify-between">
            <span>Date:</span>
            <span>{data.date}</span>
          </div>
          <div className="flex justify-between">
            <span className="shrink-0 mr-4">Customer:</span>
            <span className="font-bold text-right">{data.customerName || "Walk-in"}</span>
          </div>
          {data.customerPhone && (
            <div className="flex justify-between">
              <span>Tel:</span>
              <span>{data.customerPhone}</span>
            </div>
          )}
        </div>

        {/* Items List */}
        <div className="border-t border-dashed border-black pt-3 mb-3">
          {data.items.map((item) => (
            <div key={item.id} className="mb-3">
              <div className="flex justify-between font-bold">
                <span className="uppercase text-[12px]">{item.name}</span>
              </div>
              <div className="flex justify-between text-[12px] mt-0.5">
                <span className="text-gray-700">{item.quantity} x {item.unitPrice.toFixed(2)}</span>
                <span className="font-bold">AED {item.total.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Calculations */}
        <div className="border-t border-dashed border-black pt-3 space-y-1.5">
          <div className="flex justify-between text-[12px]">
            <span>Items count:</span>
            <span className="font-medium">{data.items.length}</span>
          </div>
          <div className="flex justify-between text-[12px]">
            <span>Subtotal:</span>
            <span>AED {data.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-[12px]">
            <span>Tax 5%:</span>
            <span>AED {data.vatAmount.toFixed(2)}</span>
          </div>

          <div className="border-t-2 border-double border-black pt-3 flex justify-between font-black text-lg">
            <span>GRAND TOTAL:</span>
            <span>AED {data.grandTotal.toFixed(2)}</span>
          </div>
        </div>

        <div className="border-t border-dashed border-black mt-4 pt-2 text-center text-[10px]">
          <p className="font-bold">Thank you for your business!</p>
          <div className="mt-4 opacity-30 flex justify-center">
            {/* Simple Barcode Placeholder */}
            <div className="w-full h-8 bg-black flex space-x-1 p-0.5">
              {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className={`h-full ${Math.random() > 0.5 ? 'bg-white' : 'bg-black'} flex-1`} />
              ))}
            </div>
          </div>
          <p className="mt-1">{data.invoiceNumber}</p>
        </div>
      </div>
    )
  }
)

TaxInvoice.displayName = "TaxInvoice"
