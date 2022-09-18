import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const generateStaffUsers = async (prisma: PrismaClient) => {
    const organizations = await prisma.organization.findMany();
    for (let i = 0; i < organizations.length; i++) {
        const currentOrganization = organizations[i];
        await prisma.staffUser.createMany({
            data: [
                {
                    created_at: new Date(),
                    updated_at: new Date(),
                    first_name: faker.name.firstName(),
                    last_name: faker.name.lastName(),
                    assigned_role: faker.name.jobTitle(),
                    organization_id: currentOrganization.id,
                },
                {
                    created_at: new Date(),
                    updated_at: new Date(),
                    first_name: faker.name.firstName(),
                    last_name: faker.name.lastName(),
                    assigned_role: faker.name.jobTitle(),
                    organization_id: currentOrganization.id,
                },
            ],
        });
    }
};

export default generateStaffUsers;
