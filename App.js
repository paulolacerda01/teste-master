import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './pages/home';
import InsertScreen from './pages/insert';
import UpdateScreen from './pages/update';
import SelectScreen from './pages/select';
import DeleteScreen  from './pages/delete';

const Stack = createStackNavigator();


function  App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
           />

        <Stack.Screen
              name="InsertScreen"
              component={InsertScreen}
           />
             <Stack.Screen
              name="DeleteScreen"
              component={DeleteScreen}
           />
             <Stack.Screen
              name="SelectScreen"
              component={SelectScreen}
           />

          <Stack.Screen
              name="UpdateScreen"
              component={UpdateScreen}
           />
           
    </Stack.Navigator>
    </NavigationContainer>
    
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
});

