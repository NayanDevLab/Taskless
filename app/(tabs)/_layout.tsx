import { Tabs } from 'expo-router';
import { Home, PlusCircle, Folder, RotateCcw } from 'lucide-react-native';

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
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: 'Add',
          tabBarIcon: ({ color, size }) => (
            <PlusCircle color="#10B981" size={32} style={{ marginBottom: 4 }} />
          ),
          tabBarLabelStyle: { display: 'none' }, // the middle icon stands alone
        }}
      />
      <Tabs.Screen
        name="templates"
        options={{
          title: 'Templates',
          tabBarIcon: ({ color, size }) => <Folder color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color, size }) => <RotateCcw color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
