import { client } from "@/lib/hono-client";
import { useQuery } from "@tanstack/react-query"

export const PracticeSuggestion = ({category, productname, limit, page}: {category: string, productname: string, limit: number, page: number}) =>{
    const query = useQuery({
        queryKey: ['suggestion', productname, category, limit, page],
        queryFn: async () =>{
            const response =  await client.api.practicesuggestion.$get({
                query: {category, productname, limit, page}
            })
            if(!response){
                throw new Error("failed to get practicesuggestion")
            }

            const {data, countdata} = await response.json();

            return {data ,countdata}
        },
    })
    return query;

}