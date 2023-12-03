import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput, Button, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const { width: SCREEN_WIDTH } = Dimensions.get("window");

const More = ({ onNavigateToHome, onNavigateToUplo }) => {
  const [product, setProduct] = useState('');
  const [waste, setWaste] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const fetchlogData = async () => {
    try {
      const url = "https://ee58-2406-da12-16a-fe00-a13c-a008-b335-7158.ngrok-free.app/team5/team5storeLog"
      const response = await fetch(url, {
        method: 'GET'
      });

      const responseJson = await response.json();
      setProduct(responseJson[0].product);
      setPhoneNumber(responseJson[0].phoneNumber);
      setWaste(responseJson[0].use_trash);
  } catch (error) {
    console.error(error);
  }
  fetchlogData()
}

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.pageTitle}>Store</Text>
      
      <View style={styles.postContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/key.jpeg')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.postTitle}>{product}</Text>
        <Text style={styles.postContent}>{waste}를 사용해 만들었습니다.</Text>
        <Text style={styles.postContent}>연락처 : {phoneNumber}</Text>
      </View>

      <View style={styles.postContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/krk.jpeg')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.postTitle}>코르크 마개 냅킨 홀더</Text>
        <Text style={styles.postContent}>코르크 마개를 사용해 만들었습니다.</Text>
        <Text style={styles.postContent}>연락처 : XXX</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  pageTitle: {
    fontSize: 28,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 16,
    color: '#00DE16',
  },
  postContainer: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  image: {
    width: SCREEN_WIDTH * 0.6,
    height: SCREEN_WIDTH * 0.6,
  },
  postTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000000',
  },
  postContent: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default More;
