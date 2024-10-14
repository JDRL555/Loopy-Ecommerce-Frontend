import { create } from 'zustand'

interface State {
  openMenu: boolean,
  quantity: number,
  setOpenMenu: () => void,
  addQuantity: (newQuantity: number) => void,
}

export const useUiStore = create<State>(set => ({
  openMenu: false,
  quantity: 0,
  
  setOpenMenu: () => set(state => ({ openMenu: !state.openMenu })),
  addQuantity: (newQuantity: number) => set(state => ({ quantity: newQuantity + state.quantity }))
}))