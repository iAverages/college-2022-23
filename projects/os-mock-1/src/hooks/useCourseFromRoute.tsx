import useCourse from "./useCourse";
import useRouteParam from "./useRouteParam";

const useCourseFromRoute = () => {
    const courseId = useRouteParam("id");
    return useCourse(courseId);
};

export default useCourseFromRoute;
