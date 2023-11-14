import React, {useContext} from 'react';
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  View,
  Image,
} from 'react-native';

// import Constants
import theme from '../../constants/theme';
import Icon from '../../constants/Icon';
import {AuthContext} from '../../context/AuthContext';

const PrimaryHeader = props => {
  const {userDetails} = useContext(AuthContext);

  return (
    <View
      style={{
        alignItems: 'center',
        width: '100%',
        padding: 20,
        flexDirection: 'row',
        paddingVertical: 40,
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          disabled={props.disable}
          style={[styles.container, props.style]}
          onPress={props.onPress}>
          <Image
            source={require('../../assets/images/user.png')}
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={{marginLeft: 10}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: theme.colors.primaryText,
            }}>
            {userDetails?.Name}
          </Text>
          <Text style={{fontSize: 10, color: theme.colors.primaryText}}>
            {userDetails?.Email}
          </Text>
        </View>
      </View>
      <Icon
        icon_type={'FontAwesome'}
        name={'cog'}
        size={20}
        color={theme.colors.primaryText}
      />
    </View>
  );
};

export default PrimaryHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundSecondary,
    height: 60,
    width: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
