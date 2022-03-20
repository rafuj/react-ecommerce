import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";

const CheckoutPage = () => {
	const { cart } = useCartContext();

	return (
		<main>
			<PageHero title="Checkout" />

			<Wrapper className="page">
				{cart.length < 1 ? (
					<div className="empty">
						<h2>Your Cart is Empty</h2>
						<Link className="btn" to="/products">
							Fill It
						</Link>
					</div>
				) : (
					<StripeCheckout />
				)}
			</Wrapper>
		</main>
	);
};
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	.empty {
		text-align: center;
	}
`;
export default CheckoutPage;
