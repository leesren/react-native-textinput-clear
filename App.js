/**
 * Test App for TextInput bugfix
 *
 * Issue: #18272
 * PR: #18278
 * @flow
 */

import React, { Component } from 'react';
import {
  Button,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 5,
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
  button: {
    minHeight: 44,
  },
  textContainer: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  textInput: {
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    minHeight: 44,
  },
});

type Props = {};

type State = {
  singlelineValue: string,
  multilineValue: string,
};

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      singlelineValue: '',
      multilineValue: '',
    };
  }

  singlelineInput: TextInput;
  singlelineDefaultValue: string = 'Romeo, Romeo! wherefore art thou Romeo?';
  multilineInput: TextInput;
  multilineDefaultValue: string = 'What\'s in a name? '
    + 'that which we call a rose. '
    + 'By any other name would smell as sweet.';

  clearSingleline = () => {
    this.singlelineInput.clear();
  }

  resetSingleline = () => {
    this.singlelineInput.setNativeProps({
      text: this.singlelineDefaultValue,
    });
  }

  handleChangeSingleline = (text: string) => {
    this.setState({
      singlelineValue: text,
    });
  }

  clearMultiline = () => {
    this.multilineInput.clear();
  }

  resetMultiline = () => {
    this.multilineInput.setNativeProps({
      text: this.multilineDefaultValue,
    });
  }

  handleChangeMultiline = (text: string) => {
    this.setState({
      multilineValue: text,
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Singleline</Text>
          <Text>onChangeText: {this.state.singlelineValue}</Text>
          <TextInput
            defaultValue={this.singlelineDefaultValue}
            onChangeText={this.handleChangeSingleline}
            onSubmitEditing={Keyboard.dismiss}
            ref={(input) => {
              this.singlelineInput = input;
            }}
            style={styles.textInput}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.clearSingleline}
            style={styles.button}
            title="clear"
          />
          <Button
            onPress={this.resetSingleline}
            style={styles.button}
            title="reset"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Multiline</Text>
          <Text>onChangeText: {this.state.multilineValue}</Text>
          <TextInput
            defaultValue={this.multilineDefaultValue}
            multiline
            onChangeText={this.handleChangeMultiline}
            onSubmitEditing={Keyboard.dismiss}
            ref={(input) => {
              this.multilineInput = input;
            }}
            returnKeyType="done"
            style={styles.textInput}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.clearMultiline}
            style={styles.button}
            title="clear"
          />
          <Button
            onPress={this.resetMultiline}
            style={styles.button}
            title="reset"
          />
        </View>
      </SafeAreaView>
    );
  }
}

