import Product from "./products";

interface CartProduct extends Product{
    quantity: number
}

export default CartProduct