import Layout from "@components/layout";
import Spinner from "@components/spinner/spinner";
import useBreadcrumb from "@hooks/useBreadcrumb";
import useCourseFromRoute from "@hooks/useCourseFromRoute";
import useRouteParam from "@hooks/useRouteParam";

/**
 * Assignments page
 */
const Assignments = () => {
    // Get the course Id the user is attemping to view
    const courseId = useRouteParam("id");
    // Update our breadcrumb
    useBreadcrumb({ href: `/${courseId}`, name: "courseId" });
    // Get course data based on the current path
    const { data, isLoading } = useCourseFromRoute();

    // Display data accordingly, show loading if data is not ready
    return (
        <Layout>
            {!isLoading && data && <>ID: {data.id}</>}
            {!isLoading && !data && <>Course not found</>}
            {isLoading && <Spinner className="flex w-full justify-center" />}
        </Layout>
    );
};

export default Assignments;
