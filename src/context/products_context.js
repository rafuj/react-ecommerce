import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import {
	GET_PRODUCTS_BEGIN,
	GET_PRODUCTS_ERROR,
	GET_PRODUCTS_SUCCESS,
	GET_SINGLE_PRODUCT_BEGIN,
	GET_SINGLE_PRODUCT_ERROR,
	GET_SINGLE_PRODUCT_SUCCESS,
	SIDEBAR_CLOSE,
	SIDEBAR_OPEN,
} from "../actions";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
// import { FaClosedCaptioning } from 'react-icons/fa'

const initialState = {
	isSidebarOpen: false,
	products_loading: false,
	products_error: false,
	products: [],
	feature_products: [],
	single_products_loading: false,
	single_products_error: false,
	single_products: [],
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const openSidebar = () => {
		dispatch({ type: SIDEBAR_OPEN });
	};
	const closeSidebar = () => {
		dispatch({ type: SIDEBAR_CLOSE });
	};

	const fetchSingleProduct = async (url) => {
		dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
		try {
			const response = await axios.get(url);
			const single_products = response.data;
			dispatch({
				type: GET_SINGLE_PRODUCT_SUCCESS,
				payload: single_products,
			});
		} catch (err) {
			dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
		}
	};

	const fetchProducts = async (url) => {
		dispatch({ type: GET_PRODUCTS_BEGIN });
		try {
			const response = await axios.get(url);
			const products = response.data;
			dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
		} catch (err) {
			dispatch({ type: GET_PRODUCTS_ERROR });
		}
	};
	useEffect(() => {
		fetchProducts(url);
	}, []);

	return (
		<ProductsContext.Provider
			value={{
				openSidebar,
				closeSidebar,
				...state,
				fetchSingleProduct,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};
// make sure use
export const useProductsContext = () => {
	return useContext(ProductsContext);
};
