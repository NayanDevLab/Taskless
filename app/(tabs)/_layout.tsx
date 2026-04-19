import { Tabs } from 'expo-router';
import { TABS_SCREENS } from '../../constants/tabs';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1E293B', // card color
          borderTopColor: '#334155', // border color
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarActiveTintColor: '#3B82F6', // primary color
        tabBarInactiveTintColor: '#94A3B8', // muted color
      }}
    >
      {TABS_SCREENS.map((screen) => (
        <Tabs.Screen key={screen.name} name={screen.name} options={screen.options} />
      ))}
    </Tabs>
  );
}
