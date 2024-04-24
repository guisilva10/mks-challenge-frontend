import Product from "@/types/products";
import styles from "../../styles/Products.module.scss"
import ProductsItem from "../products-item/Products-items.component";

interface ProductsProps {
    products?: Product[]
}

const Products = ({ products }: ProductsProps) => {
    return ( 
        <div className={styles.Container}>
                <ProductsItem />
        </div>
    );
}
 
export default Products;