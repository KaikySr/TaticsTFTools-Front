import { StyleSheet, View} from 'react-native';

export default function Main() {
    return (
      <View style={styles.screen}>
        <View style={styles.buttons}>

        </View>
        <View style={styles.comps}>

        </View>
        <View style={styles.arena}>

        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });