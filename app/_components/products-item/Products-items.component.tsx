import Product from "@/types/products";
import styles from "../../styles/Products.module.scss"


const ProductsItem = () => {
    return ( 
        <div className={styles.ProductsItem}>
            <div className={styles.container}>
                <img src="/apple-watch.png" alt="" />
                <div className={styles.info}>
                    <p className={styles.title}>titulo</p>
                    <p className={styles.price}>preço</p>
                </div>
                <p className={styles.description}>Descrição</p>
            </div>
                <button className={styles.button}>
                    <img src="/shopping-bag.png" alt="" />
                    Comprar
                </button>
        </div>
     );
}
 
export default ProductsItem;