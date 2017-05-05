import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ICONS } from '../assets/fonts';

const ShoeRackHeader = ({ headerText, icon }) => (
  <View style={styles.containerStyle}>
    <Image style={styles.imageStyle} source={ICONS[icon]} />
    <Text style={styles.headerStyle}>{headerText}</Text>
  </View>
);

const styles = StyleSheet.create({
  containerStyle: {
    flex: 0,
    flexDirection: 'row',
    marginTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
},
  imageStyle: {
    height: 20,
    width: 20,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10,
  },
  headerStyle: {
    fontSize: 20,
  },
});

export { ShoeRackHeader };
