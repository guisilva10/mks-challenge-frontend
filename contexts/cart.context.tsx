"use client"

import CartProduct from "@/types/cart";
import Product from "@/types/products";
import { FunctionComponent, createContext, useState } from "react";

interface IReactProps{
    children: React.ReactNode
}

interface ICartContext {
    isVisible: boolean
    products: CartProduct[]
    toggleCart: () => void
    addProductToCart: (product: Product) => void
}

export const CartContext = createContext<ICartContext>({
    isVisible: false,
    products: [],
    toggleCart: () => {},
    addProductToCart: () => {}
})



const CartContextProvider: FunctionComponent<IReactProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false)
    const [products, setProducts] = useState<CartProduct[]>([])





    const toggleCart = () => {
      setIsVisible((prevState) => !prevState)
    }

    const addProductToCart = (product: Product) => {
        // verificar se o produto já está no carrinho
        const productIsAlreadyInCart = products.some(
          (item) => item.id === product.id
        )
    
        // se sim -> aumentar sua quantidade
        if (productIsAlreadyInCart) {
          return setProducts((products) =>
            products.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          )
        }
    
        // se não -> adicioná-lo
        setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
      }






    return (
      <CartContext.Provider value={{ isVisible, products, toggleCart, addProductToCart }}>
        {children}
      </CartContext.Provider>
    )
  }

  export default CartContextProvider
  