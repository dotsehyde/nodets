import type { Config } from "drizzle-kit";

export default {
	schema: "./db/schema/*",
	out: "./db/migrations",
	driver: 'pg',
	// dbCredentials: {
	// 	connectionString: "postgresql://postgres@localhost:5432/drizzle",
	// }
} satisfies Config;