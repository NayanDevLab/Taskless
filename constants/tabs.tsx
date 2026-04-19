import React from 'react';
import { Home, PlusCircle, Folder, RotateCcw } from 'lucide-react-native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

export interface TabScreenConfig {
  name: string;
  options: BottomTabNavigationOptions;
}

export const TABS_SCREENS: TabScreenConfig[] = [
  {
    name: 'index',
    options: {
      title: 'Home',
      tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
    },
  },
  {
    name: 'add',
    options: {
      title: 'Add',
      tabBarIcon: ({ color, size }) => (
        <PlusCircle color="#10B981" size={32} style={{ marginBottom: 4 }} />
      ),
      tabBarLabelStyle: { display: 'none' }, // the middle icon stands alone
    },
  },
  {
    name: 'templates',
    options: {
      title: 'Templates',
      tabBarIcon: ({ color, size }) => <Folder color={color} size={size} />,
    },
  },
  {
    name: 'history',
    options: {
      title: 'History',
      tabBarIcon: ({ color, size }) => <RotateCcw color={color} size={size} />,
    },
  },
];
