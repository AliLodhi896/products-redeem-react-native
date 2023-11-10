import React from 'react'
import {Text,TouchableOpacity,ActivityIndicator,StyleSheet} from  'react-native'

// import Constants
import Icon from '../../constants/Icon'
import theme from '../../constants/theme'

const SecondaryHeader = (props) => {
  return (
    <TouchableOpacity
        disabled={props.disable}
        style={[styles.container, props.style]}
        onPress={props.onPress}>
        <Icon
          icon_type={'Ionicons'}
          name={'arrow-back-outline'}
          size={20}
          color={theme.colors.primaryText}

        />
    </TouchableOpacity>
  )
}

export default SecondaryHeader

const styles = StyleSheet.create({
    container:{
        backgroundColor:theme.colors.backgroundSecondary,
        height:30,
        width:30,
        shadowColor: '#000',
        shadowOffset: {
          width: 0.5,
          height: 0.5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 2,
        marginHorizontal:20,
        marginTop:40,
        borderRadius:10,
        alignItems:'center',
        justifyContent: 'center',
    }
  })