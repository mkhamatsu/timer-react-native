import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TimerButton from "./src/components/TimerButton";
import TimerDisplay from "./src/components/TimerDisplay";
import TimerImage from "./src/components/TimerImage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      button: 'GO',
    }

    this.timer = null
    this.go = this.go.bind(this);
    this.clear = this.clear.bind(this);

  }

  go() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ button: 'GO' })
    } else {
      this.timer = setInterval(() => {
        this.setState({ number: this.state.number + 0.1 })
      }, 100);
      this.setState({ button: 'STOP' })
    }
  }

  clear() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({ number: 0, button: 'GO' })
  }

  render() {
    return (
      <View style={styles.sectionContainer}>
        <TimerImage />
        <TimerDisplay number={this.state.number.toFixed(1)} />
        <View style={styles.buttonArea}>
          <TimerButton button={'GO'} function={this.go}></TimerButton>
          <TimerButton button={'CLEAR'} function={this.clear}></TimerButton>
        </View>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
  buttonArea: {
    flexDirection: 'row',
    marginTop: 90,
    height: 40
  }
});

export default App;
