import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import Modal from 'react-native-modal';


export default function ChampsAndItems() {

  const [isChampsActive, setIsChampsActive] = useState(false)
  const [isItemsActive, setIsItemsActive] = useState(false)

  const [modalChampsVisible, setmodalChampsVisible] = useState(false);
  const [modalItemsVisible, setmodalItemsVisible] = useState(false);

  const handleChampClick = () => {
    setIsChampsActive(true)
    setIsItemsActive(false)
    setmodalItemsVisible(false)
    setmodalChampsVisible(true)
  }

  const handleItemClick = () => {
    setIsChampsActive(false)
    setIsItemsActive(true)
    setmodalItemsVisible(true)
    setmodalChampsVisible(false)
  }

  return (
    <View style={styles.browser}>
      <View style={styles.champs}>
        <TouchableOpacity onPress={handleChampClick} style={isChampsActive ? styles.buttonChampsClicked : styles.buttonChamps}><Text style={styles.textBrowser}>C<br />H<br />A<br />M<br />P<br/>S</Text></TouchableOpacity>
      </View>
      <View style={styles.items}>
        <TouchableOpacity onPress={handleItemClick} style={isItemsActive ? styles.buttonItemsClicked : styles.buttonItems}><Text style={styles.textBrowser}>I<br />T<br />E<br />M<br/>S</Text></TouchableOpacity>
      </View>

      <Modal
        isVisible={modalChampsVisible}
        animationIn={'slideInLeft'}
        animationOut={'slideOutLeft'}
        backdropOpacity={0}
        style={{ marginLeft: '7vw' }}
        shouldFocusAfterRender={false}>
        <View style={styles.modalView}>
          <ScrollView horizontal style={styles.champsModal}> 
            <View style={styles.raridadeComum}>
              
            </View>
            <View style={styles.raridadeRara}>
              
            </View>
            <View style={styles.raridadeMuitoRara}>
              
            </View>
            <View style={styles.raridadeEpica}>
              
            </View>
            <View style={styles.raridadeLendaria}>
             
            </View>
          </ScrollView>
          <View style={styles.button}><TouchableOpacity style={styles.close} onPress={() => setmodalChampsVisible(!modalChampsVisible)}><Text>X</Text></TouchableOpacity></View>
        </View>
      </Modal>

      <Modal
        isVisible={modalItemsVisible}
        animationIn={'slideInLeft'}
        animationOut={'slideOutLeft'}
        backdropOpacity={0}
        style={{ marginLeft: '7vw' }}
        shouldFocusAfterRender={false}>
        <View style={styles.modalView}>
          <View style={styles.itemsModal}></View>
          <View style={styles.button}><TouchableOpacity style={styles.close} onPress={() => setmodalItemsVisible(!modalItemsVisible)}><Text>X</Text></TouchableOpacity></View>
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
  textBrowser: {
    color: "white",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20
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
    fontSize: 20
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
    fontSize: 20,
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
    fontSize: 20
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
    fontSize: 20,
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
  champsModal: {
    width: '95%',
    height: '95%',
    display: 'flex',
    flexDirection: 'row'
  },
  itemsModal: {
    backgroundColor: 'white',
    width: '95%',
    height: '95%',
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
  },
  raridadeComum: {
    width: '38vw',
    height: '100%',
    backgroundColor: '#BCBCBC',
    borderRadius: 15
  },
  raridadeRara: {
    width: '38vw',
    height: '100%',
    backgroundColor: '#77DD77',
    borderRadius: 15
  },
  raridadeMuitoRara: {
    width: '38vw',
    height: '100%',
    backgroundColor: '#84B6F4',
    borderRadius: 15
  },
  raridadeEpica: {
    width: '38vw',
    height: '100%',
    backgroundColor: '#711BFC',
    borderRadius: 15
  },
  raridadeLendaria: {
    width: '38vw',
    height: '100%',
    backgroundColor: '#EFB810',
    borderRadius: 15
},
});