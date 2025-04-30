import { db } from "@/db/drizzle";
import { productTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Hono } from "hono";

const app = new Hono()
.get('/:slug',
    async (c) =>{
        const productslug = c.req.param('slug')

        const [data] = await db
        .select()
        .from(productTable)
        .where(eq(productTable.slug, productslug))

        return c.json({data})
    }
)
export default app;