import { type Course, PrismaClient } from "@prisma/client";
import ora, { type Ora } from "ora";

const prisma = new PrismaClient();

(async () => {
    let spinner: Ora;
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

        spinner = ora(`Creating course ${course.name}`).start();

        const created = await prisma.course.create({
            data: course,
        });

        spinner.succeed(`Created course ${course.name} (${created.id})`);

        spinner = ora(`Adding ${user.name} (${user.id}) to ${course.name} (${created.id})`).start();

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

        spinner.succeed(`Added ${user.name} (${user.id}) to ${course.name} (${created.id})`);

        const numberOfAssignments = 100;

        spinner = ora(
            `Creating ${numberOfAssignments} assignments for course ${course.name} (${created.id}). This might take a moment`
        ).start();

        await prisma.$transaction(
            async () => {
                const inserts = [];
                for (let i = 0; i < numberOfAssignments; i++) {
                    inserts.push(
                        await prisma.assignment.create({
                            data: {
                                dueDate: new Date(),
                                name: `Test assignment #${i}`,
                                course: { connect: { id: created.id } },
                            },
                        })
                    );
                }

                return inserts;
            },
            {
                // Give each assignment 3 seconds to complete
                timeout: numberOfAssignments * 1000 * 3,
            }
        );

        spinner.succeed(`Created ${numberOfAssignments} assignments for course ${course.name} (${created.id})`);
    }
})();
