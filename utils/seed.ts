import { SQLiteDatabase } from 'expo-sqlite';

const STANDARD_TEMPLATES = [
  {
    id: 't-call',
    category: 'Communication',
    title: 'Call Someone',
    description: 'Set a reminder to call someone at the right time.',
    icon: 'Phone',
    default_context: JSON.stringify({ who: '', purpose: '' }),
  },
  {
    id: 't-buy',
    category: 'Shopping',
    title: 'Buy Grocery',
    description: 'Create lists in seconds.',
    icon: 'ShoppingCart',
    default_context: JSON.stringify({ items: [] }),
  },
  {
    id: 't-pay',
    category: 'Money',
    title: 'Pay Bill',
    description: 'Track and remind bills or money transfers.',
    icon: 'Wallet',
    default_context: JSON.stringify({ amount: '', to: '' }),
  },
  {
    id: 't-health',
    category: 'Health',
    title: 'Health Task',
    description: 'Stay on top of your health.',
    icon: 'Heart',
    default_context: JSON.stringify({ type: '', doctor: '', notes: '' }),
  },
  {
    id: 't-go',
    category: 'Errands',
    title: 'Go Somewhere',
    description: 'Remember when you are nearby.',
    icon: 'MapPin',
    default_context: JSON.stringify({ location: '', purpose: '' }),
  },
];

export const seedTemplates = async (db: SQLiteDatabase) => {
  const result = await db.getAllAsync<{ count: number }>(
    'SELECT COUNT(id) as count FROM templates',
  );

  if (result[0].count === 0) {
    const timestamp = Date.now();
    for (const t of STANDARD_TEMPLATES) {
      await db.runAsync(
        'INSERT INTO templates (id, category, title, description, icon, default_context, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [t.id, t.category, t.title, t.description, t.icon, t.default_context, timestamp],
      );
    }
  }
};
