import { StyleSheet, View} from 'react-native';
import Browser from '../../components/Browser';
import Compositions from '../../components/Compositions';
import Arena from '../../components/Arena';

export default function Main() {
    return (
      <View style={styles.screen}>
        <View>
          <Browser/>
        </View>
        <View>
          <Compositions/>
        </View>
        <View>
          <Arena/>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    screen: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'red'
    }
  });

