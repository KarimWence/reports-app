import { View, Text, StyleSheet } from "react-native";

export default function CardContent({props}) {
    return(
        <View style={styles.container}>
            <View style={styles.reportImage}>
                <Text style={styles.image}>{props.image}</Text>
                <Text style={styles.imageText}>Imagen del reporte</Text>
            </View>
            <Text style={styles.descriptionText}>{props.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        paddingTop: 8,
        width: '100%',
    },
    reportImage: {
        flexDirection: 'column',
        width: '100%',
        height: 170,
        backgroundColor: '#F5F5F5',
        borderColor: '#DDD',
        borderWidth: 1,
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
    descriptionText: {
        width: '100%',
        textAlign: 'left',
        fontSize: 13,
        color: '#333',
    },
});