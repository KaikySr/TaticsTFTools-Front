import { StyleSheet, View, Text, Image } from 'react-native';

// const Noxus = require('../../../assets/imgs/emblems/Noxus.png')

export default function Compositions() {

  const composition = [
  {
    name : 'Punk',
    image : "",
    currentQnt: 1,
    trait1 : 2,
    trait2 : 4,
    trait3 : 6,
    trait4 : null
  },
  {
    name : 'True Damage',
    image : "",
    currentQnt: 1,
    trait1 : 2,
    trait2 : 4,
    trait3 : 6,
    trait4 : 9
  },
  {
    name : 'Rapidfire',
    image : "",
    currentQnt: 1,
    trait1 : 2,
    trait2 : 4,
    trait3 : 6,
    trait4 : null
  },
  {
    name : 'Edgelord',
    image : "",
    currentQnt: 1,
    trait1 : 3,
    trait2 : 5,
    trait3 : 7,
    trait4 : null
  },
  ]

  const renderCompositions = (list) => {
    return list.map((i) => mapper(i))
  }

  const mapper = (compositions) => {
      return (
        <View style={
          {
            display: 'flex',
            flexDirection: 'row',
            gap: 6
          }}>
            {/* <Image source={composition.image} style={styles.emblem}/>  */}
            <Text style={styles.infos}>{compositions.currentQnt}/{compositions.trait1}</Text>
            <Text style={styles.infos}>{compositions.name}</Text>
        </View>
      )
  }

  return (
      <View>
        <View style={styles.compositions}>
          <View style={styles.comp}>
            {renderCompositions(composition)}
          </View>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    compositions:{
      backgroundColor: '#0E2D54',
      width: "20vw",
      height: "100vh",
      display: "flex",
      alignItems: 'center',
      padding: 15,
      gap: 10
    },
    comp:{
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      gap: 6
    },
    infos:{
      color: '#fff'
    }
  });