import React from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  icon?: React.ReactNode;
  className?: string;
  textClassName?: string;
}

export default function PrimaryButton({
  onPress,
  title,
  icon,
  className = '',
  textClassName = '',
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full flex-row items-center justify-center gap-2 rounded-2xl bg-primary py-4 shadow-lg shadow-primary/30 ${className}`}
    >
      <Text className={`text-xl font-bold text-white ${textClassName}`}>{title}</Text>
      {icon}
    </TouchableOpacity>
  );
}
