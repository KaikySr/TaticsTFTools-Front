import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Champs from './champs';
import Items from './items';

export default function ChampsAndItems() {

  const [isChampsActive, setIsChampsActive] = useState(false)
  const [isItemsActive, setIsItemsActive] = useState(false)

  const handleChampClick = () => {
    setIsChampsActive(true)
    setIsItemsActive(false)
  }

  const handleItemClick = () => {
    setIsChampsActive(false)
    setIsItemsActive(true)
  }

  return (
    <View style={styles.browser}>
      <View style={styles.champs}>
        <TouchableOpacity onPress={handleChampClick} style={isChampsActive ? styles.buttonChampsClicked : styles.buttonChamps}><Text style={styles.textBrowser}>C<br />H<br />A<br />M<br />P<br/>S</Text></TouchableOpacity>
      </View>
      <View style={styles.items}>
        <TouchableOpacity onPress={handleItemClick} style={isItemsActive ? styles.buttonItemsClicked : styles.buttonItems}><Text style={styles.textBrowser}>I<br />T<br />E<br />M<br/>S</Text></TouchableOpacity>
      </View>

      <Champs modalChampsVisible={isChampsActive} setmodalIsChampsVisible={setIsChampsActive} setItem={setIsItemsActive}/>
      <Items modalItemsVisible={isItemsActive} setmodalIsItemsVisible={setIsItemsActive} setChamps={setIsChampsActive}/>
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
});