import Product from "@/types/products";
import Footer from "../_components/Footer/footer.component"
import Header from "../_components/Header/header.component"
import { ProductsList } from "../_components/ProductsList/productslist.component"
import Cart from "../_components/cart/cart.component";


 const HomePage = () => {

return (
  <>
    <Header/>
    <Cart/>
    <ProductsList />
    <Footer/>
  </>
)

}

export default HomePage