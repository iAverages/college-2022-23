import { type Course, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

(async () => {
    const user = await prisma.user.findFirst();

    if (!user) {
        throw new Error("User does not exist, login using oauth first before seeding the database.");
    }

    const courses: Omit<Course, "id">[] = [
        {
            createdAt: new Date(),
            desc: "New T-Level Digital Production & Design course",
            name: "T-Level Digital Production & Design",
            published: true,
            updatedAt: new Date(),
        },
        {
            createdAt: new Date(),
            desc: "BTEC Business course",
            name: "BTEC Business",
            published: false,
            updatedAt: new Date(),
        },
        {
            createdAt: new Date(),
            desc: "Computer Science learning course",
            name: "Computer Science",
            published: true,
            updatedAt: new Date(),
        },
        {
            createdAt: new Date(),
            desc: "cook food nerds",
            name: "Cooking",
            published: true,
            updatedAt: new Date(),
        },
    ];

    for (const course of courses) {
        const exists = await prisma.course.findFirst({
            where: {
                name: {
                    equals: course.name,
                },
            },
        });

        if (exists) {
            console.warn(`${course.name} is already added within the database, skipping...`);
            continue;
        }

        const created = await prisma.course.create({
            data: course,
        });

        console.log(`✅ Created course ${course.name} (${created.id})`);

        await prisma.courseUser.create({
            data: {
                course: {
                    connect: {
                        id: created.id,
                    },
                },
                user: {
                    connect: {
                        id: user.id,
                    },
                },
            },
        });

        console.log(`✅ Added ${user.name} (${user.id}) to ${course.name} (${created.id})`);
    }
})();
