import Product from "@/types/products";
import Footer from "./_components/Footer/footer.component"
import Header from "./_components/Header/header.component"
import { ProductsList } from "./_components/ProductsList/productslist.component"
import Cart from "./_components/cart/cart.component";
interface ProductProps {
  id: string;
  name: string;
  price: number;
  description: string;
  photo: string;
  quantity: number;
}
interface HeaderProps {
  products: ProductProps;
}

export default async function Home({ products}: HeaderProps) {



return (
  <>
    <Header/>
    <Cart/>
    <ProductsList product={products}/>
    <Footer/>
  </>
)

}