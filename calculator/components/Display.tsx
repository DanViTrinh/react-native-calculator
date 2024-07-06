import { Text, View, StyleSheet, ViewStyle, StyleProp } from "react-native";

interface displayProps {
  displayText: String,
  style?: StyleProp<ViewStyle>
}

export default function Display({ displayText, style }: displayProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{displayText}</Text>
    </View>
  )
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
