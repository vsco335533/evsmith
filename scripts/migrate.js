require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const path = require('path');
const { neon } = require('@neondatabase/serverless');

async function runMigrations() {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    console.error('Error: DATABASE_URL is missing in .env.local');
    process.exit(1);
  }

  const sql = neon(dbUrl);
  const migrationsDir = path.join(__dirname, '../db/migrations');

  console.log('🔄 Running database migrations...');

  if (!fs.existsSync(migrationsDir)) {
    console.error('Migrations directory not found:', migrationsDir);
    process.exit(1);
  }

  const files = fs.readdirSync(migrationsDir).sort();

  for (const file of files) {
    if (file.endsWith('.sql')) {
      console.log(`Executing migration file: ${file}`);
      const sqlContent = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
      
      const statements = sqlContent
        .split(';')
        .map((s) => s.trim())
        .filter((s) => s.length > 0);

      for (const stmt of statements) {
        await sql.query(stmt);
      }
      console.log(`✅ Successfully applied: ${file}`);
    }
  }

  console.log('✨ All migrations completed successfully!');
}

runMigrations().catch((err) => {
  console.error('❌ Migration failed:', err);
  process.exit(1);
});
