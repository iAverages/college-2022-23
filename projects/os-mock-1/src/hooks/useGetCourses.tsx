import type { inferProcedureInput, AnyQueryProcedure } from "@trpc/server";
import { trpc } from "../utils/trpc";

const useCourses = (input: inferProcedureInput<AnyQueryProcedure>) => {
    return trpc.courses.enrolled.useQuery(input);
};

export default useCourses;
