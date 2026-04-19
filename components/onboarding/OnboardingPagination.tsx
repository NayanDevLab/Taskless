import React from 'react';
import { View } from 'react-native';

interface PaginationProps {
  totalSlides: number;
  currentIndex: number;
}

export default function OnboardingPagination({ totalSlides, currentIndex }: PaginationProps) {
  return (
    <View className="flex-row justify-center gap-2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <View
          key={index}
          className={`h-2 rounded-full transition-all ${
            index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-border'
          }`}
        />
      ))}
    </View>
  );
}
