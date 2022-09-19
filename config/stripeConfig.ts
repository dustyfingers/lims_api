import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SK || '', { apiVersion: '2022-08-01' });

export default stripe;
