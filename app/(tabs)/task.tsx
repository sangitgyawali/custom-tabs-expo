import { View, Text, StyleSheet } from 'react-native';

export default function TaskScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Tasks!</Text>
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
