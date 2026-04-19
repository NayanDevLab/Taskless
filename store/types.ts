export type ActionType = 'call' | 'buy' | 'pay' | 'health' | 'visit' | 'note' | 'custom';

export type ActionStatus = 'pending' | 'completed' | 'missed' | 'snoozed';

export interface Template {
  id: string;
  category: string;
  title: string;
  description: string | null;
  icon: string;
  default_context: string | null; // JSON string depending on type
  created_at: number;
}

export interface Action {
  id: string;
  template_id: string | null;
  title: string;
  type: ActionType;
  status: ActionStatus;
  due_date: number | null;
  context_data: string | null; // JSON string of data like { who: "John", purpose: "Follow up" }
  created_at: number;
}
