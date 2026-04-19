import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Mic, Plus } from 'lucide-react-native';

export default function FloatingQuickAdd() {
  return (
    <View className="absolute bottom-6 left-6 right-6 flex-row items-center gap-3 rounded-full border border-border bg-card p-2 px-4 shadow-xl">
      <TouchableOpacity className="p-2">
        <Mic color="#94A3B8" size={20} />
      </TouchableOpacity>

      <TextInput
        placeholder="Type or use voice..."
        placeholderTextColor="#64748B"
        className="flex-1 py-2 text-base text-text"
      />

      <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-primary shadow-sm">
        <Plus color="#fff" size={20} />
      </TouchableOpacity>
    </View>
  );
}
