import dotenv from 'dotenv';
import express from 'express';
import db from '../db/db';
import { user } from '../db/schema/user.schema';
dotenv.config();

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
	let ruser = await db.insert(user).values({
		name: 'John Doe',
		email: 'test@gmail.com',
	}).returning()
	res.json({
		message: ruser
	});
});

app.listen(3000, () => {
	console.log('Server is running');
});