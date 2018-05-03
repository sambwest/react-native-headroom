import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    AppRegistry,
} from 'react-native'

import Headroom from 'react-native-headroom'

export default class HeadroomExample extends Component {
  render() {
    const header = (
      <View style={[styles.container, styles.header]}>
        <Text>Header content</Text>
      </View>
    )

    return (
      <View style={[styles.container]}>
        <Headroom
          style={[styles.container]}
          headerComponent={ header }
          headerHeight={ 80 }
          scrollEventThrottle={ 80 }
        >
          <ScrollView>
            <View style={[styles.container, styles.content]}>
              <Text style={[styles.loremIpsum]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
              </Text>
            </View>
          </ScrollView>
        </Headroom>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loremIpsum: {
    fontSize: 24,
  },
})

AppRegistry.registerComponent('HeadroomExample', () => HeadroomExample)
