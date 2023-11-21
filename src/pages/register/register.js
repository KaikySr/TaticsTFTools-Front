import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity} from 'react-native';

const imageBack = require('../../../assets/imgs/register/backImage.png')

export default function Register() {
  const navigation = useNavigation()
    return (
      <ImageBackground style={styles.backgroundImage} source={imageBack} resizeMode="cover">
        <View style={styles.leftScreen}>
          <View style={styles.inputs}>
            <TextInput style={styles.inputRegister} placeholderTextColor={"rgba(255, 255, 255, 0.5)"} placeholder={"Username"}/>
            <TextInput style={styles.inputRegister} placeholderTextColor={"rgba(255, 255, 255, 0.5)"} placeholder={"Email"}/>
            <TextInput style={styles.inputRegister} secureTextEntry={true} placeholderTextColor={"rgba(255, 255, 255, 0.5)"} placeholder={"Password"}/>
            <TextInput style={styles.inputRegister} secureTextEntry={true} placeholderTextColor={"rgba(255, 255, 255, 0.5)"} placeholder={"Confirm password"}/>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={() => {navigation.navigate("login")}} style={styles.button}>CREATE</TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("login")}} style={styles.button}>CANCEL</TouchableOpacity>
          </View>
        </View>
        <View style={styles.rightScreen}>
          <Text style={styles.textRegister}>Register</Text>
        </View>
      </ImageBackground>
    );
  }

  const styles = StyleSheet.create({
    backgroundImage: {
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
      backgroundColor: "black",
      alignItems: 'center',
      justifyContent: 'top',
    },
    leftScreen:{
      width: '50%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightScreen:{
      width: '50%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputs: {
      gap: 12
    }, 
    inputRegister:{
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
    buttons: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: 120,
      height: 45,
      marginTop: 50,
      gap: 10
    },  
    button:{
      width: "100%",
      height: '100%',
      backgroundColor: '#252525',
      borderRadius: 45,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: "white",
    },
    textRegister:
    {
      color: 'white',
      fontSize: 59,
      fontFamily: 'Poppins'
    }
  });