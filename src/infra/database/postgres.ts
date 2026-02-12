import { Client } from 'pg';

// ...existing code...
const client = new Client({
    connectionString: process.env.DATABASE_URL
});
// ...existing code...

export default client