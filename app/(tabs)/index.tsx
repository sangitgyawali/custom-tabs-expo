import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
     
<Text style={styles.text}>Let’s Set-Up </Text>
        <Text style={styles.text1}>Your Live </Text>
        <Text style={styles.text2}>Now !!</Text>
       </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    top:50,

  },
  rectangle: {
    width: 350,
    height: 158,
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
    left:-80,
  
    
  },
  text1:{
    color: 'black',
    fontSize: 27,
    fontWeight: 'bold',
    left:-100,
   
  },
  text2:{
    color: 'black',
    fontSize: 27,
    fontWeight: 'bold',
    left:-120,
    marginBottom: 5,
  },
});
