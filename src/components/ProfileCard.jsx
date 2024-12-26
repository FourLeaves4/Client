import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfileCard({ name, level }) {
  const navigation = useNavigation();

  // level에 따라 뱃지와 타이틀 결정
  const getBadgeAndTitle = (level) => {
    if (level >= 1 && level <= 5) {
      return {
        title: 'Your step is 입문자!',
        icon: require('../../assets/badge1.png'),
      };
    }
    if (level >= 6 && level <= 10) {
      return {
        title: 'Your step is 인턴 개발자',
        icon: require('../../assets/badge2.png'),
      };
    }
    if (level >= 11 && level <= 15) {
      return {
        title: 'Your step is 주니어 개발자!',
        icon: require('../../assets/badge3.png'),
      };
    }
    if (level >= 16 && level <= 20) {
      return {
        title: 'Your step is 미드레벨 개발자!',
        icon: require('../../assets/badge4.png'),
      };
    }
    if (level >= 21 && level <= 25) {
      return {
        title: 'Your step is 시니어 개발자!',
        icon: require('../../assets/badge5.png'),
      };
    }
    if (level >= 26) {
      return {
        title: 'Your step is 최고 레벨!',
        icon: require('../../assets/badge5.png'),
      };
    }
  };

  const { title, icon } = getBadgeAndTitle(level);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('MyScreen')}
    >
      <View style={styles.overlap}>
        <Text style={styles.textWrapper}>{name}</Text>
        <Text style={styles.subText} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
      </View>
      <View style={styles.overlapGroup}>
        <Image
          source={require('../../assets/profile1.png')}
          style={styles.image}
        />
        <Image source={icon} style={styles.element} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 234,
    height: 73,
    marginRight: 110,
    marginTop: 40,
  },
  overlap: {
    position: 'absolute',
    width: 159,
    height: 48,
    top: 12,
    left: 75,
  },
  textWrapper: {
    position: 'absolute',
    width: 101,
    top: 0,
    left: 0,
    fontWeight: '600',
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 20,
  },
  subText: {
    position: 'absolute',
    top: 26,
    left: -5,
    fontWeight: '400',
    color: '#acacac',
    fontSize: 12.5,
    textAlign: 'center',
    lineHeight: 14,
    width: '100%',
  },
  overlapGroup: {
    position: 'absolute',
    width: 70,
    height: 73,
    top: 0,
    left: 0,
  },
  image: {
    position: 'absolute',
    width: 65,
    height: 65,
    top: 0,
    left: 8,
    resizeMode: 'cover',
  },
  element: {
    position: 'absolute',
    width: 34,
    height: 34,
    top: 39,
    left: 0,
    resizeMode: 'cover',
  },
});
