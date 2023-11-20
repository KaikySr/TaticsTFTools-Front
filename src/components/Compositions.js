import { StyleSheet, View, Text, Image } from 'react-native';

// const Noxus = require('../../../assets/imgs/emblems/Noxus.png')

export default function Compositions() {

  return (
      <View>
        <View style={styles.compositions}>
          <View style={styles.comp}>
            {/* <Image source={Noxus} style={styles.emblem}/> */}
            <Text style={styles.infos}>1/3</Text>
            <Text style={styles.infos}>Noxus</Text>
          </View>

          <View style={styles.comp}>
            {/* <Image source={Noxus} style={styles.emblem}/> */}
            <Text style={styles.infos}>1/3</Text>
            <Text style={styles.infos}>Demacia</Text>
          </View>

          <View style={styles.comp}>
            {/* <Image source={Noxus} style={styles.emblem}/> */}
            <Text style={styles.infos}>1/2</Text>
            <Text style={styles.infos}>Shurima</Text>
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
      flexDirection: 'row',
      gap: 6
    },
    infos:{
      color: '#fff'
    }
  });