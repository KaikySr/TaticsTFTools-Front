import { StyleSheet, View} from 'react-native';

export default function Login() {
    return (
      <View style={styles.backgroundImage}>
        <View style={styles.logo}>

        </View>
        <View style={styles.inputs}>

        </View>
        <View style={styles.start}>

        </View>
        <View style={styles.create}>

        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });