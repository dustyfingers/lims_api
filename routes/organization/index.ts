import express from 'express';
import { PrismaClient } from '@prisma/client';

import organization from '../../controllers/organization';

const router = express.Router();

let prisma: PrismaClient | null = null;

export const initAuthRoutes = (prismaClient: PrismaClient) => {
    prisma = prismaClient;
};

// update org
// router.post('/update', (req, res, next) => {
//     if (prisma) {
//         console.log(`${Date()} POST /organization/update`);
//         organization.update(req, res, next, prisma);
//     }
// });

export default router;
