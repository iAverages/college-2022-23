import { trpc } from "@utils/trpc";

const useCourse = (courseId: string) => {
    return trpc.courses.get.useQuery(courseId, { enabled: !!courseId });
};

export default useCourse;
