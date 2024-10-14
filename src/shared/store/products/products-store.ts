import { Param } from '@/shared/interfaces/api.interface'
import { Product } from '@/shared/interfaces/models/Product.interface'
import { create } from 'zustand'

interface State {
  products: Product[],
  reload: boolean,
  params: Param<Product>,
  handleReload: () => void,
  setProducts: (newProducts: Product[]) => void,
  setParams: (params: Param<Product>) => void,
}

export const useProductsStore = create<State>(set => ({
  products: [],
  reload: false,
  params: {
    limit: 10,
    page: 1,
    filter: {}
  },

  setProducts: (newProducts: Product[]) => 
    set({ 
      products: newProducts 
    }),
  handleReload: () => set(state => ({ reload: !state.reload })),
  setParams: (newParams: Param<Product>) => 
    set(state => ({ 
      params: { ...state.params, ...newParams } 
    }))
}))