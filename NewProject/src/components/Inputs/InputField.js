import React, {forwardRef} from 'react';
import {StyleSheet, View, TextInput, Text, Platform} from 'react-native';
import {useController} from 'react-hook-form';
import style from './style';
import theme from '../../constants/theme';

const Inputfield = forwardRef((props, ref) => {
  const {field} = useController({
    control: props.control,
    defaultValue: props.defaultValue || '',
    name: props.name,
    rules: props.rules,
  });
  return (
    <View style={[{marginVertical: 10, marginHorizontal: 10}, props.style]}>
      {props.lableVisible == false ? null : (
        <Text style={[styles.lable, props.lableStyle]}>{props.lable}</Text>
      )}
      <TextInput
        value={field.value}
        ref={ref}
        underlineColorAndroid="transparent"
        multiline={props.multiline}
        style={[props.styles, style.inputfield]}
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
    color: Colors.primaryText,
    marginVertical: 5,
  },
  inputfield: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 20,
    width: '100%',
    fontSize: 14,
    color: theme.colors.secondaryText,
    letterSpacing: -0.575,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS == 'ios' ? 15 : 7,
  },
});
export default Inputfield;
