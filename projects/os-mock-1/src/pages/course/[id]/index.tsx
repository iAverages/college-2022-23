import { Box, Divider, Heading, Container, Text } from "@chakra-ui/react";
import Layout from "@components/layout";
import Spinner from "@components/spinner/spinner";
import useBreadcrumb from "@hooks/useBreadcrumb";
import useCourseFromRoute from "@hooks/useCourseFromRoute";

const Course = () => {
    const { data, isLoading } = useCourseFromRoute();

    useBreadcrumb({ href: "/courses", name: "Courses" });

    if (isLoading) {
        return <Spinner fullScreen />;
    }

    return (
        <Layout>
            <Box>{data?.name}</Box>
            <Divider />
            <Heading>Assignments</Heading>
            <Box>lmfao</Box>
        </Layout>
    );
};

export default Course;
