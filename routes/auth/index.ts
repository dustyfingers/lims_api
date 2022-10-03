import express from 'express';
import { PrismaClient } from '@prisma/client';

import authController from '../../controllers/auth';

const router = express.Router();

let prisma: PrismaClient | null = null;

export const initAuthRoutes = (prismaClient: PrismaClient) => {
    prisma = prismaClient;
};

// sign up - email + password strategy
router.post('/email/sign_up', (req, res, next) => {
    if (prisma) {
        console.log(`${Date()} POST /auth/email/sign_up`);
        authController.emailSignUp(req, res, next, prisma);
    }
});

// sign in

// sign out

export default router;
