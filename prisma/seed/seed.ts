import { PrismaClient } from '@prisma/client';

import generateCustomerUsers from './customerUser';
import generateOrganizations from './organization';
import generateSubscriptions from './subscription';
import generateStaffUsers from './staffUser';

const prisma = new PrismaClient();

const seed = async () => {
    console.log('seeding data...');
    await generateCustomerUsers(prisma);
    await generateOrganizations(prisma);
    // await generateSubscriptions(prisma);
    await generateStaffUsers(prisma);
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
