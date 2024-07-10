import { Modal, SafeAreaView, StyleSheet, Text, TouchableNativeFeedbackComponent, TouchableWithoutFeedback, View } from "react-native";


export default function MessageModal({ message, visible, setVisible }) {
  return (
    <Modal
      visible={visible}
      transparent={true}
    >
      <TouchableWithoutFeedback onPress={() => { setVisible(false) }}>
        <View style={styles.bottomView}>
          <View style={styles.modalView}>
            <Text>{message}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal >
  )
}

const styles = StyleSheet.create({
  bottomView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  modalView: {
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingTop: 5,
    paddingBottom: 7,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    shadowColor: '#000',
    opacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  modal: {

  }
})
