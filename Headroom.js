import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import {
    Animated,
    StyleSheet,
    ScrollView,
    Dimensions,
    View,
} from 'react-native'

export default class Headroom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: new Animated.Value(this.props.headerHeight), // The header height
      visible: true, // Is the header currently visible
    }
    // How long does the slide animation take
    this.slideDuration = this.props.slideDuration || 400
  }

  _onScroll(event) {
    const currentOffset = event.nativeEvent.contentOffset.y

    // Ignore scroll events outside the scrollview
    if (currentOffset < 0 || currentOffset > (event.nativeEvent.contentSize.height - event.nativeEvent.layoutMeasurement.height)) {
      return
    }

    if ((this.state.visible && currentOffset > this.offset) ||
        (!this.state.visible && currentOffset < this.offset)) {
      this._toggleHeader()
    }

    this.offset = currentOffset
  }

  _toggleHeader() {
    Animated.timing(this.state.height, {
      duration: this.slideDuration,
      toValue: this.state.visible ? 0 : this.props.headerHeight,
    }).start()
    this.setState({visible: !this.state.visible})
  }

  render() {

    return (
      <View style={styles.container}>
         <Animated.View style={{ height: this.state.height }}>
           {this.props.headerComponent}
         </Animated.View>
        {React.cloneElement(this.props.children, {onScroll: this._onScroll.bind(this)})}
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
