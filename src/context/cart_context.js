import React, { useContext, useEffect, useReducer } from "react";
import {
	ADD_TO_CART,
	CLEAR_CART,
	COUNT_CART_TOTALS,
	REMOVE_CART_ITEM,
	TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";
import reducer from "../reducers/cart_reducer";

const getLocalStorage = () => {
	let cart = localStorage.getItem("cart");
	return cart ? JSON.parse(cart) : [];
};

const initialState = {
	cart: getLocalStorage(),
	total_items: 0,
	total_amount: 0,
	shipping_fee: 534,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const addToCart = (id, color, amount, product) => {
		dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
	};
	//remove item
	const removeItem = (id) => {
		dispatch({ type: REMOVE_CART_ITEM, payload: id });
	};
	// toggle amount
	const toggleAmount = (id, value) => {
		dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
	};
	//clear cart
	const clearCart = () => {
		dispatch({ type: CLEAR_CART });
	};
	useEffect(() => {
		dispatch({ type: COUNT_CART_TOTALS });
		localStorage.setItem("cart", JSON.stringify(state.cart));
	}, [state.cart, state.amount]);
	return (
		<CartContext.Provider
			value={{ ...state, addToCart, removeItem, clearCart, toggleAmount }}
		>
			{children}
		</CartContext.Provider>
	);
};
// make sure use
export const useCartContext = () => {
	return useContext(CartContext);
};
