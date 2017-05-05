import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');
const height = width * 3 / 8;

const collectAdverts = (adverts, viewStyle, imageStyle, containerStyle) =>
  adverts.map((advert, index) => (
    <View key={`advert-${index}`} style={viewStyle}>
      <Image style={imageStyle} source={advert} />
    </View>
  ));

const Banner = ({ adverts }) => {
  const { swiperStyle, viewStyle, imageStyle } = styles;

  return (
    <Swiper
      loop
      autoplay
      autoplayTimeout={3.5}
      showsPagination={false}
      showsButtons={false}
      style={swiperStyle}
      height={height}
    >
      {collectAdverts(adverts, viewStyle, imageStyle)}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  swiperStyle: {
    flex: 0,
  },
  viewStyle: {
    flex: 0,
  },
  imageStyle: {
    width,
    height,
    flex: 0,
  },
});

export { Banner };
