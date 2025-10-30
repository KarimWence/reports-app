import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen.jsx';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: '', headerLeft: () => (<Text style={{ fontWeight: 'bold', fontSize: 16 }}>Feed de Reportes</Text>), 
          headerRight: () => (
          <View style={{ paddingRight: 20 }}>
            <TouchableOpacity 
              style={{
                backgroundColor: '#007AFF',
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 8,
              }}
              onPress={() => {}}
            >
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>+ Añadir</Text>
            </TouchableOpacity>
    </View>) }} // Aquí defines el header
          
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
});
