import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';
import { Prisma } from '@prisma/client';

import authHelpers from '../../helpers/auth';

const seedUserPassword = 'TestyPassGrumble123!!';

const userData: Prisma.CustomerUserCreateInput[] = [
    {
        created_at: new Date(),
        updated_at: new Date(),
        email: faker.internet.email(),
        password_hash: authHelpers.saltAndHashPw(seedUserPassword),
        stripe_id: uuidv4(),
    },
    {
        created_at: new Date(),
        updated_at: new Date(),
        email: faker.internet.email(),
        password_hash: authHelpers.saltAndHashPw(seedUserPassword),
        stripe_id: uuidv4(),
    },
    {
        created_at: new Date(),
        updated_at: new Date(),
        email: faker.internet.email(),
        password_hash: authHelpers.saltAndHashPw(seedUserPassword),
        stripe_id: uuidv4(),
    },
    {
        created_at: new Date(),
        updated_at: new Date(),
        email: faker.internet.email(),
        password_hash: authHelpers.saltAndHashPw(seedUserPassword),
        stripe_id: uuidv4(),
    },
    {
        created_at: new Date(),
        updated_at: new Date(),
        email: faker.internet.email(),
        password_hash: authHelpers.saltAndHashPw(seedUserPassword),
        stripe_id: uuidv4(),
    },
    {
        created_at: new Date(),
        updated_at: new Date(),
        email: faker.internet.email(),
        password_hash: authHelpers.saltAndHashPw(seedUserPassword),
        stripe_id: uuidv4(),
    },
    {
        created_at: new Date(),
        updated_at: new Date(),
        email: faker.internet.email(),
        password_hash: authHelpers.saltAndHashPw(seedUserPassword),
        stripe_id: uuidv4(),
    },
];

export default userData;
