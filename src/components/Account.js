import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { AccountCircle } from '@mui/icons-material';


export default function Account() {
  const navigation = useNavigation()
  return (
    <View style={styles.account}>
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("user")}}>
        <AccountCircle style={{width:'35', height:'35', color:'white'}}/>
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
  account: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 5,
  },
});