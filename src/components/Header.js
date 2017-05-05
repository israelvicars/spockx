import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const Header = ({ headerImage }) => {
  const { viewStyle, imageStyle } = styles;

  return (
    <View style={viewStyle}>
      <Image style={imageStyle} source={headerImage}/>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    borderBottomColor: '#EEE',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 68,
    paddingTop: 15,
    elevation: 2,
    position: 'relative',
  },
  imageStyle: {
    paddingTop: 10,
    flex: 0,
    height: 40,
    width: 80,
  },
});

export { Header };
