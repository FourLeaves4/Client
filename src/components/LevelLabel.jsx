import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LevelLabel = ({ level }) => {
  return (
    <View style={styles.label}>
      {/* 레벨 표시 */}
      <Text style={styles.text}>Lv.{level}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    top: 270,
    right: 20,
    width: 50,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '400',
    color: '#fbf15bb2',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default LevelLabel;
