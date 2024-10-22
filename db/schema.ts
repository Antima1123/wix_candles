import { text, pgTable } from "drizzle-orm/pg-core";

export const usersTable = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  age: text("age").notNull(),
  email: text("email").notNull(),
});