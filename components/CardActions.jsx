import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function CardActions() {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttons}>
                <Text style={styles.buttonText}>👍 Me gusta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
                <Text style={styles.buttonText}>💬 Comentar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
                <Text style={styles.buttonText}>📤 Compartir</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        paddingTop: 12,
    },
    buttons: {
        width: 100,
        height: 30,
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#757575',
        textAlign: 'center',
        fontSize: 12,
    },
});