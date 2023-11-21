import { View, StyleSheet, Text } from 'react-native';

export default function Positions() {
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          rowGap: 30,
          flexDirection: 'column',
            marginTop: '10vh'
        }}
      >
        <View style={styles.row1}>
            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}/>
                <View style={styles.hexagonAfter} />
            </View>

            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>

            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>

            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>

            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>

            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>

            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>
        </View>
        
        <View style={styles.row2}>
            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>

            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>

            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>

            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>

            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>

            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>

            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>
        </View>
        
        <View style={styles.row1}>
            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>

            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>

            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>

            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>

            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>

            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>

            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>
        </View>
        
        <View style={styles.row2}>
            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>

            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>

            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>

            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>

            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>

            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>

            <View style={styles.hexagon}>
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonInner}></View>
                <View style={styles.hexagonAfter} />
            </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    row1: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'flex-start',
        marginLeft: '-5.5vw'
    },

    row2: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'flex-start',
        marginLeft: '4vw'
    },


    hexagon: {
        width: 70,
        height: 35,
    },
    hexagonBefore: {
        borderStyle: 'solid',
        borderLeftWidth: 35,
        borderLeftColor: 'transparent',
        borderRightWidth: 35,
        borderRightColor: 'transparent',
        borderBottomWidth: 25,
        borderBottomColor: '#252525',
    },
    hexagonInner: {
        width: 70,
        height: 30,
        backgroundColor: '#252525',
        justifyContent: 'center',
        alignItems: 'center',
    },
    hexagonAfter: {
        borderStyle: 'solid',
        borderLeftWidth: 35,
        borderLeftColor: 'transparent',
        borderRightWidth: 35,
        borderRightColor: 'transparent',
        borderTopWidth: 25,
        borderTopColor: '#252525',
    },
});