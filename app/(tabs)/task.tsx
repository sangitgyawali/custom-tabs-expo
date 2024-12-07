import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const flatListRef = useRef(null); // Ref for FlatList

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

  // Save tasks to AsyncStorage
  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (error) {
        console.error('Failed to save tasks to AsyncStorage:', error);
      }
    };

    if (tasks.length) {
      saveTasks();
    }
  }, [tasks]);

  // Function to add a new task with current timestamp and date
  function addTask() {
    if (text.trim()) {
      const now = new Date();

      // Format the full date (e.g., 1 January 2000)
      const formattedDate = new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(now);

      // Format the time (e.g., 11:30 AM)
      const formattedTime = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }).format(now);

      // Format the day (e.g., Monday)
      const formattedDay = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
      }).format(now);

      const newTask = {
        id: Date.now(),
        text,
        timestamp: formattedTime,
        date: formattedDate,
        day: formattedDay,
      };
      setTasks(prevTasks => {
        const updatedTasks = [...prevTasks, newTask];
        // Scroll to the latest task after adding
        setTimeout(() => {
          flatListRef.current?.scrollToEnd({ animated: true });
        }, 100); // Delay to ensure FlatList updates
        return updatedTasks;
      });
      setText('');
    }
  }

  // Function to delete a task
  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  // TodoItem Component (local, within the same file)
  const TodoItem = ({ task, deleteTask }) => {
    return (
      <View style={styles.item}>
        <View style={styles.taskContent}>
          <Text style={styles.text}>{task.text}</Text>
          <Text style={styles.timestamp}>{`${task.day}, ${task.date} at ${task.timestamp}`}</Text>
        </View>
        <TouchableOpacity
          onPress={() => deleteTask(task.id)}
          style={styles.deleteButton}
        >
          <Text style={styles.deleteText}>🗑️</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef} // Attach ref to FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem task={item} deleteTask={deleteTask} />
        )}
        contentContainerStyle={styles.taskList}
        ListFooterComponent={<View style={{ height: 100 }} />} // Extra space for footer
      />
      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Enter your task..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
          <Text style={styles.addButtonText}>ADD TODO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  taskList: {
    padding: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#8e44ad',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  taskContent: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  timestamp: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    padding: 8,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteText: {
    color: '#fff',
    fontSize: 16,
  },
});
