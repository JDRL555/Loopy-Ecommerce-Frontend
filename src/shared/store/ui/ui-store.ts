import { create } from 'zustand'

interface State {
  openMenu: boolean,
  quantity: number,
  rotate: boolean,
  setOpenMenu: () => void,
  handleRotate: () => void,
  addQuantity: (newQuantity: number) => void,
}

export const useUiStore = create<State>(set => ({
  openMenu: false,
  quantity: 0,
  rotate: false,
  setOpenMenu: () => set(state => ({ openMenu: !state.openMenu })),
  addQuantity: (newQuantity: number) => set(state => ({ quantity: newQuantity + state.quantity })),
  handleRotate: () => set(state => ({ rotate: !state.rotate }))
}))