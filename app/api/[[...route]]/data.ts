import { Hono } from "hono";
import { clerkMiddleware } from "@hono/clerk-auth";
import { db } from "@/db/drizzle";
import { usersTable } from "@/db/schema";


const app = new Hono()
    .get(
        "/",
        async (c) => {

            const data = await db
                .select({
                    name: usersTable.name,
                    age: usersTable.age,
                    email: usersTable.email,
                })
                .from(usersTable)
                // simple sa fecth kar rahe dbha

            return c.json({ data });
        }
    )

    export default app