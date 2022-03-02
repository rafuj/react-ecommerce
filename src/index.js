import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./context/cart_context";
import { FilterProvider } from "./context/filter_context";
import { ProductsProvider } from "./context/products_context";
import { UserProvider } from "./context/user_context";
import "./index.css";
ReactDOM.render(
	<Auth0Provider
		domain="dev-853i0uvw.us.auth0.com"
		clientId="vIVhc4vj7FF0FYhfWHUG5bVplTZFtsLr"
		redirectUri={window.location.origin}
		cacheLocation="localstorage"
	>
		<UserProvider>
			<ProductsProvider>
				<FilterProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</FilterProvider>
			</ProductsProvider>
		</UserProvider>
	</Auth0Provider>,
	document.getElementById("root")
);
