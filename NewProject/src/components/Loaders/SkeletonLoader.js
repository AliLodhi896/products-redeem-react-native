import React, {useRef} from 'react';
import {View, ActivityIndicator} from 'react-native';
import theme from '../../constants/theme';
import {Skeleton} from '@rneui/themed';

const SkeletonLoader = ({slides}) => {
  return (
    <View style={{flex:1,backgroundColor:theme.colors.background,alignContent:'center',justifyContent:'center'}}>
     <ActivityIndicator style={{paddingVertical:5,opacity:0.5}} size={40} color={theme.colors.primary} />
    </View>
  );
};

export default SkeletonLoader;
