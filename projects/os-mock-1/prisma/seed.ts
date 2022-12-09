import { Course, PrismaClient } from "@prisma/client";
import { date } from "zod";
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
            include: {
                enrolledUsers: {
                    where: {
                        user: {
                            id: user.id,
                        },
                    },
                },
            },
        });

        console.log(`✅ Created course ${course.name} (${created.id})`);
    }
})();
