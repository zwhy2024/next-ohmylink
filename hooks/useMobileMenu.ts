import { create } from 'zustand'

interface MobileMenu {
  visible: boolean
  setVisible: (visible: boolean) => void
}
export const useMobileMenuStore = create<MobileMenu>((set) => ({
  visible: false,
  setVisible: (visible: boolean) => {
    set({ visible })
  },
}))
