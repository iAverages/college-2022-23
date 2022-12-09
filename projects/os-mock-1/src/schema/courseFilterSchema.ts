import { z } from "zod";

export const courseFilterSchema = z.object({
    all: z.boolean(),
    amount: z.number().min(1).max(100),
});

export type CourseFilter = z.infer<typeof courseFilterSchema>;
