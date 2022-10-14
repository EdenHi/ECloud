// In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import APage from './src/views/APage';
import BPage from './src/views/BPage';
import CPage from './src/views/CPage';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title={'Jump to APage'}
        onPress={() => {
          navigation.navigate('APage');
        }}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="APage" component={APage} />

        <Stack.Screen name="BPage" component={BPage} />

        <Stack.Screen name="CPage" component={CPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
