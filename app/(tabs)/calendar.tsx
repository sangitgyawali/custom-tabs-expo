import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CalendarScreen() {
  const today = new Date().toISOString().split('T')[0]; // Get today's date in "YYYY-MM-DD" format
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(today);
  
  // Load tasks from AsyncStorage when the app starts
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error('Failed to load tasks from AsyncStorage:', error);
      }
    };

    loadTasks();
  }, []);

  // Filter today's tasks
  const todaysTasks = tasks.filter(task => task.date === selectedDate);

  // Handle day press
  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      {/* Calendar */}
      <Calendar
        current={today}
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: '#FFC300' },
        }}
        theme={{
          calendarBackground: '#fff',
          selectedDayBackgroundColor: '#FFC300',
          selectedDayTextColor: '#fff',
          todayTextColor: '#FF6F00',
          dayTextColor: '#000',
          arrowColor: '#FFC300',
        }}
      />

      {/* Today's Tasks Display */}
      <View style={styles.tasksBox}>
        <Text style={styles.tasksBoxTitle}>Today's Tasks</Text>
        {todaysTasks.length === 0 ? (
          <Text style={styles.noTasksText}>No tasks for today</Text>
        ) : (
          <FlatList
            data={todaysTasks}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.taskItem}>
                <Text style={styles.taskTime}>{item.timestamp}</Text>
                <Text style={styles.taskText}>{item.text}</Text>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    padding: 16,
  },
  tasksBox: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  tasksBoxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  taskTime: {
    fontSize: 14,
    color: '#888',
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
  noTasksText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
  },
});
