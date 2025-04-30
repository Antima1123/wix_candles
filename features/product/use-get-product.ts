import { client } from "@/lib/hono-client"
import { useQuery } from "@tanstack/react-query"

export const getProduct = () =>{
    const query = useQuery({
        queryKey: ['product'],
        queryFn: async () =>{
            const response = await client.api.product.$get();

            if(!response){
                throw new Error("Failed to show the products")
            }

            const { data } = await response.json();

            return data;
        },
    });
    return query;
}