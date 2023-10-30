import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Uplo = ({ onNavigateToHome }) => {
  const [postContent, setPostContent] = useState('');

  const handlePost = () => {
    if (postContent.trim() !== '') {
      onPost(postContent);
      setPostContent('');
    }
  };

  return (
    <View>
    <TextInput
      placeholder="글을 작성하세요..."
      value={postContent}
      onChangeText={setPostContent}
      multiline
      style={{ height: 200, padding: 10, borderColor: 'gray', borderWidth: 1 }}
    />
    <Button title="글 올리기" onPress={handlePost} />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default Uplo;
