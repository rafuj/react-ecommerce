import React, { useContext, useReducer } from "react";
import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../actions";
import reducer from "../reducers/products_reducer";

const initialState = {
	isSidebarOpen: false,
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

	return (
		<ProductsContext.Provider value={{ openSidebar, closeSidebar, ...state }}>
			{children}
		</ProductsContext.Provider>
	);
};
// make sure use
export const useProductsContext = () => {
	return useContext(ProductsContext);
};
