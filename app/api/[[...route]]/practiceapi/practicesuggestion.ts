import { db } from "@/db/drizzle";
import {productTable } from "@/db/schema";
import { count, ilike, or } from "drizzle-orm";
import { Hono } from "hono";

const app = new Hono()
.get("/",
    async(c)=>{
        
        const category = c.req.query('category')
        const productname = c.req.query('productname')
        const limit = Number(c.req.query('limit') || 1)
        const page = Number(c.req.query('page') || 1)

        const offset = (page -1)* limit;
        const [countdata] = await db.select({count: count()}).from(productTable)

        const data = await db
        .select()
        .from(productTable)
        .where(or(
            ilike(productTable.productname, `%${productname}%`),
            ilike(productTable.category, `%${category}%`)
        ))
        .limit(limit)
        .offset(offset)

        return c.json({data,countdata})
    }
)
export default app