import { PrismaClient } from '@prisma/client';

import customerUsers from './customerUser';

const prisma = new PrismaClient();

const seed = async () => {
    console.log('seeding data...');
    // need one of these for each table
    for (const u of customerUsers) {
        const user = await prisma.customerUser.create({ data: u });
        console.log(`Created user with id: ${user.id}`);
    }
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
