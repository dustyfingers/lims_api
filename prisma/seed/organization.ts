import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const generateOrganizations = async (prisma: PrismaClient) => {
    console.log(`Generating Organizations`);
    const customerUsers = await prisma.customerUser.findMany();
    for (let i = 0; i < customerUsers.length; i++) {
        const currentCustomer = customerUsers[i];
        await prisma.organization.create({
            data: {
                created_at: new Date(),
                updated_at: new Date(),
                name: faker.company.name(),
                customer: {
                    connect: {
                        id: currentCustomer.id,
                    },
                },
            },
        });
    }
    console.log(`Done generating Organizations`);
};

export default generateOrganizations;
