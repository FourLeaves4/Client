import React from 'react';
import { Image, StyleSheet } from 'react-native';

const ImageComponent = ({ badge }) => {
  return <Image style={styles.mainIcon} source={badge} />;
};

const styles = StyleSheet.create({
  mainIcon: {
    width: 120,
    height: 109,
    marginBottom: 36,
    marginTop: 150,
  },
});

export default ImageComponent;
