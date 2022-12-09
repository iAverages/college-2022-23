import type { CourseFilter } from "@schema/courseFilterSchema";
import { trpc } from "@utils/trpc";

const useCourses = (input: CourseFilter) => {
    return trpc.courses.enrolled.useQuery(input);
};

export default useCourses;
