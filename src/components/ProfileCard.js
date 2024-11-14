import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ProfileCard() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* 원형 프로필 */}
        <View style={styles.circle} />
        <View style={styles.textContainer}>
          <Text style={styles.levelText}>Lev.18 하지니</Text>
          <View style={styles.roleContainer}>
            <View style={styles.dot} />
            <Text style={styles.roleText}>주니어 개발자</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 54,
    left: 20,
    width: 267,
    height: 100,
    backgroundColor: '#000',
    paddingVertical: 20,
  },
  card: {
    width: 267,
    height: 80,
    backgroundColor: '#333',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    position: 'relative',
    shadowColor: '#E3E3E3',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
  },
  circle: {
    position: 'absolute',
    width: 49,
    height: 49,
    borderRadius: 24.5,
    backgroundColor: "white",
    top: 12,
    left: 16,
  },
  textContainer: {
    position: 'absolute',
    top: 13,
    left: 85,
    width: 150,
    height: 42,
    justifyContent: 'center',
  },
  levelText: {
    fontSize: 18,
    color: '#e2e2e2',
    fontWeight: '400',
    fontFamily: 'Pretendard-Regular',
    marginBottom: 2,
    marginTop: 4,
  },
  roleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    left: 2,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#5be5fb',
    borderRadius: 4,
    marginRight: 8,
  },
  roleText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#5be5fb',
    fontFamily: 'Pretendard-Bold',
  },
});

export default ProfileCard;
