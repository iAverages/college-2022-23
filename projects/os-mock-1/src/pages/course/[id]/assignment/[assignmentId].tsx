import Layout from "@components/layout";
import Spinner from "@components/spinner/spinner";
import useBreadcrumb from "@hooks/useBreadcrumb";
import useCourseFromRoute from "@hooks/useCourseFromRoute";
import useRouteParam from "@hooks/useRouteParam";

const Assignments = () => {
    const courseId = useRouteParam("id");
    useBreadcrumb({ href: `/${courseId}`, name: "courseId" });
    const { data, isLoading } = useCourseFromRoute();

    return (
        <Layout>
            {!isLoading && data && <>ID: {data.id}</>}
            {!isLoading && !data && <>Course not found</>}
            {isLoading && <Spinner className="flex w-full justify-center" />}
        </Layout>
    );
};

export default Assignments;
