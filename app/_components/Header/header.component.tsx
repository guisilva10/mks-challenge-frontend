"use client"
import styles from "../../styles/Header.module.scss"

import React, { useState, useContext } from 'react';
import Cart from "../cart/cart.component";
import { CartContext } from "@/contexts/cart.context";


interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  photo: string;
  quantity: number;
}

interface HeaderProps {
  products: Product[];
}

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