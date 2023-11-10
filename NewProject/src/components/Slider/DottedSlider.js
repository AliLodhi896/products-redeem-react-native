import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import Swiper from 'react-native-swiper';

const DottedSlider = ({slides}) => {
  return (
    <Swiper style={{height:150}} showsButtons={false} autoplay={true}>
      {slides.map((slide, index) => (
        <View
          key={index}
          style={{
            marginHorizontal: 20,
            marginVertical: 15
          }}>
          <Text style={{color: 'grey', fontSize: 18.5, textAlign: 'center'}}>
            {slide}
          </Text>
        </View>
      ))}
    </Swiper>
  );
};

export default DottedSlider;
