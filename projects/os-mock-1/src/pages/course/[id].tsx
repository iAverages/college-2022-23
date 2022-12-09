import { Box, Container } from "@chakra-ui/react";
import Spinner from "@components/spinner/spinner";
import useCourse from "@hooks/useCourse";
import useRouteParam from "@hooks/useRouteParam";

const Course = () => {
    const courseId = useRouteParam("id");
    const { data, isLoading } = useCourse(courseId);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <Container maxW="md">
            <Box>{data?.name}</Box>
        </Container>
    );
};

export default Course;
