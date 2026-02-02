import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from '@shared/schema';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL must be set');
}

// Correct usage for neon-http: pass the client directly to drizzle
// The @neondatabase/serverless 'neon' function returns a client compatible with drizzle-orm/neon-http
const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema });
export const queryClient = sql;
