//domain/.netlify/functions/create-payment-intent
require("dotenv").config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);
exports.handler = async function (event, context) {
	const { shipping_fee, total_amount } = JSON.parse(event.body);

	const calculateTotalAmount = () => {
		return shipping_fee + total_amount;
	};
	try {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: calculateTotalAmount(),
			currency: "usd",
		});
		return {
			statusCode: 200,
			body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
		};
	} catch (err) {
		return {
			statusCode: 500,
			body: JSON.stringify({ msg: err.message }),
		};
	}
};
