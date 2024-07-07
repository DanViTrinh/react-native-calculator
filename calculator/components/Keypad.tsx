import { StyleProp, StyleSheet, TouchableWithoutFeedback, View, ViewStyle } from "react-native";
import KeypadButton from "./KeypadButton";
import { evaluate } from "mathjs";

interface keypadProps {
  output: string
  setOutput: React.Dispatch<React.SetStateAction<string>>
  style?: StyleProp<ViewStyle>
}

export default function Keypad({ output, setOutput, style }: keypadProps) {

  function insertToDisplay(charToInsert: string): void {
    if (output === "" && charToInsert.at(0) === "0") {
      setOutput("0")
    } else if (output === "0") {
      setOutput(charToInsert)
    } else {
      setOutput(output + charToInsert)
    }
  }

  // NOTE: the eval funciton is a security risk, but is ignored
  // because of its simplicity. A beter approach could be used in the future.
  function solve() {
    try {
      const solution: string = evaluate(output).toString()
      setOutput(solution)
    } catch (e) {
      console.error(e)
    }
  }

  function clear() {
    setOutput("")
  }

  function onKeyPress(keyPress: string) {
    switch (keyPress) {
      case "X":
        insertToDisplay("*")
        break;
      case "=":
        solve()
        break;
      case "C":
        clear()
        break;
      default:
        insertToDisplay(keyPress)
    }
  }

  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        <KeypadButton title="C" onPress={onKeyPress} />
        <KeypadButton title="(" onPress={onKeyPress} />
        <KeypadButton title=")" onPress={onKeyPress} />
        <KeypadButton title="/" onPress={onKeyPress} />
      </View>
      <View style={styles.row}>
        <KeypadButton title="7" onPress={onKeyPress} />
        <KeypadButton title="8" onPress={onKeyPress} />
        <KeypadButton title="9" onPress={onKeyPress} />
        <KeypadButton title="X" onPress={onKeyPress} />
      </View>
      <View style={styles.row}>
        <KeypadButton title="4" onPress={onKeyPress} />
        <KeypadButton title="5" onPress={onKeyPress} />
        <KeypadButton title="6" onPress={onKeyPress} />
        <KeypadButton title="-" onPress={onKeyPress} />
      </View>
      <View style={styles.row}>
        <KeypadButton title="1" onPress={onKeyPress} />
        <KeypadButton title="2" onPress={onKeyPress} />
        <KeypadButton title="3" onPress={onKeyPress} />
        <KeypadButton title="+" onPress={onKeyPress} />
      </View>
      <View style={styles.row}>
        <KeypadButton title="0" onPress={onKeyPress} />
        <KeypadButton title="00" onPress={onKeyPress} />
        <KeypadButton title="." onPress={onKeyPress} />
        <KeypadButton title="=" onPress={onKeyPress} />
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
