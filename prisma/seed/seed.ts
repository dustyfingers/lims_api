import { PrismaClient } from '@prisma/client';

import generatePlans from './plan';
import generateCustomerUsers from './customerUser';
import generateOrganizations from './organization';
import generateSubscriptions from './subscription';
import generateStaffUsers from './staffUser';

const prisma = new PrismaClient();

const seed = async () => {
    console.log('Seeding data...');
    await generatePlans(prisma);
    await generateCustomerUsers(prisma);
    await generateOrganizations(prisma);
    // await generateSubscriptions(prisma);
    await generateStaffUsers(prisma);
    console.log('Seeding complete');
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
