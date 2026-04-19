import AsyncStorage from '@react-native-async-storage/async-storage';

export const StorageKeys = {
  HAS_SEEN_ONBOARDING: 'HAS_SEEN_ONBOARDING',
};

export const getStorageItem = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.error(`Error getting storage item ${key}:`, error);
    return null;
  }
};

export const setStorageItem = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error(`Error setting storage item ${key}:`, error);
  }
};
