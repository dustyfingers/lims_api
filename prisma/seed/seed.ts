import { PrismaClient } from '@prisma/client';

import generateCustomerUsers from './customerUser';
import generateOrganizations from './organization';

const prisma = new PrismaClient();

const seed = async () => {
    console.log('seeding data...');
    await generateCustomerUsers(prisma);
    await generateOrganizations(prisma);
    console.log('seeding complete');
};

// actually run the seed
seed()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async e => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
