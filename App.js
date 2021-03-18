import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class RedButton extends Component {
   displayAlert = () => {

alert('ARE YOU SURE??');
      
    }
  render(){
    return(
      <Button color="magenta" title="Track-1" onPress= {this.displayAlert}/>
    )
  }
}
 class AnycolourButton extends Component {
   displayAlert = () => {

alert('YOU ARE ENTERING INTO DANGER ');
      
    }
  render(){
    return(
      <Button color={this.props.mycolour} title="Track-2" onPress= {this.displayAlert}/>
    )
  }
}
class BlueButton extends Component {
   displayAlert = () => {

alert('You have clicked track-3 are you sure?');
      
    }
  render(){
    return(
      <Button color={this.props.mycolour} title="Track-3" onPress= {this.displayAlert}/>
    )
  }
}



export default class App extends Component {
  render() {
   
    return (
      <View style={{marginTop: 100}}>
        <RedButton />
        <AnycolourButton mycolour="maroon"/>
        <BlueButton />
      
        <Text>My First React Component</Text>
      </View>
    );
  }
}
