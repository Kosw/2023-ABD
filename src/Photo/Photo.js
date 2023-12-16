import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert,AsyncStorage,ActivityIndicator } from 'react-native';
import { Camera } from 'expo-camera';


export default function Photo() {
  const [loading, setLoading] = useState(false); // 추가된 부분
  const cameraRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      uploadPhoto(photo);
    }
  };

  const uploadPhoto = async (photo) => {
    setLoading(true); // 업로드 시작 시 로딩 상태 설정

    const data = new FormData();
    data.append('photo', {
      uri: photo.uri,
      type: 'image/jpeg',
      name: 'photo.jpg',
    });

    try {
      const url = 'https://81e6-39-119-249-5.ngrok-free.app';
      const response = await fetch(url+'/predict/image', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        Alert.alert('Success', '분석이 끝났습니다. 사진 속 쓰레기는 '+result['result']+'입니다.');
      } else {
        Alert.alert('Error', 'Failed to upload photo');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to connect to the server');
    } finally {
      setLoading(false);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={cameraRef}
        style={{ flex: 1, aspectRatio: 4 / 3 }}
        type={Camera.Constants.Type.back}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={takePhoto} style={styles.captureButton}>
            {/* Capture button UI */}
          </TouchableOpacity>
        </View>
      </Camera>

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
