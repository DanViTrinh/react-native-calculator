import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import KeypadButton from "./KeypadButton";

interface keypadProps {
  insertToDisplay: (charToInsert: String) => void
  style?: StyleProp<ViewStyle>
}

export default function Keypad({ style, insertToDisplay }: keypadProps) {

  function updateDisplay(keyPressed: String) {
    insertToDisplay(keyPressed)
  }

  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        <KeypadButton title="C" updateDisplay={updateDisplay} />
        <KeypadButton title="()" updateDisplay={updateDisplay} />
        <KeypadButton title="%" updateDisplay={updateDisplay} />
        <KeypadButton title="/" updateDisplay={updateDisplay} />
      </View>
      <View style={styles.row}>
        <KeypadButton title="7" updateDisplay={updateDisplay} />
        <KeypadButton title="8" updateDisplay={updateDisplay} />
        <KeypadButton title="9" updateDisplay={updateDisplay} />
        <KeypadButton title="X" updateDisplay={updateDisplay} />
      </View>
      <View style={styles.row}>
        <KeypadButton title="4" updateDisplay={updateDisplay} />
        <KeypadButton title="5" updateDisplay={updateDisplay} />
        <KeypadButton title="6" updateDisplay={updateDisplay} />
        <KeypadButton title="-" updateDisplay={updateDisplay} />
      </View>
      <View style={styles.row}>
        <KeypadButton title="1" updateDisplay={updateDisplay} />
        <KeypadButton title="2" updateDisplay={updateDisplay} />
        <KeypadButton title="3" updateDisplay={updateDisplay} />
        <KeypadButton title="+" updateDisplay={updateDisplay} />
      </View>
      <View style={styles.row}>
        <KeypadButton title="0" updateDisplay={updateDisplay} />
        <KeypadButton title="00" updateDisplay={updateDisplay} />
        <KeypadButton title="." updateDisplay={updateDisplay} />
        <KeypadButton title="=" updateDisplay={updateDisplay} />
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
