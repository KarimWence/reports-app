import { View, StyleSheet, Text } from "react-native";

export default function CardHeader({props}) {
  return(
    <View style={styles.container}>
        <View style={styles.userImageContainer}>
            <Text style={styles.user}>👤</Text>
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.nameText}>{props.name}</Text>
            <Text style={styles.placeText}>{props.place}</Text>
        </View>
        <View>
            <Text style={styles.hoursAgoText}>{props.hoursAgo}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 8,
    },
    userImageContainer: {
        alignItems: 'center',
        width: 30,
    },
    user: {
        fontSize: 24,
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 8,
    },
    nameText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    placeText: {
        fontSize: 14,
        color: '#888',
    },
    hoursAgoText: {
        fontSize: 12,
        color: '#888',
    },
});