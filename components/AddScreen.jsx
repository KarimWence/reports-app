import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function AddScreen() {
    const [description, setDescription] = useState('');
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.containers}>
                    <Text style={styles.title}>📍 Ubicación</Text>
                    <TouchableOpacity style={styles.updatePlaceButton}>
                        <Text style={styles.updatePlaceButtonText}>Actualizar ubicación</Text>
                    </TouchableOpacity>
                    <Text style={styles.placeNameText}>Stockton St 1-99, San Francisco, CA</Text>
                </View>
                <View style={styles.containers}>
                    <Text style={styles.title}>📸 Imagen</Text>
                    <View style={styles.updateImage}>
                        <Text style={styles.image}>📸</Text>
                        <Text style={styles.imageText}>Toca para agregar imagen</Text>
                    </View>
                </View>
                <View style={styles.containers}>
                    <Text style={styles.title}>📝 Descripción</Text>
                    <TextInput
                        multiline
                        style={styles.descriptionInput} 
                        placeholder='Describe el problema que quieres reportar'
                        value={description}
                        onChangeText={setDescription}
                    />
                    <TouchableOpacity style={styles.sendReportButton}>
                        <Text style={styles.sendReportText}>Enviar Reporte</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        paddingTop: 12,
    },
    containers: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '90%',
        gap: 13,
    },
    title: {
        fontSize: 19,
        fontWeight: 500,
    },
    updatePlaceButton: {
        backgroundColor: '#007AFF',
        width: '100%',
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    updatePlaceButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    placeNameText: {
        fontSize: 13,
        color: '#757575',
        fontStyle: 'italic',
    },
    updateImage: {
        flexDirection: 'column',
        width: '100%',
        height: 200,
        backgroundColor: '#F0F0F0',
        borderColor: '#DDD',
        borderWidth: 2,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    image: {
        fontSize: 40,
    },
    imageText: {
        fontSize: 14,
        color: '#888',
    },
    descriptionInput: {
        width: '100%',
        height: 200,
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingTop: 10,
        borderColor: '#DDD',
        borderWidth: 1,
        borderRadius: 8,
    },
    sendReportButton: {
        backgroundColor: '#34C759',
        width: '100%',
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendReportText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
});