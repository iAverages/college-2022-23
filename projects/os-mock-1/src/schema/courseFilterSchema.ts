import { z } from "zod";

export const courseFilterSchema = z.object({
    all: z.boolean(),
});

export type CourseFilter = z.infer<typeof courseFilterSchema>;
