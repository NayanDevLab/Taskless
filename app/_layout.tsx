import { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { getStorageItem, StorageKeys } from '../utils/storage';
import { initDB } from '../utils/database';
import { seedTemplates } from '../utils/seed';
import { useTaskStore } from '../store/useTaskStore';
import '../global.css';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  const init = useTaskStore(state => state.init);

  useEffect(() => {
    async function prepare() {
      try {
        // Initialize SQLite DB
        const db = await initDB();
        await seedTemplates(db);
        await init(db);
        
        // You can leave hasSeenOnboarding logic to the index.tsx as we did
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      // Hide splash screen smoothly after a small artificial delay to align with 1.5-2s spec requested
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 1000);
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* We will route based on hasSeenOnboarding via index.tsx */}
      <Stack.Screen name="index" />
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
