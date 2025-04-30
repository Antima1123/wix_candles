import { sql, SQL } from "drizzle-orm";
import { AnyMySqlColumn } from "drizzle-orm/mysql-core";
import { boolean, integer, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod"

export const productTable = pgTable("product_table", {
  id: text("id").primaryKey().notNull(),
  mainImage: text("img").notNull(),
  otherImages: text("other_images").array(),
  productname: text("productname").notNull(),
  price: integer("price").notNull(),
  previousPrice: integer("previous_price"),
  slug: text("slug").notNull(),
  description: text("description").notNull(),
  inStock: integer("inStock").notNull(),
  featured: boolean("featured").default(false),
  category: text("category"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
export const insertProductTableSchema = createInsertSchema(productTable);

export const newslatter_information = pgTable("discount_information",{
  id: text("id").primaryKey().notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  newsletter: boolean("newslatter").default(false)
});
export const insertNewslatterInformation = createInsertSchema(newslatter_information);

export const Admin = pgTable("admin_table", {
  id: text('id').primaryKey(),
  adminName: text("admin_name").notNull(),
  password: text('password').notNull(),
})

export const insertAdmiTable = createInsertSchema(Admin)