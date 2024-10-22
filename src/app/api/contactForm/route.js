import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT } = process.env;

const pool = new pg.Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: parseInt(DB_PORT),
});

export async function POST(request) {
  const { name, email, phone, organization, description } = await request.json();

  try {
    const client = await pool.connect();
    const query = 'INSERT INTO contact_form (name, email, phone, organization, description) VALUES ($1, $2, $3, $4, $5)';
    const values = [name, email, phone, organization, description];
    await client.query(query, values);
    client.release();
    return new Response(JSON.stringify({ message: 'Data inserted successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error inserting data:', error);
    return new Response(JSON.stringify({ error: 'Error inserting data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}