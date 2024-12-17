import express from 'express';
import { BASE_ROUTE, router } from './src/routes';

const app = express()

app.use(express.json())

app.get('/', (_, res) => {
	res.send('Hello World')
})

app.use(BASE_ROUTE, router)

export default app;
