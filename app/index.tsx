import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Href, Redirect } from 'expo-router';
import { getStorageItem, StorageKeys } from '../utils/storage';

export default function Index() {
  const [isReady, setIsReady] = useState(false);
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);

  useEffect(() => {
    async function checkState() {
      const seen = await getStorageItem(StorageKeys.HAS_SEEN_ONBOARDING);
      setHasSeenOnboarding(seen === 'true');
      setIsReady(true);
    }
    checkState();
  }, []);

  if (!isReady) {
    return (
      <View style={{ flex: 1, backgroundColor: '#0F172A', justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#3B82F6" />
      </View>
    );
  }

  if (!hasSeenOnboarding) {
    return <Redirect href={"/onboarding" as Href} />;
  }

  return <Redirect href={"/(tabs)" as Href} />;
}
