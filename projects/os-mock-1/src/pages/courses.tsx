import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import CourseBox from "@components/courseBox";
import Layout from "@components/layout";
import useCourses from "@hooks/useGetCourses";

const Courses = () => {
    const { data } = useCourses({
        all: true,
    });

    return (
        <Layout>
            <Heading as="h1" size="4xl">
                Your Courses
            </Heading>
            <Text fontSize="3xl">Check out your current courses!</Text>
            <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
                {data?.map((course) => (
                    <CourseBox key={course.id} {...course} />
                ))}
            </SimpleGrid>
        </Layout>
    );
};

export default Courses;
