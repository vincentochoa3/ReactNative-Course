import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ text, id, deleteGoalHandler }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={deleteGoalHandler.bind(this, id)}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: "#210644",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
