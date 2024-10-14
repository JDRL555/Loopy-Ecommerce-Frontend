import { Product } from '@/shared/interfaces/models/Product.interface'
import { create } from 'zustand'

interface State {
  products: Product[],
  setProducts: (newProducts: Product[]) => void
}

export const useProductsStore = create<State>(set => ({
  products: [],
  setProducts: (newProducts: Product[]) => set({ products: newProducts })
}))