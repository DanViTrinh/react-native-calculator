import { Text, View, StyleSheet, SafeAreaView } from "react-native";


const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    paddingTop: "10%",
    paddingRight: "5%"
  },
});

export default function Display({ displayText }: { displayText: String }) {
  return (
    <View style={styles.container}>
      <Text>{displayText}</Text>
    </View>
  )
}
