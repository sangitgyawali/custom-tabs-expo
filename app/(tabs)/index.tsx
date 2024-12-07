import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; 
import { useRouter } from 'expo-router'; 

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation(); 
  const [searchText, setSearchText] = useState('');
  const handleGetStarted = () => {
    navigation.navigate('instructions'); 
  };

  const handleViewCalendar = () => {
    navigation.navigate('calendar');
  };

  const handleAddNewTask = () => {
    navigation.navigate('task'); 
  };

  const handleViewAllTasks = () => {
    navigation.navigate('settings');
  };

  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Image 
          source={{ uri: 'https://static.vecteezy.com/system/resources/previews/048/415/847/non_2x/3d-icon-simple-female-character-working-on-laptop-while-sitting-in-chair-free-png.png' }} 
          style={styles.buttonImage1} 
        />
        <Text style={styles.text}>Let’s Set-Up</Text>
        <Text style={styles.text1}>Your Live</Text>
        <Text style={styles.text2}>Now !!</Text>
        <TouchableOpacity style={styles.rectangle1} onPress={handleGetStarted}>
          <Text style={styles.text3}>Get Started</Text>
        </TouchableOpacity>
      </View>

      {/* Button to View Calendar */}
      <TouchableOpacity style={styles.rectangleButton1} onPress={handleViewCalendar}>
        <Image 
          source={{ uri: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678116-calendar-512.png' }} 
          style={styles.buttonImage} 
        />
        <Text style={styles.buttonText}>View </Text>
        <Text style={styles.buttonText}>Calendar</Text>
      </TouchableOpacity>

      {/* Button to Add New Task */}
      <TouchableOpacity style={styles.rectangleButton2} onPress={handleAddNewTask}>
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/12692/12692379.png' }} 
          style={styles.buttonImage} 
        />
        <Text style={styles.buttonText}>Add New</Text>
        <Text style={styles.buttonText}>Task</Text>
      </TouchableOpacity>

      {/* Button to View All Tasks */}
      <TouchableOpacity style={styles.rectangleButton3} onPress={handleViewAllTasks}>
        <Image 
          source={{ uri: 'https://static-00.iconduck.com/assets.00/settings-icon-2048x2046-cw28eevx.png' }} 
          style={styles.buttonImage} 
        />
        <Text style={styles.buttonText}>Settings</Text>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  rectangle: {
    position: 'absolute',
    top: height * 0.1, // 10% from the top
    left: width * 0.05, // 5% from the left
    width: width * 0.9, // 90% of screen width
    height: height * 0.2, // 20% of screen height
    backgroundColor: 'yellow',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    top:45,
    
  },
  text: {
    color: 'black',
    fontSize: 21,
    fontWeight: 'bold',
    position: 'absolute',
    top: 10,
    left: 20,
  },
  text1: {
    color: 'black',
    fontSize: 21,
    fontWeight: 'bold',
    position: 'absolute',
    top: 40,
    left: 20,
  },
  text2: {
    color: 'black',
    fontSize: 21,
    fontWeight: 'bold',
    position: 'absolute',
    top: 70,
    left: 20,
  },
  rectangle1: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: 100,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  text3: {
    fontWeight: 'bold',
    color: 'black',
    position: 'absolute',
    
  },
  rectangleButton1: {
    position: 'absolute',
    bottom: height * 0.25,
    left: width * 0.05,
    width: 290,
    height: 120,
    backgroundColor: '#F8F8F8',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    top:360,
    left:45,
  },
  rectangleButton2: {
    position: 'absolute',
    bottom: height * 0.25,
    left: width * 0.35,
    width: 290,
    height: 120,
    backgroundColor: '#F8F8F8',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    top:220,
    left:45,
  },
  rectangleButton3: {
    position: 'absolute',
    bottom: height * 0.25,
    left: width * 0.65,
    width: 290,
    height: 120,
    backgroundColor: '#F8F8F8',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    top:500,
    left:45,
  },

  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  buttonImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  buttonImage1: {
    width: 220,
    height: 220,
    marginBottom: 20,
    left:80,
    top:-20,
  },
});
