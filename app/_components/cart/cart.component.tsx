"use client"

import { FunctionComponent, useContext } from 'react'

// Utilities
import { CartContext } from '../../../contexts/cart.context'

// Components

// Styles
import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal,
  ButtonFinish
} from './cart.styles'

const Cart: FunctionComponent = () => {
  const { isVisible, toggleCart } = useContext(CartContext)

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Carrinho de Compras</CartTitle>

        {/* produtos */}

        <CartTotal>Total: R$999</CartTotal>


      <ButtonFinish>
        Finalizar Compra
      </ButtonFinish>
      
      </CartContent>
    </CartContainer>
  )
}

export default Cart