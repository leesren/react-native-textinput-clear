# react-native-textinput-clear
Test app for react-native TextInput bugfix.

This is a test app for [the pull request for react-native](https://github.com/facebook/react-native/pull/18278).

react-native 0.54.0 has a bug which textInputRef.setNativeProps({text: ''}) doesn't work.

You can check if the pull request fixes the bug.

## Issue

[\[0.54\] TextInput.setNativeProps({text: ''}) no longer works (#18272)](https://github.com/facebook/react-native/issues/18272)

## Pull Request

[\[WIP\]\[IOS\]\[BUGFIX\]\[TextInput\] Fix #18272 TextInput.setNativeProps({text: ''}) to work (#18278)](https://github.com/facebook/react-native/pull/18278)

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

- Tap `clear` button
    - The TextInput should become empty
- Put some text in the TextInput
- Tap `clear` button
    - The TextInput should become empty
    - **It doesn't become empty with react 0.54.0**

## Result

### react 0.54.0



### with Bugfix



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

