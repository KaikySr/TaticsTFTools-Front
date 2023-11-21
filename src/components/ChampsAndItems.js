import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Button } from 'react-native';
import Modal from 'react-native-modal';
// import Items from './items';

export default function ChampsAndItems() {

  const [isChampsActive, setIsChampsActive] = useState(false)
  const [isItemsActive, setIsItemsActive] = useState(false)

  const [modalVisible, setModalVisible] = useState(false);

  const handleChampClick = () => {
    setIsChampsActive(true)
    setIsItemsActive(false)
    setModalVisible(false)
  }

  const handleItemClick = () => {
    setIsChampsActive(false)
    setIsItemsActive(true)
    setModalVisible(true)
  }

  return (
    <View style={styles.browser}>
      <View style={styles.champs}>
        <TouchableOpacity onPress={handleChampClick} style={isChampsActive ? styles.buttonChampsClicked : styles.buttonChamps}>C<br />H<br />A<br />M<br />P<br />S</TouchableOpacity>
      </View>
      <View style={styles.items}>
        <TouchableOpacity onPress={handleItemClick} style={isItemsActive ? styles.buttonItemsClicked : styles.buttonItems}>I<br />T<br />E<br />M<br />S</TouchableOpacity>
      </View>

      <Modal
        isVisible={modalVisible}
        animationIn={'slideInLeft'}
        animationOut={'slideOutLeft'}
        backdropOpacity={0}
        style={{ marginLeft: '7vw' }}
        shouldFocusAfterRender={false}
      >
        <View style={styles.modalView}>
          <View style={styles.itemsModal}>hehe</View>
          <View style={styles.button}><TouchableOpacity style={styles.close} onPress={() => setModalVisible(!modalVisible)}>X</TouchableOpacity></View>
          

        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  browser: {
    display: 'flex',
  },
  champs: {
    width: "6vw",
    height: "50vh",
  },
  items: {
    width: "6vw",
    height: "50vh",
  },
  buttonChamps: {
    width: "100%",
    height: "100%",
    backgroundColor: "#252525",
    color: "white",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 25
  },
  buttonChampsClicked: {
    width: "100%",
    height: "100%",
    backgroundColor: "#252525",
    color: "white",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 25,
    borderWidth: 5,
    borderColor: "white"
  },
  buttonItems: {
    width: "100",
    height: "100%",
    backgroundColor: "#252525",
    color: "white",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 25
  },
  buttonItemsClicked: {
    width: "100",
    height: "100%",
    backgroundColor: "#252525",
    color: "white",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 25,
    borderWidth: 5,
    borderColor: "white"
  },

  modalView: {
    width: '80vw',
    height: '100vh',
    backgroundColor: '#0E2D54',
    borderTopEndRadius: 15,
    borderBottomEndRadius: 15,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  itemsModal: {
    width: '95%',
    height: '95%',
    padding: 5,
  },
  button: {
    width: '5%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5
  },
  close: {
    width: 25,
    height: 25,
    backgroundColor: "red",
    color: "black",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%'
  }
});