import { Button, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import CourseBox from "../components/courseBox";
import Layout from "../components/layout";
import useCourses from "../hooks/useGetCourses";
import { capital } from "../utils/stringFormat";

const Dashboard = () => {
    const router = useRouter();
    const { data: sessionData } = useSession();
    const { data } = useCourses({
        all: true,
        amount: 5,
    });

    return (
        <Layout>
            <Container maxW="2xl">
                <Heading as="h1" size="4xl">
                    Welcome back, {capital(sessionData?.user?.name)}!
                </Heading>
                <div className="m-4 flex justify-between">
                    <Text fontSize="3xl">Recent Courses:</Text>
                    <Button onClick={() => router.push("/courses")}>View All</Button>
                </div>

                <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
                    {data?.map(CourseBox)}
                </SimpleGrid>
            </Container>
        </Layout>
    );
};

export default Dashboard;
