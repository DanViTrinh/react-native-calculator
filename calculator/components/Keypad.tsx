import { Button, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  row: {
    flexDirection: 'row',
  },
})

export default function Keypad() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button title="7" />
        <Button title="8" />
        <Button title="9" />
      </View>
      <View style={styles.row}>
        <Button title="4" />
        <Button title="5" />
        <Button title="6" />
      </View>
      <View style={styles.row}>
        <Button title="1" />
        <Button title="2" />
        <Button title="3" />
      </View>
    </View>
  );
}

