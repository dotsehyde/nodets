
import { pgTable, serial, text, uniqueIndex } from 'drizzle-orm/pg-core'

export const user = pgTable('user', {
	id: serial("id").primaryKey().notNull(),
	name: text("name").notNull(),
	email: text("email").notNull(),
}, (users) => {
	return {
		emailIndex: uniqueIndex('emailIndex').on(users.email),
	}
})