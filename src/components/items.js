import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Modal from 'react-native-modal';

export default function Items(props) {

  const items = [{
    name : 'garra do meu dagrao',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  {  name : 'xisde',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  {  name : 'xisde',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  {  name : 'xisde',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  {  name : 'xisde',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  {  name : 'xisde',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  {  name : 'xisde',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  {  name : 'xisde',
    components: ['xabu', 'capa'],
    desc : 'essa eh a garra do dagrao',
    photo : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FXabuSC%2F&psig=AOvVaw0xYbckLntI7dUk3Gf_BaAD&ust=1700851356300000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDdipnj2oIDFQAAAAAdAAAAABAE'
  },
  
]

const renderItems = () => {
    return items.map((i, iterator) => mapper(i))
  }

  const mapper = (item) => {
      return (
        <View style={
          {
            width: 50,
            height: 60,
            backgroundColor: "red",
          }
        }>
          {item.name}
        </View>
      )
  }

  return (  
  <Modal
    isVisible={props.modalItemsVisible}
    animationIn={'slideInLeft'}
    animationOut={'slideOutLeft'}
    backdropOpacity={0}
    style={{ marginLeft: '7vw' }}>
    <View style={styles.modalView}>
      <View style={styles.itemsModal}>
        <View style={styles.xabu}>
          {renderItems()}
        </View>
      </View>
      <View style={styles.button}><TouchableOpacity style={styles.close} onPress={() => props.setmodalIsItemsVisible(!props.modalItemsVisible)}><Text>X</Text></TouchableOpacity></View>
    </View>
  </Modal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    width: '80vw',
    height: '100vh',
    backgroundColor: '#0E2D54',
    borderTopEndRadius: 15,
    borderBottomEndRadius: 15,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  itemsModal: {
    backgroundColor: 'white',
    width: '95%',
    height: '95%',
    display: 'flex',
    flexDirection: 'row',
  },
  xabu: {
    width: '100%',
    maxHeight: 'fit-content',
    gap: 10,
    flexWrap: 'wrap',
    backgroundColor : '#00FF00',
    flexDirection: 'row',
  },
  button: {
    width: '5%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5
  },
  close: {
    width: 25,
    height: 25,
    backgroundColor: "red",
    color: "black",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%'
  },
  item: {
    width: 30,
    height: 30,
    backgroundColor: 'red'
  }
});
