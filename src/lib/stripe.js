import Stripe from 'stripe';

export const stripe = new Stripe(import.meta.env.SECRET_STRIPE_KEY, {
	apiVersion: '2023-08-16'
});

/**
 * @param {any} items
 */
export async function createPaymentIntent(items) {
	try {
		const amount = 0; // Implement your own calculation logic
		const paymentIntent = await stripe.paymentIntents.create({
			amount,
			currency: 'usd'
			// Add other options as needed
		});
		return paymentIntent.client_secret;
	} catch (error) {
		throw new Error('Error creating Payment Intent');
	}
}

// Calculate the order amount based on the items (implement your own logic)
// function calculateOrderAmount(items) {
//   // Replace this with your calculation logic
//   return 1400;
// }

module.exports = {
	createPaymentIntent
};
