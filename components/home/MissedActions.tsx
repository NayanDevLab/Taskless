import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTaskStore } from '../../store/useTaskStore';
import { AlertCircle, ChevronRight } from 'lucide-react-native';

export default function MissedActions() {
  const actions = useTaskStore((state) => state.actions);

  // Fake: just showing how missed UI looks if due_date was yesterday
  const missedActions = actions.filter(
    (a) =>
      a.status === 'missed' ||
      (a.due_date && a.due_date < Date.now() - 86400000 && a.status === 'pending'),
  );

  if (missedActions.length === 0) return null;

  return (
    <View className="mb-8 px-6">
      <Text className="mb-4 flex-row items-center text-xl font-bold text-danger">Don't Forget</Text>

      <View className="gap-3">
        {missedActions.slice(0, 3).map((action) => (
          <TouchableOpacity
            key={action.id}
            className="w-full flex-row items-center justify-between rounded-xl border border-danger/20 bg-danger/10 p-4"
          >
            <View className="flex-row items-center gap-3">
              <AlertCircle color="#EF4444" size={20} />
              <View>
                <Text className="text-base font-semibold text-text">{action.title}</Text>
                <Text className="mt-1 text-sm text-danger">Missed yesterday</Text>
              </View>
            </View>
            <ChevronRight color="#94A3B8" size={20} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
