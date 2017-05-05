import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ShoeBox, ShoeRackHeader } from './index';

const collectShoeBoxes = shoes =>
  shoes.map(shoe => (<ShoeBox key={shoe.name} shoe={shoe} />));

const ShoeRack = ({ shoes, children, icon }) => (
  <View style={styles.wrapperStyle}>
    <ShoeRackHeader headerText={children} icon={icon} />
    <View>
      <ScrollView horizontal style={styles.containerStyle}>
        {collectShoeBoxes(shoes)}
      </ScrollView>
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapperStyle: {
    marginBottom: 20,
  },
  containerStyle: {
    flex: 1,
  },
});

export { ShoeRack };
