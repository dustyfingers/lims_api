import { PrismaClient } from '@prisma/client';
import stripe from '../../config/stripeConfig';

const generatePlans = async (prisma: PrismaClient) => {
    console.log(`Generating Plans`);
    // should we create three plans here with the stripe api?
    const productNames = [
        { name: 'Pro', priceInt: 2499 },
        { name: 'Elite', priceInt: 4499 },
    ];
    for (let i = 0; i < productNames.length; i++) {
        try {
            const product = await stripe.products.create({
                name: productNames[i].name,
            });
            const price = await stripe.prices.create({
                unit_amount: 1550,
                currency: 'usd',
                recurring: { interval: 'month' },
                product: product.id,
            });
            await prisma.plan.create({
                data: {
                    created_at: new Date(),
                    updated_at: new Date(),
                    name: productNames[i].name,
                    price_int: productNames[i].priceInt,
                    stripe_product_id: product.id,
                    stripe_price_id: price.id,
                },
            });
        } catch (err) {
            console.log({ err });
        }
    }
    console.log(`Done generating Plans`);
};

export default generatePlans;
