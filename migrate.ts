import dotenv from 'dotenv';
import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

dotenv.config();

const client = postgres(process.env.DATABASE_URL, { max: 1 });
const db: PostgresJsDatabase = drizzle(client);

const main = async () => {
	await migrate(db, { migrationsFolder: './db/migrations' });
	console.log('Migrations ran successfully');
}

main()