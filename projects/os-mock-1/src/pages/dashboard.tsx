import { Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import CourseBox from "@components/courseBox";
import Layout from "@components/layout";
import useCourses from "@hooks/useGetCourses";
import { capital } from "@utils/stringFormat";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Dashboard = () => {
    const router = useRouter();
    const { data: sessionData } = useSession();
    const { data } = useCourses({
        all: true,
        amount: 5,
    });

    return (
        <Layout>
            <Heading as="h1" size="4xl">
                Welcome back, {capital(sessionData?.user?.name)}!
            </Heading>
            <div className="m-4 flex justify-between">
                <Text fontSize="3xl">Recent Courses:</Text>
                <Button onClick={() => router.push("/courses")}>View All</Button>
            </div>

            <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
                {data?.map((course) => (
                    <CourseBox key={course.id} {...course} />
                ))}
            </SimpleGrid>
        </Layout>
    );
};

export default Dashboard;
