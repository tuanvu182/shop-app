import React, { useState } from "react";
import "./_Header.scss";
import { NavLink } from "react-router-dom";

import Item from "../components/CartItem";
import CartItem from "../models/CartItems";

import data from "../data/dummy-data";

export default () => {
  const [showCart, setShowCart] = useState(false);

  const [cartItems, setCartItems] = useState([...data.cart]);

  const removeItemCart = (id) => {
    setCartItems((cartItems) => cartItems.filter((item) => item.id !== id));
  };

  const onCartHandler = () => {
    setShowCart((showCart) => !showCart);
  };
  return (
    <header className="c-header">
      <h1 className="c-header__logo">
        <NavLink exact to="/">
          <img src="https://via.placeholder.com/150x100/" alt="logo" />
        </NavLink>
      </h1>
      <ul className="c-header__nav">
        <li>
          <NavLink
            className="c-header__link"
            activeClassName="active"
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="c-header__link"
            activeClassName="active"
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className="c-header__link"
            activeClassName="active"
            to="/news"
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            className="c-header__link"
            activeClassName="active"
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            className="c-header__link"
            activeClassName="active"
            to="/shop"
          >
            Shop
          </NavLink>
        </li>
      </ul>
      <ul className="c-header__actions">
        <li onClick={() => alert("Signup")} className="c-header__button">
          <ion-icon name="person-circle-outline" />
          <p>Login/Signup</p>
        </li>
        <li onClick={onCartHandler} className="c-header__button">
          <ion-icon name="cart-outline" />
          <span>10</span>
          <p>Cart</p>
        </li>
      </ul>
      <div className="c-header__hidden">
        <div className={!showCart ? "c-dropdown" : "c-dropdown active"}>
          <div className="c-dropdown__header">
            <h3 className="c-dropdown__title">Your Cart Items</h3>
            <ion-icon onClick={onCartHandler} name="enter-outline"></ion-icon>
          </div>
          <ul className="c-dropdown__list">
            {cartItems.map((item) => (
              <Item key={item.id} removeItemCart={removeItemCart} item={item} />
            ))}
          </ul>
          <p className="c-dropdown__total">
            Total: <span>50.000</span>&#8363;
          </p>
          <div className="c-dropdown__nav">
            <NavLink
              onClick={() => setShowCart(false)}
              className="c-dropdown__btn c-dropdown__btn--1"
              to="/cart"
            >
              To Cart
            </NavLink>
            <NavLink
              onClick={() => setShowCart(false)}
              className="c-dropdown__btn c-dropdown__btn--2"
              to="/order"
            >
              Order
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
