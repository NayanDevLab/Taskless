import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTaskStore } from '../../store/useTaskStore';
import { Phone, ShoppingCart, Wallet, Heart, LucideIcon } from 'lucide-react-native';

const CATEGORY_MAP: Record<string, { icon: LucideIcon; color: string }> = {
  Communication: { icon: Phone, color: '#3B82F6' },
  Shopping: { icon: ShoppingCart, color: '#10B981' },
  Money: { icon: Wallet, color: '#F59E0B' },
  Health: { icon: Heart, color: '#EF4444' },
};

export default function FocusGroups() {
  const actions = useTaskStore((state) => state.actions);
  const templates = useTaskStore((state) => state.templates);

  // Group pending actions by their template category
  const pendingActions = actions.filter((a) => a.status === 'pending');

  if (pendingActions.length === 0) return null;

  const grouped = pendingActions.reduce(
    (acc, action) => {
      const template = templates.find((t) => t.id === action.template_id);
      const category = template?.category || 'Other';
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <View className="mb-8 px-6">
      <Text className="mb-4 text-xl font-bold text-text">Today's Focus</Text>

      <View className="flex-row flex-wrap gap-4">
        {Object.entries(grouped).map(([category, count]) => {
          const config = CATEGORY_MAP[category] || { icon: Phone, color: '#94A3B8' };
          const Icon = config.icon;

          return (
            <TouchableOpacity
              key={category}
              className="min-w-[140px] flex-1 flex-row items-center gap-3 rounded-2xl border border-border bg-card p-4"
            >
              <View
                className="items-center justify-center rounded-full p-2"
                style={{ backgroundColor: `${config.color}20` }}
              >
                <Icon color={config.color} size={20} />
              </View>
              <View>
                <Text className="text-base font-semibold text-text">{category}</Text>
                <Text className="text-sm text-muted">
                  {count} item{count > 1 ? 's' : ''}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
