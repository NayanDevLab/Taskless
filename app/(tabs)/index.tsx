import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Greeting from '../../components/home/Greeting';
import SmartActionsGrid from '../../components/home/SmartActionsGrid';
import FocusGroups from '../../components/home/FocusGroups';
import MissedActions from '../../components/home/MissedActions';
import FloatingQuickAdd from '../../components/home/FloatingQuickAdd';

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top', 'left', 'right']}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <Greeting />

        {/* Dynamic Horizontal Actions */}
        <SmartActionsGrid />

        {/* Don't Forget Section */}
        <MissedActions />

        {/* Today's Groups */}
        <FocusGroups />
      </ScrollView>

      {/* Floating Add Bar */}
      <FloatingQuickAdd />
    </SafeAreaView>
  );
}
