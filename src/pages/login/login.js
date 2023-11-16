import { StyleSheet, View, Image, Text, ImageBackground} from 'react-native';
const Logo = require('../../../assets/logo.png')
const imageBack = require('../../../assets/backImageLogin.png')

export default function Login() {
    return (
      <ImageBackground style={styles.backgroundImage} source={imageBack} resizeMode="cover">
        <View style={styles.logo}>
          <Image source={Logo} style={styles.img} /> 
        </View>
        <View style={styles.inputs}>
          <Text>oi</Text>
        </View>
        <View style={styles.start}>
          <Text>teste</Text>
        </View>
        <View style={styles.create}>

        </View>
      </ImageBackground>
    );
  }

  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'top',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 400,
      height: 231
    }, 
    img: {
      width: 306,
      height: 231
    },
    inputs: {
     
    }, 
    start: {
      
    }, 
    create: {
    
    }, 
  });