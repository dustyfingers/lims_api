import { Request, Response, NextFunction } from 'express';
import stripe from '../../config/stripeConfig';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

export default {
    create: async (
        req: Request,
        res: Response,
        next: NextFunction,
        prisma: PrismaClient
    ) => {},
};
