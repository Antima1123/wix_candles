import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { insertProductTableSchema, productTable } from "@/db/schema";
import { db } from "@/db/drizzle";
import { eq, sql } from "drizzle-orm";

const app = new Hono()
.post('/',
    zValidator("json", insertProductTableSchema.pick({
        category: true,
    })),
    async (c) => {
        const { category } = c.req.valid("json")

        if(!category) {
            throw new Error("Category is required")
        }

        const data = await db
        .select()
        .from(productTable)
        .where(
            eq(productTable.category, category)
        )
        .orderBy(sql`RANDOM()`)
        .limit(10)

        return c.json({ data })

    }
)

export default app;