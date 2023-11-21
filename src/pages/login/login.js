import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Image, Text, ImageBackground, TextInput, TouchableOpacity} from 'react-native';

const Logo = require('../../../assets/imgs/login/logo.png')
const imageBack = require('../../../assets/imgs/login/backImage.png')

export default function Login() {
  const navigation = useNavigation()
    return (
      <ImageBackground style={styles.backgroundImage} source={imageBack} resizeMode="cover">
        <View style={styles.logo}>
          <Image source={Logo} style={styles.img} /> 
        </View>
        <View style={styles.inputs}>
          <TextInput style={styles.inputLogin} placeholderTextColor={"rgba(255, 255, 255, 0.5)"} placeholder={"Username"}/>
          <TextInput style={styles.inputLogin} secureTextEntry={true} placeholderTextColor={"rgba(255, 255, 255, 0.5)"} placeholder={"Password"}/>
        </View>
        <View style={styles.start}>
          <TouchableOpacity onPress={() => {navigation.navigate("main")}} style={styles.buttonStart}>START</TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => {navigation.navigate("register")}} style={styles.buttonCreate}><Text style={{marginLeft: -10, paddingTop: 15, fontSize: 13, textAlign: "center"}}>Create Account</Text></TouchableOpacity>
      </ImageBackground>
    );
  }

  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      backgroundColor: "black",
      alignItems: 'center',
      justifyContent: 'top',
    },
    logo: {
      display: 'flex',
      alignItems: 'left',
      justifyContent: 'end',
      width: 328,
      height: 245
    }, 
    img: {
      width: 306,
      height: 231
    },
    inputs: {
      gap: 12
    }, 
    inputLogin:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#252525",
      width: 256,
      height: 34,
      padding: 10,
      borderRadius: 12,
      shadowColor: 'white',
      shadowOffset: { width: 3, height: 3 },
      shadowOpacity:  0.8,
      shadowRadius: 5,
      color: 'white'
    },
    start: {
      width: 120,
      height: 45,
      marginTop: 10
    },  
    buttonStart:{
      width: "100%",
      height: '100%',
      backgroundColor: '#252525',
      borderRadius: 45,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: "white",
    },
    buttonCreate:{
      position: 'absolute',
      right: -15,
      bottom: -15,
      width: 75,
      height: 75,
      backgroundColor: 'white',
      borderRadius: '50%' 
    }
  });