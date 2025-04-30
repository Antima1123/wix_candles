import { client } from "@/lib/hono-client"
import { useQuery } from "@tanstack/react-query"

export const Usegetproductbyid = (slug: any)=>{
    const query = useQuery({
        queryKey: ['product', slug],
        queryFn: async () =>{
            const response = await client.api.product[":slug"].$get({
                param: slug
            })

            if(!response.ok){
                throw new Error("Failed to fetch product slug")
            }

            const { data } = await response.json()
            return data
        },
    });
    return query;
}