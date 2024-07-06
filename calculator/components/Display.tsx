import { Text, View, StyleSheet, ViewStyle, StyleProp } from "react-native";

interface displayProps {
  displayText: String,
  cursorPlacement: number,
  style?: StyleProp<ViewStyle>

}

export default function Display({ displayText, cursorPlacement, style }: displayProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{addCursor(displayText, cursorPlacement)}</Text>
    </View>
  )
}

// The cursor placment starts from the last digit, for example
// cursorPlacement 0 will be 123|
function addCursor(text: String, cursorPlacement: number): String {
  const cursorChar = "|"
  const cursorPlacementInText = text.length - cursorPlacement

  const newText = text.substring(0, cursorPlacementInText)
    + cursorChar + text.substring(cursorPlacementInText)

  return newText
}

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
