import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Positions from './positions';

export default function Arena() {

  return (
      <View>
        <View style={styles.arena}>
          <View style={styles.positions}>
            <Positions/>
          </View>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    arena:{
        backgroundColor: 'rgba(14, 45, 84, 0.90)',
        width: "74vw",
        height: "100vh",
        paddingTop: 10,
        paddingBottom: 10,
       
    },
    positions:{
     display: "flex",
     flexDirection: 'row',
     alignItems: 'flex-start'
    }
  });