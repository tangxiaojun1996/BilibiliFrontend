import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'xj-react-native-components';

function Home(props) {
  console.log('props: ', props);
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
