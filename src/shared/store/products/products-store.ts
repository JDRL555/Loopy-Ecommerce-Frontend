import { Param } from '@/shared/interfaces/api.interface'
import { Category } from '@/shared/interfaces/models/Category.interface'
import { Product } from '@/shared/interfaces/models/Product.interface'
import { create } from 'zustand'

interface State {
  products: Product[],
  categories: Category[],
  reload: boolean,
  params: Param<Product>,
  handleReload: () => void,
  setProducts: (newProducts: Product[]) => void,
  setCategories: (newCategories: Category[]) => void,
  setParams: (params: Param<Product>) => void,
}

export const useProductsStore = create<State>(set => ({
  products: [],
  categories: [],
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
  setCategories: (newCategories: Category[]) => 
    set({ 
      categories: newCategories
    }),
  handleReload: () => set(state => ({ reload: !state.reload })),
  setParams: (newParams: Param<Product>) => 
    set(state => ({ 
      params: { ...state.params, ...newParams } 
    }))
}))