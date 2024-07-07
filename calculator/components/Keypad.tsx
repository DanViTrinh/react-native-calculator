import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import KeypadButton from "./KeypadButton";

interface keypadProps {
  insertToDisplay: (charToInsert: String) => void
  solve: () => void
  style?: StyleProp<ViewStyle>
}

export default function Keypad({ insertToDisplay, solve, style }: keypadProps) {


  enum KeyType {
    Delete,
    Insert,
    Clear,
    Solve
  }

  function getOnPressHandler(keyType: KeyType) {
    switch (keyType) {
      case KeyType.Insert:
        return insertToDisplay
      case KeyType.Solve:
        return (keyPressed: String) => {
          solve()
        }
      default:
        console.log("Key type is not available")
        return (keyPressed: String) => { }
    }
  }

  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        <KeypadButton title="7" onPress={getOnPressHandler(KeyType.Insert)} />
        <KeypadButton title="8" onPress={getOnPressHandler(KeyType.Insert)} />
        <KeypadButton title="9" onPress={getOnPressHandler(KeyType.Insert)} />
        <KeypadButton title="X" onPress={getOnPressHandler(KeyType.Insert)} />
      </View>
      <View style={styles.row}>
        <KeypadButton title="4" onPress={getOnPressHandler(KeyType.Insert)} />
        <KeypadButton title="5" onPress={getOnPressHandler(KeyType.Insert)} />
        <KeypadButton title="6" onPress={getOnPressHandler(KeyType.Insert)} />
        <KeypadButton title="-" onPress={getOnPressHandler(KeyType.Insert)} />
      </View>
      <View style={styles.row}>
        <KeypadButton title="1" onPress={getOnPressHandler(KeyType.Insert)} />
        <KeypadButton title="2" onPress={getOnPressHandler(KeyType.Insert)} />
        <KeypadButton title="3" onPress={getOnPressHandler(KeyType.Insert)} />
        <KeypadButton title="+" onPress={getOnPressHandler(KeyType.Insert)} />
      </View>
      <View style={styles.row}>
        <KeypadButton title="0" onPress={getOnPressHandler(KeyType.Insert)} />
        <KeypadButton title="00" onPress={getOnPressHandler(KeyType.Insert)} />
        <KeypadButton title="." onPress={getOnPressHandler(KeyType.Insert)} />
        <KeypadButton title="=" onPress={getOnPressHandler(KeyType.Solve)} />
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
