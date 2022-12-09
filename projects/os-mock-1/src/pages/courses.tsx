import { Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import CourseBox from "../components/courseBox";
import Layout from "../components/layout";
import useCourses from "../hooks/useGetCourses";
import { capital } from "../utils/stringFormat";
// import useUser from "../hooks/useUser";

const Courses = () => {
    const { data: sessionData } = useSession();
    const { data } = useCourses({
        all: true,
    });

    return (
        <Layout>
            <Container maxW="2xl">
                <Heading as="h1" size="4xl">
                    Welcome back, {capital(sessionData?.user?.name)}!
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
