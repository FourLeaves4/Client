import React from 'react';
import { View, StyleSheet } from 'react-native';

const LevelBarSection = () => {
  return (
    <View style={styles.box}>
      <View style={styles.view}>
        <View style={styles.div}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 345,
    height: 20,
  },
  view: {
    position: 'absolute', // 'fixed' 대신 'absolute'
    width: 345,
    height: 20,
    top: 0,
    left: 0,
    backgroundColor: '#66666699',
    borderRadius: 12,
  },
  div: {
    position: 'absolute',
    width: 252,
    height: 10,
    top: 5,
    left: 5,
    backgroundColor: '#fbf15b',
    borderRadius: 15,
  },
});

export default LevelBarSection;
