import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import Modal from 'react-native-modal';

export default function Champs(props) {

  return (
    <Modal
      isVisible={props.modalChampsVisible}
      animationIn={'slideInLeft'}
      animationOut={'slideOutLeft'}
      backdropOpacity={0}
      style={{ marginLeft: '7vw' }}>
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
        <View style={styles.button}><TouchableOpacity style={styles.close} onPress={() => props.setmodalIsChampsVisible(!props.modalChampsVisible)}><Text>X</Text></TouchableOpacity></View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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