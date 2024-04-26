"use client"

import CartProduct from "@/types/cart";
import { FunctionComponent, createContext, useState } from "react";

interface IReactProps{
    children: React.ReactNode
}

interface ICartContext {
    isVisible: boolean
    products: CartProduct[]
    toggleCart: () => void
}

export const CartContext = createContext<ICartContext>({
    isVisible: false,
    products: [],
    toggleCart: () => {}
})

const CartContextProvider: FunctionComponent<IReactProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false)
    const [products] = useState<CartProduct[]>([])
    const toggleCart = () => {
      setIsVisible((prevState) => !prevState)
    }
    return (
      <CartContext.Provider value={{ isVisible, products, toggleCart }}>
        {children}
      </CartContext.Provider>
    )
  }

  export default CartContextProvider
  