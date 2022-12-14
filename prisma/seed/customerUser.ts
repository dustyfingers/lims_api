import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from '@prisma/client';

import authHelpers from '../../helpers/auth';

const seedUserPassword = 'TestyPassGrumble123!!';

const generateCustomerUsers = async (prisma: PrismaClient) => {
    console.log(`Generating CustomerUsers`);
    const userData = Array.from({ length: 5 }, () => ({
        created_at: new Date(),
        updated_at: new Date(),
        email: faker.internet.email(),
        password_hash: authHelpers.saltAndHashPw(seedUserPassword),
        stripe_id: uuidv4(),
    }));
    for (const u of userData) {
        const user = await prisma.customerUser.create({ data: u });
        console.log(`Created user with id: ${user.id}`);
    }
    console.log(`Done generating CustomerUsers`);
};

export default generateCustomerUsers;
