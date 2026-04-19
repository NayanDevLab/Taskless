import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Dimensions, Animated } from 'react-native';
import { router, Href } from 'expo-router';
import { setStorageItem, StorageKeys } from '../../utils/storage';
import { BellRing, CheckSquare, Zap, ChevronRight, Check } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const SLIDES = [
  {
    id: 1,
    title: "You don't forget tasks.",
    subtitle: "You forget situations.",
    description: "Missed a call? Forgot the groceries? Taskless thinks in real-life contexts, not boring lists.",
    icon: <BellRing color="#3B82F6" size={64} />,
  },
  {
    id: 2,
    title: "Choose what you want to do.",
    subtitle: "We handle the rest.",
    description: "Pick a template like 'Call Someone' or 'Buy Something' and add it in seconds.",
    icon: <CheckSquare color="#10B981" size={64} />,
  },
  {
    id: 3,
    title: "Fast. Simple.",
    subtitle: "No thinking required.",
    description: "Your actions prioritized cleanly, ready when you need them. Let's make things happen.",
    icon: <Zap color="#8B5CF6" size={64} />,
  }
];

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = async () => {
    if (currentIndex < SLIDES.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Mark as seen and go to tabs
      await setStorageItem(StorageKeys.HAS_SEEN_ONBOARDING, 'true');
      router.replace('/(tabs)' as Href);
    }
  };

  const handleSkip = async () => {
    await setStorageItem(StorageKeys.HAS_SEEN_ONBOARDING, 'true');
    router.replace('/(tabs)' as Href);
  };

  const currentSlide = SLIDES[currentIndex];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 px-6 pt-10 pb-6 justify-between">
        {/* Header - Skip Button */}
        <View className="flex-row justify-end">
          {currentIndex < SLIDES.length - 1 ? (
            <TouchableOpacity onPress={handleSkip}>
              <Text className="text-muted font-medium text-lg">Skip</Text>
            </TouchableOpacity>
          ) : (
            <View style={{ height: 28 }} />
          )}
        </View>

        {/* Content */}
        <View className="items-center justify-center flex-1 gap-10">
          <View className="w-32 h-32 rounded-full bg-card items-center justify-center shadow-lg border border-border">
            {currentSlide.icon}
          </View>
          
          <View className="items-center gap-3 px-4">
            <Text className="text-text text-3xl font-bold text-center">
              {currentSlide.title}
            </Text>
            <Text className="text-primary text-2xl font-bold text-center">
              {currentSlide.subtitle}
            </Text>
            <Text className="text-muted text-center text-lg mt-4 leading-relaxed">
              {currentSlide.description}
            </Text>
          </View>
        </View>

        {/* Footer Area */}
        <View className="gap-8 pb-8">
          {/* Progress Indicators */}
          <View className="flex-row justify-center gap-2">
            {SLIDES.map((_, index) => (
              <View 
                key={index} 
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-border'
                }`} 
              />
            ))}
          </View>

          {/* Action Button */}
          <TouchableOpacity 
            onPress={handleNext}
            className="w-full bg-primary py-4 rounded-2xl flex-row justify-center items-center gap-2 shadow-lg shadow-primary/30"
          >
            <Text className="text-white text-xl font-bold">
              {currentIndex === SLIDES.length - 1 ? 'Start Using' : 'Next'}
            </Text>
            {currentIndex === SLIDES.length - 1 ? (
              <Check color="#fff" size={24} />
            ) : (
              <ChevronRight color="#fff" size={24} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
