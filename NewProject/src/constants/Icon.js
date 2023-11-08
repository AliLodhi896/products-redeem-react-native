import React from 'react';
import {View} from 'react-native';

// icons

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import RNIMigration from 'react-native-vector-icons/RNIMigration';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

const Icon = props => {
  const iconConverter = () => {
    switch (props.icon_type) {
      case 'Entypo':
        return Entypo;
      case 'AntDesign':
        return AntDesign;
      case 'EvilIcons':
        return EvilIcons;
      case 'Feather':
        return Feather;
      case 'Zocial':
        return Zocial;
      case 'SimpleLineIcons':
        return SimpleLineIcons;
      case 'Octicons':
        return Octicons;
      case 'RNIMigration':
        return RNIMigration;
      case 'MaterialIcons':
        return MaterialIcons;
      case 'MaterialCommunityIcons':
        return MaterialCommunityIcons;
      case 'Ionicons':
        return Ionicons;
      case 'Foundation':
        return Foundation;
      case 'Fontisto':
        return Fontisto;
      case 'FontAwesome5Pro':
        return FontAwesome5Pro;
      case 'FontAwesome5':
        return FontAwesome5;
      case 'FontAwesome':
        return FontAwesome;
      default:
        return FontAwesome;
    }
  };

  const Icons = iconConverter();

  return (
    <View style={[props.containerStyle]}>
      <Icons
        name={props.name}
        size={props.size}
        color={props.color}
        style={props.style}
      />
    </View>
  );
};

export default Icon;
