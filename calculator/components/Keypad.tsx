import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import KeypadButton from "./KeypadButton";

interface keypadProps {
  style?: StyleProp<ViewStyle>
}

export default function Keypad({ style }: keypadProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        <KeypadButton title="C" />
        <KeypadButton title="()" />
        <KeypadButton title="%" />
        <KeypadButton title="/" />
      </View>
      <View style={styles.row}>
        <KeypadButton title="7" />
        <KeypadButton title="8" />
        <KeypadButton title="9" />
        <KeypadButton title="X" />
      </View>
      <View style={styles.row}>
        <KeypadButton title="4" />
        <KeypadButton title="5" />
        <KeypadButton title="6" />
        <KeypadButton title="-" />
      </View>
      <View style={styles.row}>
        <KeypadButton title="1" />
        <KeypadButton title="2" />
        <KeypadButton title="3" />
        <KeypadButton title="+" />
      </View>
      <View style={styles.row}>
        <KeypadButton title="0" />
        <KeypadButton title="00" />
        <KeypadButton title="." />
        <KeypadButton title="=" />
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  row: {
    display: "flex",
    flexDirection: 'row',
    backgroundColor: "red"
  },
})
