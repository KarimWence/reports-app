import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen.jsx';
import AddScreen from './components/AddScreen.jsx';
import AddButton from './components/AddButton.jsx';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: '', headerLeft: () => (<Text style={styles.headerLeft}>Feed de Reportes</Text>), 
          headerRight: () => (
            <View style={{ paddingRight: 20 }}>
              <AddButton />
            </View>
          ) }}
        />
        <Stack.Screen
          name="AddReport"
          component={AddScreen}
          options={{ title: 'Nuevo Reporte' }}
        />
      </Stack.Navigator>
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
  headerLeft: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 10,
    height: 30
  },
});
