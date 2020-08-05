import knex from 'knex';
import path from 'path';

const db = knex({
  client: 'sqlite3',
  connection: {
    // Resolve automaticamente conflito de contrabarra do windows
    filename: path.resolve(__dirname, 'database.sqlite') 
  },
  useNullAsDefault: true,
});

export default db;