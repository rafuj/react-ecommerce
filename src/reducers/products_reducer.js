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

const products_reducer = (state, action) => {
	if (action.type === SIDEBAR_OPEN) {
		return { ...state, isSidebarOpen: true };
	}
	if (action.type === SIDEBAR_CLOSE) {
		return { ...state, isSidebarOpen: false };
	}
	if (action.type === GET_PRODUCTS_BEGIN) {
		return { ...state, products_loading: true };
	}
	if (action.type === GET_PRODUCTS_SUCCESS) {
		const feature_products = action.payload.filter(
			(product) => product.featured === true
		);
		return {
			...state,
			feature_products,
			products: action.payload,
			products_loading: false,
		};
	}
	if (action.type === GET_PRODUCTS_ERROR) {
		return { ...state, products_loading: false, products_error: true };
	}
	if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
		return {
			...state,
			single_products_loading: true,
			single_products_error: false,
		};
	}
	if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
		return {
			...state,
			products_loading: false,
			single_products: action.payload,
			products_error: false,
		};
	}
	if (action.type === GET_SINGLE_PRODUCT_ERROR) {
		return {
			...state,
			products_loading: false,
			single_products_error: true,
		};
	}

	throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
