import { Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import CourseBox from "../components/courseBox";
import Layout from "../components/layout";
import useCourses from "../hooks/useGetCourses";

const Courses = () => {
    const { data } = useCourses({
        all: true,
    });

    return (
        <Layout>
            <Container maxW="2xl">
                <Heading as="h1" size="4xl">
                    Your Courses
                </Heading>
                <Text fontSize="3xl">Check out your current courses!</Text>
                <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
                    {data?.map(CourseBox)}
                </SimpleGrid>
            </Container>
        </Layout>
    );
};

export default Courses;
