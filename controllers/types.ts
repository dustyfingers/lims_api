import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

interface IRouteProps {
    req: Request;
    res: Response;
    next: NextFunction;
    prisma: PrismaClient;
}

export default IRouteProps;
