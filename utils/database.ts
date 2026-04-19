import * as SQLite from 'expo-sqlite';

export const dbName = 'taskless.db';

export const initDB = async () => {
  const db = await SQLite.openDatabaseAsync(dbName);

  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    
    CREATE TABLE IF NOT EXISTS templates (
      id TEXT PRIMARY KEY,
      category TEXT NOT NULL,
      title TEXT NOT NULL,
      description TEXT,
      icon TEXT NOT NULL,
      default_context TEXT,
      created_at INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS actions (
      id TEXT PRIMARY KEY,
      template_id TEXT,
      title TEXT NOT NULL,
      type TEXT NOT NULL,
      status TEXT DEFAULT 'pending',
      due_date INTEGER,
      context_data TEXT,
      created_at INTEGER NOT NULL,
      FOREIGN KEY(template_id) REFERENCES templates(id)
    );
  `);

  return db;
};
