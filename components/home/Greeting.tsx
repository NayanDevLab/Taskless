import React from 'react';
import { View, Text } from 'react-native';
import { useTaskStore } from '../../store/useTaskStore';

export default function Greeting() {
  const actions = useTaskStore((state) => state.actions);
  const pendingCount = actions.filter((a) => a.status === 'pending').length;

  const currentHour = new Date().getHours();
  let greetingText = 'Good Evening';
  if (currentHour < 12) greetingText = 'Good Morning';
  else if (currentHour < 18) greetingText = 'Good Afternoon';

  return (
    <View className="mb-8 mt-2 px-6">
      <Text className="text-3xl font-bold text-text">{greetingText}, Nayan</Text>
      <Text className="mt-1 text-lg text-muted">
        {pendingCount === 0
          ? "You're all caught up for today"
          : `You have ${pendingCount} thing${pendingCount > 1 ? 's' : ''} today`}
      </Text>
    </View>
  );
}
