import { Pool } from "pg";
require('dotenv').config();

const pool = new Pool({
  user: process.env.DBUSER,
	password: process.env.DBPASSWORD,
	host: process.env.DBHOST,
	port: parseInt(process.env.DBPORT || '5432'),
	database: process.env.DBDATABASE
});

const query = async (text: string, params: any[]) => {
	return await pool.query(text, params);
}

export default query;
