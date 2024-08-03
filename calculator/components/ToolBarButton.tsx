import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ToolBarButton({ title, onPress }: { title: string, onPress: (keyPress: string) => void }) {
  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={() => {
        onPress(title)
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-end',
    paddingRight: 15,
    justifyContent: 'center',
    height: "100%",
    backgroundColor: "#2F5684"
  },
  text: {
    color: 'white',
  },
});
