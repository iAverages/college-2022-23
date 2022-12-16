import Layout from "@components/layout";
import Spinner from "@components/spinner/spinner";
import useCourseFromRoute from "@hooks/useCourseFromRoute";

const Assignments = () => {
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
