import { StyleSheet, View } from "react-native";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import CardActions from "./CardActions";

export default function CardContainer({props}) {
  return(
    <View style={styles.container}>
        <CardHeader props={props} />
        <CardContent props={props} />
        <CardActions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 330,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    margin: 8,
    backgroundColor: '#fff',
  },
});