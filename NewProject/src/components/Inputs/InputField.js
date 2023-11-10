import React, {forwardRef} from 'react';
import {StyleSheet, View, TextInput, Text, Platform} from 'react-native';
import {useController} from 'react-hook-form';
import theme from '../../constants/theme';

const Inputfield = forwardRef((props, ref) => {
  const {field} = useController({
    control: props.control,
    defaultValue: props.defaultValue || '',
    name: props.name,
    rules: props.rules,
  });
  return (
    <View style={[{marginVertical: 10, }, props.style]}>
      {props.lableVisible == false ? null : (
        <Text style={[styles.lable, props.lableStyle]}>{props.lable}</Text>
      )}
      <TextInput
        value={field.value}
        ref={ref}
        underlineColorAndroid="transparent"
        multiline={props.multiline}
        style={[props.styles, styles.inputfield]}
        placeholder={props.placeholder}
        onChangeText={field.onChange}
        placeholderTextColor={theme.colors.secondaryText}
        onSubmitEditing={props.onSubmitEditing}
        secureTextEntry={props.secureTextEntry}
        maxLength={props.maxLength}
        keyboardType={props.keyboardType}
        numberOfLines={props.numberOfLines}
        autoComplete={props.autoComplete}
        editable={props.editable}
        textAlignVertical={props.textAlignVertical}
      />
    </View>
  );
});
const styles = StyleSheet.create({
  lable: {
    fontSize: 12,
    color: theme.colors.primaryText,
    marginVertical: 5,
  },
  inputfield: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 40,
    width: '100%',
    fontSize: 14,
    color: theme.colors.primaryText,
    letterSpacing: -0.575,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS == 'ios' ? 15 : 12,
    borderWidth:2,
    borderColor:theme.colors.lightdisbaled
  },
});
export default Inputfield;
