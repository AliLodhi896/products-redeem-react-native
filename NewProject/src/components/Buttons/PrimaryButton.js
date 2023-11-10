import React from 'react'
import {Text,TouchableOpacity,ActivityIndicator,StyleSheet} from  'react-native'

// import Constants
import Icon from '../../constants/Icon'
import theme from '../../constants/theme'

const PrimaryButton = (props) => {
  return (
    <TouchableOpacity
        disabled={props.disable}
        style={[styles.button, props.style]}
        onPress={props.onPress}>
      {props.iconButton == true ?
        <Icon
          icon_type={'MaterialCommunityIcons'}
          name={'gallery'}
          size={30}
          color={theme.colors.secondary}
        />
        : props.loader == true ?
        <ActivityIndicator style={{paddingVertical:5}} color={theme.colors.secondary} />
        :
        <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
      }          
    </TouchableOpacity>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    button: {
      borderRadius: 100,
      width: '100%',
      alignSelf: 'center',
      marginBottom: 18,
      paddingVertical: 10,
      backgroundColor: theme.colors.primary,
      shadowColor: '#000',
      shadowOffset: {
        width: 0.5,
        height: 0.5,
      },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 2,
      marginTop:theme.margins.large
    },
    text: {
      fontSize: 18,
      textAlign: 'center',
      paddingVertical: 5,
      letterSpacing: 0.3,
      color: 'white',
    },
  })