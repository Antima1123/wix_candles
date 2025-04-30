import { db } from "@/db/drizzle";
import { productTable } from "@/db/schema";
import { Hono } from "hono";
import {count} from "drizzle-orm"

const app = new Hono()
.get("/",
    async (c) =>{
        const page = Number(c.req.query('page'))
        const limit = Number(c.req.query('limit'))
        const offset = (page - 1) * limit;

        const [countdata] = await db.select({count: count()}).from(productTable)
        const data = await db
        .select()
        .from(productTable)
        .limit(limit)
        .offset(offset)

        return c.json({countdata,data})
    }
)
export default app