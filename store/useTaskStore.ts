import { create } from 'zustand';
import * as SQLite from 'expo-sqlite';
import { Action, Template } from './types';

interface TaskState {
  db: SQLite.SQLiteDatabase | null;
  actions: Action[];
  templates: Template[];
  isInitialized: boolean;
  init: (db: SQLite.SQLiteDatabase) => Promise<void>;
  fetchActions: () => Promise<void>;
  fetchTemplates: () => Promise<void>;
  addAction: (action: Omit<Action, 'id' | 'created_at'>) => Promise<void>;
  updateActionStatus: (id: string, status: Action['status']) => Promise<void>;
}

export const useTaskStore = create<TaskState>((set, get) => ({
  db: null,
  actions: [],
  templates: [],
  isInitialized: false,

  init: async (db: SQLite.SQLiteDatabase) => {
    set({ db });
    await get().fetchTemplates();
    await get().fetchActions();
    set({ isInitialized: true });
  },

  fetchActions: async () => {
    const db = get().db;
    if (!db) return;
    const actions = await db.getAllAsync<Action>('SELECT * FROM actions ORDER BY due_date ASC');
    set({ actions });
  },

  fetchTemplates: async () => {
    const db = get().db;
    if (!db) return;
    const templates = await db.getAllAsync<Template>('SELECT * FROM templates');
    set({ templates });
  },

  addAction: async (actionData) => {
    const db = get().db;
    if (!db) return;

    const id = Math.random().toString(36).substring(2, 10);
    const created_at = Date.now();

    await db.runAsync(
      'INSERT INTO actions (id, template_id, title, type, status, due_date, context_data, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [
        id,
        actionData.template_id,
        actionData.title,
        actionData.type,
        actionData.status,
        actionData.due_date,
        actionData.context_data,
        created_at,
      ],
    );

    await get().fetchActions();
  },

  updateActionStatus: async (id, status) => {
    const db = get().db;
    if (!db) return;

    await db.runAsync('UPDATE actions SET status = ? WHERE id = ?', [status, id]);
    await get().fetchActions();
  },
}));
