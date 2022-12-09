import { Card, CardHeader, Heading, CardBody, Text, CardFooter, Button } from "@chakra-ui/react";
import type { Course } from "@prisma/client";
import { useRouter } from "next/router";

type UnneedKeys = "name" | "desc" | "id";
type CourseBoxProps = Pick<Course, UnneedKeys>;

const CourseBox: React.FC<CourseBoxProps> = ({ id, name, desc }) => {
    const router = useRouter();
    return (
        <Card>
            <CardHeader>
                <Heading size="md">{name}</Heading>
            </CardHeader>
            <CardBody>
                <Text>{desc}</Text>
            </CardBody>
            <CardFooter>
                <Button onClick={() => router.push(`/course/${id}`)}>View</Button>
            </CardFooter>
        </Card>
    );
};

export default CourseBox;
