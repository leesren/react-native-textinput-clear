# react-native-textinput-clear
Test app for react-native TextInput bugfix.

This is a test app for [the pull request for react-native](https://github.com/facebook/react-native/pull/18278).

react-native 0.54.0 has a bug which textInputRef.setNativeProps({text: ''}) doesn't work.

You can check if the pull request fixes the bug.

## Issues

[\[0.54\] TextInput.setNativeProps({text: ''}) no longer works (#18272)](https://github.com/facebook/react-native/issues/18272)

[TextInput value not binding on IOS (#18389)](https://github.com/facebook/react-native/issues/18389)

## Pull Request

[\[iOS\]\[TextInput\] Fix #18272 TextInput.setNativeProps({text: ''}) to work (#18278)](https://github.com/facebook/react-native/pull/18278)

## Build and Run

### Build with Bugfix

```
git clone https://github.com/magicien/react-native-textinput-clear.git
cd react-native-textinput-clear
yarn install
react-native run-ios
```

If `react-native run-ios` command ends up with error, compile with Xcode.

### Build with react 0.54.0 (which has the bug)

```
git clone -b test/react-0.54.0 https://github.com/magicien/react-native-textinput-clear.git
cd react-native-textinput-clear
yarn install
react-native run-ios
```

If `react-native run-ios` command ends up with error, compile with Xcode.

## Test

### clear()

1. Tap `clear` button
    - The TextInput should become empty
2. Put some text in the TextInput
3. Tap `clear` button
    - The TextInput should become empty
    - **It doesn't become empty with react 0.54.0**

### setNativeProps({text: '****'})

1. Tap `clear` button
    - The TextInput should become empty
2. Tap `reset` button
    - The TextInput should change
3. Change the text in the TextInput by keyboard
4. Tap `reset` button
    - The TextInput should change
    - **It doesn't change with react 0.54.0**

### `value` prop

1. Try to edit the TextInput at "Singleline with value"

The text should not be changed

### attributed text (Thank you @reyalpsirc!)

1. Move the slider at "Attribute"

It should keep the font style (font family, size, color, text align)

## Result

### react 0.54.0

- `clear()` doen't work from the second time
- `setNativeProps({text '***'})` doesn't work from the second time

![ScreenShot_0.54.0](https://raw.githubusercontent.com/magicien/react-native-textinput-clear/master/screenshot/0.54.0_test.gif)

### with Bugfix

- `clear()` works every time
- `setNativeProps({text '****'})` works every time

### Singleline

![ScreenShot_Clear_1](https://raw.githubusercontent.com/magicien/react-native-textinput-clear/master/screenshot/clear_test_1.gif)

### Multiline

![ScreenShot_Clear_2](https://raw.githubusercontent.com/magicien/react-native-textinput-clear/master/screenshot/clear_test_2.gif)

### Attributed text test with Bugfix

![ScreenShot_Slider](https://raw.githubusercontent.com/magicien/react-native-textinput-clear/master/screenshot/attributed_text_test.gif)

### value prop with Bugfix

![ScreenShot_Value](https://raw.githubusercontent.com/magicien/react-native-textinput-clear/master/screenshot/value_test.gif)

## Other behaviors

### onChange / onChangeText callback

onChange / onChangeText won't be called when `setNativeProps({text: ''})` is called.

This is the same as react 0.53.0.

### set non-string values

When non-string values are given to `setNativeProps({text: ___})`, its behavior is the same as react 0.53.0.

Value Type | Result
---------- | ------------
null       | same as empty string ''
undefined  | nothing changes
number     | throw error
function   | throw error
object     | throw error

