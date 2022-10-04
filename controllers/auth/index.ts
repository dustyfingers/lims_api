import stripe from '../../config/stripeConfig';
import { v4 as uuidv4 } from 'uuid';

import authHelpers from '../../helpers/auth';
import IRouteProps from '../types';

export default {
    emailSignUp: async ({ req, res, next, prisma }: IRouteProps) => {
        console.log(req);
        try {
            // required fields
            const { email, password, orgName } = req.body;

            // create a customer in stripe
            const stripeUser = await stripe.customers.create({ email: req.body.email });
            console.log(stripeUser);

            // create a customer user in our db
            const dbUser = await prisma.customerUser.create({
                data: {
                    created_at: new Date(),
                    updated_at: new Date(),
                    email: email,
                    password_hash: authHelpers.saltAndHashPw(password),
                    stripe_id: uuidv4(),
                },
            });
            console.log(dbUser);

            // create an org in our db
            const org = await prisma.organization.create({
                data: {
                    created_at: new Date(),
                    updated_at: new Date(),
                    customer: {
                        connect: {
                            id: dbUser.id,
                        },
                    },
                    name: orgName,
                },
            });
            console.log(org);

            res.status(200).json({
                message: 'Woohoo! You were successfully signed up.',
            });
        } catch (err) {
            console.log(err);
            res.status(400).json({
                error: err,
            });
        }
    },
};
