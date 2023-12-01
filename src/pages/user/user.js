import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Logout } from '@mui/icons-material';
import { BorderColor } from '@mui/icons-material';
import { KeyboardBackspace } from '@mui/icons-material';


export default function User() {
  const navigation = useNavigation()
  return (
    <View style={styles.screen}>
      
      <TouchableOpacity 
        onPress={() => {navigation.navigate("main")}} 
        style={{
          width:'50', 
          height:'50', 
          position:'absolute',
          left: 0,
          top: 0,
          paddingLeft: 5
        }}> 
        <KeyboardBackspace 
          style={
            {
              width:'50', 
              height:'50', 
              color:'white',
            }}
        />
      </TouchableOpacity>
    
      <View style={styles.infos}>
        <View style={styles.username}>
          <Text style={styles.textUsername}>Capvarinha Gorda</Text>
          <BorderColor style={styles.svgs}/>
        </View>
        <View style={styles.email}>
          <Text style={styles.text}>Email:</Text>
          <View style={styles.textandsvg}>
            <Text style={styles.text}>kaikysr2004@gmail.com</Text>
            <BorderColor style={styles.svgs}/>
          </View>
        </View>
        <View style={styles.password}>
          <Text style={styles.textPassword}>Change password</Text>
        </View>
        <TouchableOpacity 
          onPress={() => {navigation.navigate("login")}}
          style={{
            width: 45,
            height: 45,
            position: 'absolute',
            right: 0,
            bottom: 0,
        
          }}>
            <Logout 
              style={{
                color: 'white',
                width: 45,
                height: 45,
              }}
            />
        </TouchableOpacity>
      </View>
    </View>
  );
}

  const styles = StyleSheet.create({
    screen: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(14, 45, 84, 0.90)',
    },
    infos: {
      width: 500,
      height: 350,
      backgroundColor: '#252525',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      padding: 15,
      borderWidth: 1,
      borderColor: "white",
    },
    svgs: {
      width:'28', 
      height:'28', 
      color:'white'
    },
    username: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5
    },
    textUsername: {
      color: 'white',
      fontSize: 35
    },
    textPassword: {
      color: 'white',
      fontSize: 26,
      textDecorationLine: 'underline'
    },
    text: {
      color: 'white',
      fontSize: 26,
    },
    email: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: 5
    },
    textandsvg: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5
    },
  });

