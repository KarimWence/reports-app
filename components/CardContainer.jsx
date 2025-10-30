import { StyleSheet, View } from "react-native";
import CardHeader from "./CardHeader";

export default function CardContainer({props}) {
  return(
    <View style={styles.container}>
        <CardHeader props={props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 30,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    margin: 8,
    backgroundColor: 'blue',
  },
});