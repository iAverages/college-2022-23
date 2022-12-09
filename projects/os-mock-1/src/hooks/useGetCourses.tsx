import type { CourseFilter } from "@schema/courseFilterSchema";
import { trpc } from "@utils/trpc";

const useCourses = (filter: Partial<CourseFilter>) => {
    const defaults: CourseFilter = {
        all: false,
        amount: 100,
    };
    return trpc.courses.enrolled.useQuery({ ...defaults, ...filter });
};

export default useCourses;
