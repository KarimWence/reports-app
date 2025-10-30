import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AddButton({ onPress }) {
    const navigation = useNavigation();
    return(
        <TouchableOpacity 
            style={styles.addButton}
            onPress={() => navigation.navigate('AddReport')}
        >
            <Text style={styles.buttonText}>+ Agregar</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
});