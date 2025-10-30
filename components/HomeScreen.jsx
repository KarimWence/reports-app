import { View, StyleSheet, ScrollView } from 'react-native';
import CardContainer from './CardContainer.jsx';

const data1 = [
  { id: '1', name: 'Ana García', place: 'Centro de la ciudad', hoursAgo: 'Hace 2 horas', image: '📸', description: 'Problema con el alumbrado público en la calle principal' },
  { id: '2', name: 'Carlos Mendoza', place: 'Parque Central', hoursAgo: 'Hace 4 horas', image: '🌳', description: 'Basura acumulada en los contenedores del parque' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <ScrollView>
            <CardContainer props={data1[0]} />
            <CardContainer props={data1[1]} />
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDFDFD',
  },
});