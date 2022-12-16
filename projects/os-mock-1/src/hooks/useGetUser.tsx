import type { User } from "@prisma/client";
import { trpc } from "@utils/trpc";

const useGetUsers = () => {
    const { data, ...rest } = trpc.users.all.useQuery(undefined, { placeholderData: [] });

    return { data: (data ?? []) as User[], ...rest };
};

export default useGetUsers;
