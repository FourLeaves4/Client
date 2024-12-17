import React from 'react';
import { Image, StyleSheet } from 'react-native';

const ImageComponent = () => {
  return (
    <Image
      style={styles.mainIcon}
      source={require('../../assets/badge.png')}
    />
  );
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
