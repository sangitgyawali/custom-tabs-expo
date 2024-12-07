import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const InstructionsScreen = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // Navigates back to the previous screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How to Use the Todo List App</Text>
      
      <Text style={styles.text}>
        1. **Add a Task**: 
        - To add a task, simply type your task in the input field at the top and press the "ADD TODO" button.
        - Each task will be saved with the current timestamp and today's date.
      </Text>
      
      <Text style={styles.text}>
        2. **View Tasks**: 
        - All your added tasks will be displayed in a list below the input field.
        - Each task shows its text, the time it was added, and a delete button.
      </Text>
      
      <Text style={styles.text}>
        3. **Delete a Task**: 
        - To delete a task, simply press the trash can icon 🗑️ next to the task. The task will be removed from the list.
      </Text>

      <Text style={styles.text}>
        4. **Data Persistence**: 
        - The tasks you add are saved to your device using AsyncStorage, so even if you close the app, your tasks will persist when you reopen the app.
      </Text>
      
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#555',
    marginBottom: 15,
  },
  backButton: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default InstructionsScreen;
