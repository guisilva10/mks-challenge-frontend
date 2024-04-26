"use client"
import { useContext } from "react"
import styles from "../../styles/Products.module.scss"
import { CartContext } from "@/contexts/cart.context"


export async function ProductsList() {
    //const { addProductToCart } = useContext(CartContext)
    const response = await fetch("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC")
    const data = await response.json()


    const handleSubmitProduct = () => {  
        
    }

  return (
   <>
    <div className={styles.Container}>
        {data.products.map((item: any) =>
            <div className={styles.ProductsItem} key={item.id}>
                <div className={styles.container}>
                <img src={item.photo} alt='' />
                <div className={styles.info}>
                    <p className={styles.title}>{item.name}</p>
                    <p className={styles.price}>R${item.price}</p>
                </div>
                <p className={styles.description}>{item.description}</p>
                </div>
            <button className={styles.button} onClick={handleSubmitProduct}>
            <img src='/shopping-bag.png' alt='' />
                Comprar
            </button>
        </div>
    )}
    </div>
   </>
  )
}
