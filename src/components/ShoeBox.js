import React from 'react';
import {
  Dimensions,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { DEFAULT_FAMILY } from '../assets/fonts';
import SNEAKERS from '../assets/images/sneakers';

const { width } = Dimensions.get('window');

const ShoeBox = ({ shoe }) => {
  const {
    wrapperStyle,
    imageStyle,
    containerStyle,
    nameStyle,
    priceStyle,
    sellerStyle,
  } = styles;

  const { image, name, price, url } = shoe;

  return (
    <TouchableOpacity onPress={() => Linking.openURL(url)}>
      <View style={wrapperStyle}>
        <Image style={imageStyle} source={SNEAKERS[image]} />
        <View style={containerStyle}>
          <Text style={nameStyle}>{name}</Text>
        </View>
        <View style={containerStyle}>
          <Text style={sellerStyle}>Amazon</Text>
          <Text style={priceStyle}>${price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    elevation: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    flexDirection: 'column',
  },
  imageStyle: {
    flex: 0,
    width: (width * 0.4),
    height: (width * 0.24),
    marginBottom: 10,
  },
  containerStyle: {
    flex: 0,
    width: (width * 0.4),
    height: 35,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  nameStyle: {
    fontSize: 15,
    flexWrap: 'wrap',
    lineHeight: 14,
  },
  priceStyle: {
    fontFamily: DEFAULT_FAMILY,
    fontSize: 20,
    fontWeight: 'bold',
  },
  sellerStyle: {
    fontFamily: DEFAULT_FAMILY,
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export { ShoeBox };
