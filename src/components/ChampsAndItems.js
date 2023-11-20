import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

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
          <TouchableOpacity onPress={handleChampClick} style={isChampsActive?styles.buttonChampsClicked:styles.buttonChamps}>C<br/>H<br/>A<br/>M<br/>P<br/>S</TouchableOpacity>
        </View>
        <View style={styles.items}>
          <TouchableOpacity onPress={handleItemClick} style={isItemsActive?styles.buttonItemsClicked:styles.buttonItems}>I<br/>T<br/>E<br/>M<br/>S</TouchableOpacity>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    champs:{
      width: "13vh",
      height: "50vh",
    },
    items:{
      width: "13vh",
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
    }
  });