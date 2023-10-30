import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { BarChart, XAxis } from 'react-native-svg-charts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api_uri } from '@env';
const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

const Home = ({ onNavigateToMore, navigateToPhotoAnalysis, navigateToVideoAnalysis }) => {

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer1}>
        <Image
          source={require('../../assets/default_profile.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      
      <View style={styles.middleImagesContainer}>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={navigateToPhotoAnalysis}>
            <Image
              source={require('../../assets/icon.png')}
              style={styles.image4}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomImagesContainer}>
        <View style={styles.imageContainer2}>
          <TouchableOpacity onPress={navigateToPhotoAnalysis}>
            <Image
              source={require('../../assets/cart.png')}
              style={styles.image1}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer3}>
          <TouchableOpacity onPress={navigateToVideoAnalysis}>
            <Image
              source={require('../../assets/infor.jpg')}
              style={styles.image1}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  imageContainer1: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  bottomImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: SCREEN_HEIGHT * 0.024,
  },
  imageContainer2: {
    overflow: 'hidden',
  },
  imageContainer3: {
    overflow: 'hidden',
  },
  image: {
    width: SCREEN_WIDTH * 0.4,
    height: SCREEN_HEIGHT * 0.3,
  },
  image1: {
    width: SCREEN_WIDTH * 0.3,
    height: SCREEN_HEIGHT * 0.1,
    borderRadius: 20,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  image4: {
    width: SCREEN_WIDTH * 1,
    height: SCREEN_HEIGHT * 0.55,
    borderRadius: 20,
    marginTop: -120,
  },
  middleImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: SCREEN_HEIGHT * 0.024,
  },
});

export default Home;
