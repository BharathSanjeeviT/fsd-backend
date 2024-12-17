import { Router } from "express"
import { userBody } from "./validations"
import query from "../config"

const router = Router()
const BASE_ROUTE = '/api/v1/'

router.post('/', async (req, res) => {
	const data = userBody.validate(req.body)
	if (data.error) {
		res.json({
			status: 403,
			message: data.error.message
		})
	} else {
		const db_query = 'INSERT INTO users (name, emp_id, email, department, role, doj) VALUES ($1, $2, $3, $4, $5, $6)'
		const user_data = data.value
		try {
			await query(db_query, [
				user_data.name,
				user_data.emp_id,
				user_data.email,
				user_data.department,
				user_data.role,
				user_data.doj
			])
			res.json({
				status: 200,
				message: 'User created'
			})
		} catch(err: any) {
			res.json({
				status: 404,
				message: err.detail
			})
		}
	}
})

router.get('/', async (_, res) => {
	const db_query = 'SELECT * FROM users'
	try {
		const users: any = await query(db_query, [])
		res.json({
			status: 200,
			data: users.rows
		})
	} catch(err: any) {
		res.json({
			status: 404,
			message: err.detail || "ERR"
		})
	}
})

export {
	BASE_ROUTE,
	router
};
