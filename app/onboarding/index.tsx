import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, Href } from 'expo-router';
import { setStorageItem, StorageKeys } from '../../utils/storage';
import { ChevronRight, Check } from 'lucide-react-native';
import { ONBOARDING_STRINGS, ONBOARDING_SLIDES_DATA } from '../../constants/strings';
import OnboardingSlide from '../../components/onboarding/OnboardingSlide';
import OnboardingPagination from '../../components/onboarding/OnboardingPagination';
import PrimaryButton from '../../components/ui/PrimaryButton';

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = async () => {
    if (currentIndex < ONBOARDING_SLIDES_DATA.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      await finishOnboarding();
    }
  };

  const handleSkip = async () => {
    await finishOnboarding();
  };

  const finishOnboarding = async () => {
    await setStorageItem(StorageKeys.HAS_SEEN_ONBOARDING, 'true');
    router.replace('/(tabs)' as Href);
  };

  const currentSlide = ONBOARDING_SLIDES_DATA[currentIndex];
  const isLastSlide = currentIndex === ONBOARDING_SLIDES_DATA.length - 1;

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 justify-between px-6 pb-6 pt-10">
        {/* Header - Skip Button */}
        <View className="flex-row justify-end">
          {!isLastSlide ? (
            <TouchableOpacity onPress={handleSkip}>
              <Text className="text-lg font-medium text-muted">{ONBOARDING_STRINGS.SKIP}</Text>
            </TouchableOpacity>
          ) : (
            <View style={{ height: 28 }} />
          )}
        </View>

        {/* Content */}
        <OnboardingSlide {...currentSlide} />

        {/* Footer Area */}
        <View className="gap-8 pb-8">
          <OnboardingPagination
            totalSlides={ONBOARDING_SLIDES_DATA.length}
            currentIndex={currentIndex}
          />

          <PrimaryButton
            onPress={handleNext}
            title={isLastSlide ? ONBOARDING_STRINGS.START_USING : ONBOARDING_STRINGS.NEXT}
            icon={
              isLastSlide ? (
                <Check color="#fff" size={24} />
              ) : (
                <ChevronRight color="#fff" size={24} />
              )
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
