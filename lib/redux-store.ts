export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

interface CartState {
  items: CartItem[]
}

interface Action<T = any> {
  type: string
  payload?: T
}

const initialState: CartState = {
  items: [],
}

// Cart reducer without Redux Toolkit
export function cartReducer(state = initialState, action: Action): CartState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.items.find((item) => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1
        return { ...state }
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      }
    }
    case "INCREASE_QUANTITY": {
      const items = state.items.map((item) =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item,
      )
      return { ...state, items }
    }
    case "DECREASE_QUANTITY": {
      const items = state.items.map((item) =>
        item.id === action.payload && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item,
      )
      return { ...state, items }
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      }
    }
    case "CLEAR_CART":
      return { ...state, items: [] }
    default:
      return state
  }
}

// Simple store creation without Redux Toolkit
const store: any = {
  state: initialState,
  listeners: [] as Function[],
  dispatch(action: Action) {
    this.state = cartReducer(this.state, action)
    this.listeners.forEach((listener) => listener())
  },
  subscribe(listener: Function) {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener)
    }
  },
  getState() {
    return this.state
  },
}

export { store }
export type RootState = CartState

// Action creators
export const addToCart = (item: Omit<CartItem, "quantity">) => ({
  type: "ADD_TO_CART",
  payload: item,
})

export const increaseQuantity = (id: string) => ({
  type: "INCREASE_QUANTITY",
  payload: id,
})

export const decreaseQuantity = (id: string) => ({
  type: "DECREASE_QUANTITY",
  payload: id,
})

export const removeFromCart = (id: string) => ({
  type: "REMOVE_FROM_CART",
  payload: id,
})

export const clearCart = () => ({
  type: "CLEAR_CART",
})
