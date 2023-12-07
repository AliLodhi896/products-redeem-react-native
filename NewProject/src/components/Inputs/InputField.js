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
    <>
      {props.phone_number == false ? (
        <View style={[{marginVertical: 10,backgroundColor:'red',flexDirection:"row",borderRadius:40}, props.style]}>
          {props.lableVisible == false ? null : (
            <Text style={[styles.lable, props.lableStyle]}>{props.lable}</Text>
          )}
          <View style={styles.iconBox}>
            <Text style={{fontSize:16,color:theme.colors.primaryText,fontWeight:"bold"}}>+91</Text>
             
            </View>
          <TextInput
            value={field.value}
            ref={ref}
            underlineColorAndroid="transparent"
            multiline={props.multiline}
            style={[props.styles, styles.inputfield2]}
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
      ) : (
        <View style={[{marginVertical: 10}, props.style]}>
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
      )}
    </>
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
    width: '90%',
    fontSize: 14,
    color: theme.colors.primaryText,
    letterSpacing: -0.575,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS == 'ios' ? 15 : 12,
    borderWidth: 2,
    borderColor: theme.colors.lightdisbaled,
  },
  inputfield2: {
    backgroundColor: theme.colors.secondary,
    width: '85%',
    fontSize: 14,
    color: theme.colors.primaryText,
    letterSpacing: -0.575,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS == 'ios' ? 15 : 12,
    borderWidth: 2,
    borderColor: theme.colors.lightdisbaled,
    borderTopRightRadius:40,
    borderBottomRightRadius:40
  },
  iconBox: {
    backgroundColor: theme.colors.lightdisbaled,
    width: '15%',
    fontSize: 14,
    color: theme.colors.primaryText,
    letterSpacing: -0.575,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS == 'ios' ? 15 : 12,
    borderTopLeftRadius:40,
    borderBottomLeftRadius:40,
    alignItems:'center',
    borderRightWidth:1,
    borderColor:theme.colors.disbaled
  },
});
export default Inputfield;
