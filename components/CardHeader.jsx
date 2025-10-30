import { View, StyleSheet, Text } from "react-native";

export default function CardHeader({props}) {
  return(
    <View style={styles.container}>
        <View style={styles.userImageContainer}>
            <Text>👤</Text>
        </View>
        <View>
            <Text>{props.name}</Text>
            <Text>{props.place}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 8,
    },
    userImageContainer: {
        alignItems: 'center',
        width: 10,
    },
});