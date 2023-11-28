import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Modal from 'react-native-modal';

export default function Champs(props) {

  const common = [
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  ]

  const rare = [
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  ]

  const superRare = [
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  ]

  const epic = [
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  ]

  const legendary = [
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  {
    name : 'Yasuo',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0, 
    synergies : ["Edgelord", "True Damage"]
  },
  {  
    name : 'Jinx',
    life: 1200,
    attackDamage : 50,
    skillDamage : 20,
    attackSpeed : 1.25,
    armor : 20,
    magicResistance : 20,
    manaLimit : 50,
    currentMana : 0,
    synergies : ["Punk", "Rapidfire"]
  },
  ]

  const renderChamps = (list) => {
    return list.map((i) => mapper(i))
  }

  const mapper = (champ) => {
      return (
        <View style={
          {
            width: 65,
            height: 65,
            backgroundColor: 'red',
            borderRadius: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text>{champ.name}</Text>
        </View>
      )
  }

  const handleBackdrop = (event) => {
    props.setmodalIsChampsVisible(false)
    const x = event.clientX
    const y = event.clientY
    
    if (x < 60 && y > 200)
      props.setItem(true)
  }

  return (
    <Modal
      isVisible={props.modalChampsVisible}
      animationIn={'slideInLeft'}
      animationOut={'slideOutLeft'}
      backdropOpacity={0}
      onBackdropPress = {handleBackdrop}
      style={{ marginLeft: '6vw' }}>
      
      <View style={styles.modalView}>
        <ScrollView horizontal style={styles.champsModal}> 
          <View style={styles.commomRarity}>
            <View style={styles.champs}>
              {renderChamps(common)}
            </View>
          </View>
          <View style={styles.rareRarity}>
            <View style={styles.champs}>
              {renderChamps(rare)}          
            </View>
          </View>
          <View style={styles.superRareRarity}>
            <View style={styles.champs}>          
              {renderChamps(superRare)}
            </View>
          </View>
          <View style={styles.epicRarity}>
            <View style={styles.champs}>
              {renderChamps(epic)}
            </View>
          </View>
          <View style={styles.legendaryRarity}>
            <View style={styles.champs}>
              {renderChamps(legendary)}
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    width: '80vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
  },
  champsModal: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row' 
  },
  commomRarity: {
    width: '38vw',
    height: '100%',
    backgroundColor: '#BCBCBC',
    padding: 10,
  },
  rareRarity: {
    width: '38vw',
    height: '100%',
    backgroundColor: '#77DD77',
    padding: 10
  },
  superRareRarity: {
    width: '38vw',
    height: '100%',
    backgroundColor: '#84B6F4',
    padding: 10
  },
  epicRarity: {
    width: '38vw',
    height: '100%',
    backgroundColor: '#711BFC',
    padding: 10
  },
  legendaryRarity: {
    width: '38vw',
    height: '100%',
    backgroundColor: '#EFB810',
    padding: 10
  },
  champs: {
    width: "100%",
    height: "fit-content",
    gap: 10,
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap:"wrap",
    flexDirection: 'row',
  }
});