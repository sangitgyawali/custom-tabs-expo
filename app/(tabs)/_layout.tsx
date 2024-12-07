import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useRouter } from 'expo-router';
import { Button } from 'react-native';

export default function TabLayout() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/instruction');
  };

  const navigateToSettings = () => {
    router.push('/settings');  // Navigate to the settings screen
  };

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          
        }}
      />
      {/* Tasks Tab */}
      <Tabs.Screen
        name="task"
        options={{
          title: 'Tasks',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="tasks" color={color} />,
        }}
      />
      {/* Calendar Tab */}
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="calendar" color={color} />,
        }}
      />
      {/* Instructions Tab */}
      <Tabs.Screen
        name="instructions"
        options={{
          title: 'Instructions',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="rocket" color={color} />,
        }}
      />
      {/* TaskListScreen Tab */}
      <Tabs.Screen
        name="TaskListScreen"
        options={{
          title: 'Task List',
          tabBarStyle: { display: 'none' },
        }}
      />
      {/* Settings Screen */}
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="rocket" color={color} />,
        }}
      />
    </Tabs>
  );
}
