import { Text, View } from "react-native";
import ToolBarButton from "./ToolBarButton";

export default function ToolBar({ style, deleteChar }) {
  return (
    <View style={style}>
      <ToolBarButton title="Del" onPress={(keyPress) => { deleteChar() }} />
    </View>
  )

}


