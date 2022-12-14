import Layout from "@components/layout";
import useCourseFromRoute from "@hooks/useCourseFromRoute";

const Assignments = () => {
    const { data, isLoading } = useCourseFromRoute();

    return (
        <Layout>
            <div>lul</div>
        </Layout>
    );
};

export default Assignments;
