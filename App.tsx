import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; 
import LoginScreen from './screens/LoginScreen';  
import MessagesScreen from './screens/MessagesScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import CalendarScreen from './screens/CalendarScreen';
import TeacherSearchScreen from './screens/TeacherSearchScreen';
import ReservationScreen from './screens/ReservationScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';
import CancellationScreen from './screens/CancellationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}  
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}  
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Messages"
          component={MessagesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notifications"
          component={NotificationsScreen}  
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Calendar"
          component={CalendarScreen}  
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TeacherSearch"
          component={TeacherSearchScreen}  
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reservation"
          component={ReservationScreen}  
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Confirmation"
          component={ConfirmationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cancellation"
          component={CancellationScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
