import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// 路由容器
import {NavigationContainer} from '@react-navigation/native';
// 栈式导航
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BPage from './src/views/BPage';
import CPage from './src/views/CPage';
import DPage from './src/views/DPage';
import APage from './src/views/APage';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: 'red'},
          headerTitleStyle: {color: 'white'},
        }}>
        <Stack.Screen
          name="A"
          component={APage}
          options={{
            headerTitle: '首页',
            headerStyle: {backgroundColor: 'orangered'},
          }}
        />
        <Stack.Screen name="B" component={BPage} />
        <Stack.Screen name="C" component={CPage} />
        <Stack.Screen name="D" component={DPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
