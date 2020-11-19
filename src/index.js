import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './routes';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// export default function App() {
// 	return (
// 		<NavigationContainer>
// 			<View style={styles.container}>
// 				<Text>Open up App.js to start working on your app!</Text>
// 			</View>
// 		</NavigationContainer>
// 	);
// }



function HomeScreen() {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
		</View>
	);
}

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			{/* <Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
			</Stack.Navigator> */}
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
