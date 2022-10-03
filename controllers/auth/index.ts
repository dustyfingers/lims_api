import { Request, Response, NextFunction } from 'express';
import stripe from 'stripe';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

import authHelpers from '../../helpers/auth';

export default {
    emailSignUp: async (
        req: Request,
        res: Response,
        next: NextFunction,
        prisma: PrismaClient
    ) => {
        // create a customer in stripe
        // create a customer user
        // create an organization
        const dbUser = await prisma.customerUser.create({
            data: {
                created_at: new Date(),
                updated_at: new Date(),
                email: req.body.email,
                password_hash: authHelpers.saltAndHashPw(req.body.password),
                stripe_id: uuidv4(),
            },
        });
        console.log(dbUser);
    },
};
