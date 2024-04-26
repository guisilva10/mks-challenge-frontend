"use client"
import styles from "../../styles/Header.module.scss"

import React, { useContext } from 'react';
import { CartContext } from "@/contexts/cart.context";


const Header: React.FC = () => {

  const { toggleCart } = useContext(CartContext)

  return (
    <header className={styles.Header}>
      <h1>
        MKS <p>Sistemas</p>
      </h1>
      <div className={styles.ButtonCart} onClick={toggleCart}>
                <img src="/cart.svg" alt="carrinho" />
                <p>0</p>
            </div>
    </header>
  );
};

export default Header;