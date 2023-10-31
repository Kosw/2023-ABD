import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput, Button, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const { width: SCREEN_WIDTH } = Dimensions.get("window");

const More = ({ onNavigateToHome, onNavigateToUplo }) => {

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
        <Text style={styles.postTitle}>키보드 키 목걸이</Text>
        <Text style={styles.postContent}>폐키보드를 사용해 만들었습니다.</Text>
        <Text style={styles.postContent}>연락처 : XXX</Text>
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
