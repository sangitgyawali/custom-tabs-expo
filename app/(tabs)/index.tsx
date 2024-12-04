import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
      <Image 
    source={{ uri: 'https://static.vecteezy.com/system/resources/previews/048/415/847/non_2x/3d-icon-simple-female-character-working-on-laptop-while-sitting-in-chair-free-png.png' }} 
    style={styles.buttonImage1} 
  />
        <Text style={styles.text}>Let’s Set-Up </Text>
        <Text style={styles.text1}>Your Live </Text>
        <Text style={styles.text2}>Now !!</Text>
        <View style={styles.rectangle1}>
        <TouchableOpacity style={styles.text3} onPress={() => alert('Button Pressed!')}>
        <Text style={styles.text3}>Get Started</Text>
      </TouchableOpacity>
        </View>
      </View>
  
      <View style={styles.searchContainer}>
  <Icon name="search" size={20} color="#888" style={styles.icon} />
  <TextInput
    style={styles.textInput}
    placeholder="Search here..."
    placeholderTextColor="#888"
    onChangeText={(text) => console.log(text)}
  />
</View>

      <TouchableOpacity style={styles.rectangleButton1} onPress={() => alert('Button Pressed!')}>
        <Text style={styles.buttonText}>View</Text>
        <Text style={styles.buttonText}>Calendar📅</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rectangleButton2} onPress={() => alert('Button Pressed!')}>
  <Image 
    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/12692/12692379.png' }} 
    style={styles.buttonImage} 
  />
  <Text style={styles.buttonText}>Add New</Text>
  <Text style={styles.buttonText}>Task</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.rectangleButton3} onPress={() => alert('Button Pressed!')}>
  <Image 
    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1567/1567073.png' }} 
    style={styles.buttonImage} 
  />
  <Text style={styles.buttonText}>View Today</Text>
  <Text style={styles.buttonText}>Task</Text>
</TouchableOpacity>

      <TouchableOpacity style={styles.rectangleButton4} onPress={() => alert('Button Pressed!')}>
        <Text style={styles.buttonText}>View My</Text>
        <Text style={styles.buttonText}> Stats📊</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    top: 50,
  },
  rectangle: {
    width: 350,
    height: 160,
    backgroundColor: 'yellow',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    top: 60,
  },
  text: {
    color: 'black',
    fontSize: 27,
    fontWeight: 'bold',
    left: -80,
    top:-80
  },
  text1: {
    color: 'black',
    fontSize: 27,
    fontWeight: 'bold',
    left: -100,
    top:-80
  },
  text2: {
    color: 'black',
    fontSize: 27,
    fontWeight: 'bold',
    left: -120,
    marginBottom: 5,
    top:-80
  },
  rectangle1: {
    width: 122,
    height: 22,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    left: -100,
    top:-80
  },
  text3: {
    fontWeight: 'bold',
    left: -10,
  },
  rectangle2: {
    width: 210,
    height: 44,
    backgroundColor: 'white',
    borderRadius: 15,
    borderBlockColor: "#F8F8F8",
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    left: -70,
    top: -180,
  },
  text4: {
    fontWeight: 'bold',
    left: -20,
    top:-12,
  },
  rectangleButton1: {
    width: 121,
    height: 121,
    backgroundColor: '#F8F8F8',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 40,
    left:-90
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rectangleButton2: {
    width: 116,
    height: 220,
    backgroundColor: '#F8F8F8',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 40,
    left:-90,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rectangleButton3: {
    width: 116,
    height: 220,
    backgroundColor: '#F8F8F8',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginTop: -380,
    left:100
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rectangleButton4: {
    width: 121,
    height: 121,
    backgroundColor: '#F8F8F8',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 40,
    left:100
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon:{
    left:-90,
    top:8
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: 'black', 
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '250',
    height: 44,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    paddingHorizontal: 10,
    marginBottom: 20,
    top:-180,
    left:-50,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 17,
    color: 'black',
    fontWeight:'bold',
  },
  buttonImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  buttonImage1:{
    width: 200,
    height: 160,
    left:80,
    top:50,
  }
});
