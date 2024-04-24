import styles from "../../styles/Header.module.scss"


const Header = () => {
    return ( 
        <header className={styles.Header} >
            <h1>MKS <p>Sistemas</p></h1>
            <div className={styles.ButtonCart}>
                <img src="/cart.svg" alt="carrinho" />
                <p>0</p>
            </div>
        </header>
     );
}
 
export default Header;