import { View, Text, StyleSheet } from 'react-native';

export default function CalendarScreeen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Calendar!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
