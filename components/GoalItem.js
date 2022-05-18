import { StyleSheet, View, Text } from "react-native";

function GoalItem({ text }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
