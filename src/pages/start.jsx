import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import Swiper from 'react-native-swiper';

export default function Start({ navigation }) {
  const [slideTime, setSlideTime] = useState(1);
  const bannerLists = [
    {
      id: 1,
      imageUrl:
        'https://lh3.googleusercontent.com/proxy/J4Ly4jjnTzGj24-vIxym4l729OwQd0jDR66DP4Jh_Qquju70-B5N24Zebl9_TuVuTy9ZJYKkM0Tvtow7Q7jexSuEcJFGFmf8vcYxxvumMov4jhGAkVFJfpDv6NdP',
    },
    {
      id: 2,
      imageUrl:
        'https://lh4.googleusercontent.com/proxy/MRQA2mpjd3yXno8jwIElGXi6M_APLXckv9qseshcMQskP1HBPF3aMykClZgrFG2QL788Nn7dnYmWAYaLZ1wskNVuTsTssSpOLqReRYDWU-a187LbFugwAMgwUKvu',
    },
    {
      id: 3,
      imageUrl:
        'https://lh3.googleusercontent.com/proxy/PVBaqkQu38nQN4hfkMWGaimbqQtNlfITnSe6FHTFb96ixQT7a_F0-PnAdA4L0eHSmYlu_YiunJxCC8DEy12HgjvVPkrEt5J15uhh1EcURWaSfy_MY0BY0p6Ie-Pf',
    },
  ];

  useEffect(() => {
    const autoTimer = setTimeout(() => setSlideTime(4), 1000);
    return () => clearTimeout(autoTimer); // cleanup
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NOVA</Text>
      <Swiper
        autoplay
        showsPagination={false}
        width={300}
        height={300}
        autoplayTimeout={slideTime}
      >
        {bannerLists.map((banner) => {
          return (
            <View key={banner.id} style={styles.slide}>
              <Image
                source={{ uri: banner.imageUrl }}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          );
        })}
      </Swiper>

      <View style={styles.button}>
        <TouchableOpacity
          style={styles.button_start}
          onPress={() => navigation.navigate('Questions')}
        >
          <Text style={styles.buttonText}>시작하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button_login}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>로그인하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  title: {
    paddingTop: 100,
    flex: 0.5,
    color: '#FBF15B',
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    flex: 0.5,
    justifyContent: 'flex-end',
    paddingBottom: 80,
  },
  button_start: {
    backgroundColor: '#FBF15B',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 10,
    width: 345,
  },
  button_login: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    width: 345,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
