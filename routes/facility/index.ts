import express from 'express';
import { PrismaClient } from '@prisma/client';

import facility from '../../controllers/facility';

const router = express.Router();

let prisma: PrismaClient | null = null;

export const initAuthRoutes = (prismaClient: PrismaClient) => {
    prisma = prismaClient;
};

// create a facility
router.post('/create', (req, res, next) => {
    if (prisma) {
        console.log(`${Date()} POST /facility/create`);
        facility.create({ req, res, next, prisma });
    }
});

// sign in

// sign out

export default router;
