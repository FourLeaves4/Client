import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileSection = () => {
  return (
    // 부모 컨테이너 추가 (이 요소의 위치를 조정)
    <View style={styles.wrapper}>
      <View style={styles.box}>
        <View style={styles.group}>
          <View style={styles.groupWrapper}>
            <View style={styles.profileContainer}>
              {/* 이미지 */}
              <Image
                style={styles.image}
                source={require('../../assets/프로필.png')}
              />
              {/* 텍스트 그룹 */}
              <View style={styles.textGroup}>
                <Text style={styles.textName}>김봄</Text>
                <Text style={styles.textEmail}>s24040@gsm.hs.kr</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // 부모 컨테이너 스타일
  wrapper: {
    marginTop: 50, // 원하는 위치로 이동
    marginLeft: 0, // 왼쪽으로부터 20px
    marginBottom: 40,
  },
  box: {
    width: 299,
    height: 100,
  },
  group: {
    position: 'absolute',
    width: 299,
    height: 100,
    top: 0,
    left: 0,
  },
  groupWrapper: {
    height: 100,
  },
  profileContainer: {
    position: 'relative',
    width: 299,
    height: 100,
  },
  image: {
    position: 'absolute',
    width: 100,
    height: 100,
    top: 0,
    left: 199,
    resizeMode: 'cover',
  },
  textGroup: {
    position: 'absolute',
    width: 124,
    height: 55,
    top: 22,
    left: 0,
  },
  textName: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontWeight: '600',
    color: '#FFFFFF',
    fontSize: 24,
    letterSpacing: 0,
    lineHeight: 24,
  },
  textEmail: {
    position: 'absolute',
    top: 33,
    left: 0,
    fontWeight: '300',
    color: '#999999',
    fontSize: 14,
    textAlign: 'center',
    letterSpacing: 0,
    lineHeight: 22,
  },
});

export default ProfileSection;
