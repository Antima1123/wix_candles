import { client } from "@/lib/hono-client"
import { useQuery } from "@tanstack/react-query"

export const useGetUsers = () => {
    const query = useQuery({
        queryKey: ["users"],
        // queryFn means query function, fir client(localhost:300) api/data usme get
        queryFn: async () => {
            const response = await client.api.data.$get();
            // samjh araha ? ha

            if (!response.ok){
                throw new Error("failed to fetch users")
            }

            const { data } = await response.json();
            // response se data nikal liya usko return karwa diya ok, agar is query ko call karege to data milega ha
            return data
        }
    })

    return query
}