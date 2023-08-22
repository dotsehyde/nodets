import { boolean, pgTable, serial, text } from "drizzle-orm/pg-core";
import { user } from "./user.schema";


export const task = pgTable('task', {
	id: serial("id").primaryKey().notNull(),
	title: text("title").notNull(),
	description: text("description").notNull(),
	isDone: boolean("isDone").notNull(),
	user_id: serial("user_id").references(() => user.id).notNull(),
})