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
  Slider,
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
  slider: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
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
  attributedText: {
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    minHeight: 44,
    fontFamily: 'Marker Felt',
    fontSize: 24,
    textAlign: 'right',
    color: 'red',
  },
});

type Props = {};

type State = {
  singlelineValue: string,
  multilineValue: string,
  sliderValue: string,
};

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      singlelineValue: '',
      multilineValue: '',
      sliderValue: '0',
    };
  }

  setSinglelineText = (text: any) => () => {
    this.singlelineInput.setNativeProps({ text });
  }

  setMultilineText = (text: any) => () => {
    this.multilineInput.setNativeProps({ text });
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

  handleChangeSingleline = (text: string) => {
    this.setState({
      singlelineValue: text,
    });
  }

  clearMultiline = () => {
    this.multilineInput.clear();
  }

  handleChangeMultiline = (text: string) => {
    this.setState({
      multilineValue: text,
    });
  }

  handleSliderChange = (value: number) => {
    this.setState({
      sliderValue: Math.floor(value).toString(),
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
            onPress={this.setSinglelineText(this.singlelineDefaultValue)}
            style={styles.button}
            title="reset"
          />
        </View>
        <Text>Set other types</Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.setSinglelineText(123)}
            style={styles.button}
            title="number"
          />
          <Button
            onPress={this.setSinglelineText(null)}
            style={styles.button}
            title="null"
          />
          <Button
            onPress={this.setSinglelineText(undefined)}
            style={styles.button}
            title="undefined"
          />
          <Button
            onPress={this.setSinglelineText(() => {})}
            style={styles.button}
            title="func"
          />
          <Button
            onPress={this.setSinglelineText({ foo: 'bar' })}
            style={styles.button}
            title="object"
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
            onPress={this.setMultilineText(this.multilineDefaultValue)}
            style={styles.button}
            title="reset"
          />
        </View>
        <Text>Set other types</Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.setMultilineText(123)}
            style={styles.button}
            title="number"
          />
          <Button
            onPress={this.setMultilineText(null)}
            style={styles.button}
            title="null"
          />
          <Button
            onPress={this.setMultilineText(undefined)}
            style={styles.button}
            title="undefined"
          />
          <Button
            onPress={this.setMultilineText(() => {})}
            style={styles.button}
            title="func"
          />
          <Button
            onPress={this.setMultilineText({ foo: 'bar' })}
            style={styles.button}
            title="object"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Attribute</Text>
          <Slider
            maximumValue={100}
            minimumValue={0}
            onValueChange={this.handleSliderChange}
            style={styles.slider}
            value={0}
          />
          <TextInput
            editable={false}
            style={styles.attributedText}
            value={this.state.sliderValue}
          />
        </View>
      </SafeAreaView>
    );
  }
}

