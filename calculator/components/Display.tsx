import { Text, View, StyleSheet, ViewStyle, StyleProp } from "react-native";


const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  text: {
    paddingTop: "10%",
    paddingRight: "5%",
    paddingBottom: "10%"
  }
});

export default function Display({
  displayText,
  style
}: {
  displayText: String,
  style: StyleProp<ViewStyle>
}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{displayText}</Text>
    </View>
  )
}
