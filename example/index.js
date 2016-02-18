/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  // Image,
} from 'react-native';

import Image from 'react-native-image-zoom'

class example extends Component {
  constructor(a,b){
    super(a,b)
    this.state = {
      text:'http://placehold.it/100'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput onChangeText={(text) => this.setState({text:text})} value={this.state.text}></TextInput>
        <Image style={styles.image} src={this.state.text}></Image>
      </View>
    );
  }
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image:{
    width: width,
    flex:1,
  }
});

AppRegistry.registerComponent('example', () => example);