import { StyleProp, View, ViewStyle } from "react-native";
import ToolBarButton from "./ToolBarButton";

interface toolBarProps {
  output: string
  setOutput: React.Dispatch<React.SetStateAction<string>>
  style?: StyleProp<ViewStyle>
}

export default function ToolBar({ output, setOutput, style }: toolBarProps) {

  function deleteChar() {
    if (output !== undefined) {
      setOutput(output.substring(0, output.length - 1))
    }
  }

  return (
    <View style={style}>
      <ToolBarButton title="Del" onPress={(_: string) => { deleteChar() }} />
    </View>
  )

}


