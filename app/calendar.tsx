import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function CalendarScreen() {
  const today = new Date().toISOString().split('T')[0]; // Get today's date in "YYYY-MM-DD" format
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(today);
  const navigation = useNavigation();

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

  // Format selected date to a more readable format (Day, Month Date, Year)
  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  // Handle day press
  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  // Handle go back button press
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Go Back Button */}
      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
        <Text style={styles.goBackButtonText}>Go Back</Text>
      </TouchableOpacity>

      {/* Calendar */}
      <View style={styles.calendarContainer}>
        <Calendar
          current={today}
          onDayPress={handleDayPress}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#FF6347', selectedTextColor: '#fff' },
          }}
          theme={{
            calendarBackground: '#fff',
            todayTextColor: '#FF6347',
            dayTextColor: '#333',
            arrowColor: '#FF6347',
            selectedDayBackgroundColor: '#FF6347',
            selectedDayTextColor: '#fff',
            textSectionTitleColor: '#777',
            monthTextColor: '#333',
            indicatorColor: '#FF6347',
          }}
        />
      </View>

      <View style={styles.selectedDateContainer}>
        <Text style={styles.selectedDateText}>
          {`Selected Date: ${formatDate(selectedDate)}`}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f7f7f7',
    top:-60,
  },
  goBackButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 16,
    top:470,
  },
  goBackButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  calendarContainer: {
    marginTop: 20,
    marginHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
    padding: 10,
    top:1,
  },
  selectedDateContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  selectedDateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});
