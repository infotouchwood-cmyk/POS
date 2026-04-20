export interface Product {
  id: string
  name: string
  category: string
  costPrice: number
  salePrice: number
  stockQuantity: number
  vatPercentage: number
}

export const initialProducts: Product[] = [
  // Products from Excel (Primary)
  { id: "16", name: "veto bell switch", category: "Electrical", costPrice: 3.15, salePrice: 7, stockQuantity: 100, vatPercentage: 5 },
  { id: "17", name: "innova bulb holder converter", category: "Electrical", costPrice: 2.31, salePrice: 5, stockQuantity: 100, vatPercentage: 5 },
  { id: "18", name: "veto tape black white", category: "Electrical", costPrice: 0.84, salePrice: 1.5, stockQuantity: 100, vatPercentage: 5 },
  { id: "19", name: "veto fan regulator 3x3", category: "Electrical", costPrice: 12.6, salePrice: 15, stockQuantity: 100, vatPercentage: 5 },
  { id: "20", name: "veto bed switch", category: "Electrical", costPrice: 1.83, salePrice: 5, stockQuantity: 100, vatPercentage: 5 },
  { id: "21", name: "wire flat red/black", category: "Electrical", costPrice: 12.6, salePrice: 20, stockQuantity: 100, vatPercentage: 5 },
  { id: "22", name: "veto trunking 16x16", category: "Electrical", costPrice: 2.625, salePrice: 5, stockQuantity: 100, vatPercentage: 5 },
  { id: "23", name: "veto trunking 25x16", category: "Electrical", costPrice: 3.67, salePrice: 7, stockQuantity: 100, vatPercentage: 5 },
  { id: "24", name: "veto tester small", category: "Electrical", costPrice: 2.1, salePrice: 5, stockQuantity: 100, vatPercentage: 5 },
  { id: "25", name: "veto top plug 13a", category: "Electrical", costPrice: 2.625, salePrice: 5, stockQuantity: 100, vatPercentage: 5 },
  { id: "26", name: "veto top plug 15a", category: "Electrical", costPrice: 3.67, salePrice: 5, stockQuantity: 100, vatPercentage: 5 },
  { id: "27", name: "veto single socket 15a", category: "Electrical", costPrice: 5.25, salePrice: 10, stockQuantity: 100, vatPercentage: 5 },
  { id: "28", name: "veto single socket 13a", category: "Electrical", costPrice: 4.46, salePrice: 10, stockQuantity: 100, vatPercentage: 5 },
  { id: "29", name: "veto double socket 13a", category: "Electrical", costPrice: 6.56, salePrice: 10, stockQuantity: 100, vatPercentage: 5 },
  { id: "30", name: "veto pvc box 3x3", category: "Electrical", costPrice: 0.84, salePrice: 3, stockQuantity: 100, vatPercentage: 5 },
]
