import { client } from "@/lib/hono-client"
import { useQuery } from "@tanstack/react-query"

export const Practiceslug = (slug: any) =>{
    const query = useQuery({
        queryKey: ['practice slug', slug],
        queryFn: async ()=>{
            const response = await client.api.practiceslug[":slug"].$get({
                param: slug
            })

            if(!response){
                throw new Error("failed to fetch productpractice slug")
            }

            const {data} = await response.json()
            return data
        }
    })
    return query
}