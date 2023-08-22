import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
	res.json({
		message: 'Hello World'
	});
});

app.listen(3000, () => {
	console.log('Server is running');
});