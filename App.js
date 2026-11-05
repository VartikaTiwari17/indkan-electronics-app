import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import FormScreen from './src/screens/FormScreen';
import ContactScreen from './src/screens/ContactScreen';
import { colors } from './src/theme';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '700' }
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'INDKAN Exim' }} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Product Details' }} />
        <Stack.Screen name="BulkOrder" component={FormScreen} initialParams={{ type: 'bulk' }} options={{ title: 'Bulk Order Request' }} />
        <Stack.Screen name="Enquiry" component={FormScreen} initialParams={{ type: 'enquiry' }} options={{ title: 'Trade Enquiry' }} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}