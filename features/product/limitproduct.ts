import { client } from "@/lib/hono-client"
import { useQuery } from "@tanstack/react-query"

export const Limiproductpagination = ({page,limit}: {page:number, limit:number}) =>{
    const query = useQuery({
        queryKey: ['product', page, limit],
        queryFn: async ()=>{
            const res = await client.api.limitproduct.$get({
                query: {page,limit}
            })

            if(!res){
                throw new Error("Limit product found Error")
            }

            const {data, countdata} = await res.json();
            return ({countdata,data})
        }
    })
    return query
}