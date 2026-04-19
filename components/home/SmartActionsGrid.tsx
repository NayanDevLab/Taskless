import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Phone, ShoppingCart, Wallet, Heart, MapPin, LucideIcon } from 'lucide-react-native';
import { router, Href } from 'expo-router';

type ActionConfig = {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
};

const MAIN_ACTIONS: ActionConfig[] = [
  { id: 'call', title: 'Call', icon: Phone, color: '#3B82F6' },
  { id: 'buy', title: 'Buy', icon: ShoppingCart, color: '#10B981' },
  { id: 'pay', title: 'Pay', icon: Wallet, color: '#F59E0B' },
  { id: 'health', title: 'Health', icon: Heart, color: '#EF4444' },
  { id: 'go', title: 'Go', icon: MapPin, color: '#8B5CF6' },
];

export default function SmartActionsGrid() {
  const handleAction = (actionId: string) => {
    // Navigate to create specific action template type
    router.push(`/add?type=${actionId}` as Href);
  };

  return (
    <View className="mb-8">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
      >
        {MAIN_ACTIONS.map((action) => (
          <TouchableOpacity
            key={action.id}
            onPress={() => handleAction(action.id)}
            className="min-w-[80px] items-center justify-center rounded-2xl border border-border bg-card p-4 shadow-sm"
          >
            <View
              className="mb-2 items-center justify-center rounded-full p-3"
              style={{ backgroundColor: `${action.color}20` }}
            >
              <action.icon color={action.color} size={24} />
            </View>
            <Text className="text-sm font-semibold text-text">{action.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
