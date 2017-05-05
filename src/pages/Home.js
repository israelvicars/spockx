import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Marquee from '@remobile/react-native-marquee';
import { HIGH_TOPS, LOW_TOPS, QUOTES } from '../assets/data';
import ADVERTS from '../assets/images/adverts';
import LOGOS from '../assets/images/logos';
import { Banner, Header, ShoeRack } from '../components';
import { DEFAULT_FAMILY } from '../assets/fonts';

export default class Home extends Component {
  render() {
    const { containerStyle, marqueeStyle } = styles;

    return (
      <View style={containerStyle}>
        <Header headerImage={LOGOS.full} />
        <ScrollView style={containerStyle}>
          <Marquee style={marqueeStyle}>
            {QUOTES.join('                    ')}
          </Marquee>
          <Banner adverts={ADVERTS} />
          <ShoeRack shoes={HIGH_TOPS} icon={'highTop'}>
            {'High Tops'}
          </ShoeRack>
          <ShoeRack shoes={LOW_TOPS} icon={'lowTop'}>
            {'Low Tops'}
          </ShoeRack>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  marqueeStyle: {
    marginTop: 10,
    marginBottom: 10,
    fontFamily: DEFAULT_FAMILY,
    fontWeight: 'bold',
  },
});
