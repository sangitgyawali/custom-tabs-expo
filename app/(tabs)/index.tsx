import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  // State for handling search input
  const [searchText, setSearchText] = useState('');

  // Handler for "Get Started" button
  const handleGetStarted = () => {
    alert('Get Started Pressed!');
  };

  // Handler for "Search" input change
  const handleSearchInputChange = (text: string) => {
    setSearchText(text);
    console.log(text); // You can replace this with your search functionality
  };

  // Handlers for other buttons
  const handleViewCalendar = () => {
    alert('Viewing Calendar...');
  };

  const handleAddNewTask = () => {
    alert('Adding New Task...');
  };

  const handleViewTodayTask = () => {
    alert('Viewing Today\'s Task...');
  };

  const handleViewStats = () => {
    alert('Viewing My Stats...');
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

      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.textInput}
          placeholder="Search here..."
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={handleSearchInputChange} // Update search text here
        />
      </View>

      <TouchableOpacity style={styles.rectangleButton1} onPress={handleViewCalendar}>
        <Text style={styles.buttonText}>View</Text>
        <Text style={styles.buttonText}>Calendar 📅</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rectangleButton2} onPress={handleAddNewTask}>
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/12692/12692379.png' }} 
          style={styles.buttonImage} 
        />
        <Text style={styles.buttonText}>Add New</Text>
        <Text style={styles.buttonText}>Task</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rectangleButton3} onPress={handleViewTodayTask}>
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1567/1567073.png' }} 
          style={styles.buttonImage} 
        />
        <Text style={styles.buttonText}>View Today</Text>
        <Text style={styles.buttonText}>Task</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rectangleButton4} onPress={handleViewStats}>
        <Text style={styles.buttonText}>View My</Text>
        <Text style={styles.buttonText}>Stats 📊</Text>
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
  },
  text: {
    color: 'black',
    fontSize: 27,
    fontWeight: 'bold',
    position: 'absolute',
    top: 20,
    left: 20,
  },
  text1: {
    color: 'black',
    fontSize: 27,
    fontWeight: 'bold',
    position: 'absolute',
    top: 60,
    left: 20,
  },
  text2: {
    color: 'black',
    fontSize: 27,
    fontWeight: 'bold',
    position: 'absolute',
    top: 100,
    left: 20,
  },
  rectangle1: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: 120,
    height: 40,
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
  },
  searchContainer: {
    position: 'absolute',
    top: height * 0.35,
    left: width * 0.05,
    width: width * 0.9,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 17,
    color: 'black',
    marginLeft: 10,
  },
  rectangleButton1: {
    position: 'absolute',
    bottom: height * 0.25,
    left: width * 0.05,
    width: 120,
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
  },
  rectangleButton2: {
    position: 'absolute',
    bottom: height * 0.25,
    left: width * 0.35,
    width: 120,
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
  },
  rectangleButton3: {
    position: 'absolute',
    bottom: height * 0.25,
    left: width * 0.65,
    width: 120,
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
  },
  rectangleButton4: {
    position: 'absolute',
    bottom: height * 0.05,
    left: width * 0.05,
    width: width * 0.9,
    height: 50,
    backgroundColor: '#F8F8F8',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
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
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  icon: {
    marginLeft: 10,
  },
});
