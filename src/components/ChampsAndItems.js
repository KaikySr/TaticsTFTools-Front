import { StyleSheet, View, TouchableOpacity} from 'react-native';

export default function ChampsAndItems() {
    return (
      <View>
        <View style={styles.champs}>
          <TouchableOpacity style={styles.button}>CHAMPS</TouchableOpacity>
        </View>
        <View style={styles.items}>
          <TouchableOpacity style={styles.button}>ITEMS</TouchableOpacity>
      </View>
     </View>
    );
  }

  const styles = StyleSheet.create({
    champs:{
      width: 50,
      height: 50,
      backgroundColor: 'black',
    },
    items:{
      width: 50,
      height: 50,
      backgroundColor: 'black',
    },
    button: {
      width: 50,
      height: 50,
      backgroundColor: 'black',
    },
   
  });