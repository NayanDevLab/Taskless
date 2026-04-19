import React from 'react';
import { View, Text } from 'react-native';
import { BellRing, CheckSquare, Zap, LucideIcon } from 'lucide-react-native';

const iconMap: Record<string, LucideIcon> = {
  BellRing,
  CheckSquare,
  Zap,
};

interface SlideProps {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  iconColor: string;
}

export default function OnboardingSlide({
  title,
  subtitle,
  description,
  iconName,
  iconColor,
}: SlideProps) {
  const IconComponent = iconMap[iconName] || BellRing;

  return (
    <View className="flex-1 items-center justify-center gap-10">
      <View className="h-32 w-32 items-center justify-center rounded-full border border-border bg-card shadow-lg">
        <IconComponent color={iconColor} size={64} />
      </View>

      <View className="items-center gap-3 px-4">
        <Text className="text-center text-3xl font-bold text-text">{title}</Text>
        <Text className="text-center text-2xl font-bold text-primary">{subtitle}</Text>
        <Text className="mt-4 text-center text-lg leading-relaxed text-muted">{description}</Text>
      </View>
    </View>
  );
}
