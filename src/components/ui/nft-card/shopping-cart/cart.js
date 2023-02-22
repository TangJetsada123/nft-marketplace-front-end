import create from 'zustand'

const itemStore = ((set) => ({
  count: 0,
  items: [],
  setItem: (item) => set((state) => ({ items: [...state.items, item]})),
}))

export const    useItemsStore = create(itemStore)