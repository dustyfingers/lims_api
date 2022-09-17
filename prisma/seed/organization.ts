import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const generateOrganizations = async (prisma: PrismaClient) => {
    const customerUsers = await prisma.customerUser.findMany();
    console.log(customerUsers);

    for (let i = 0; i < customerUsers.length; i++) {
        const currentCustomer = customerUsers[i];
        await prisma.organization.create({
            data: {
                created_at: new Date(),
                updated_at: new Date(),
                customer: {
                    connectOrCreate: {
                        where: {
                            id: currentCustomer.id,
                        },
                    },
                },
            },
        });
    }
};

export default generateOrganizations;
