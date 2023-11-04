import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios'; // axios 라이브러리 추가
import { api_key } from '@env';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

const Photo_Analysis = () => {
  const [trash, setTrash] = useState("");
  const [suggestedItems, setSuggestedItems] = useState([]);

  const handleConfirm = async () => {
    try {
      const apiUrl = 'https://api.openai.com/v1/chat/completions';
  
      const response = await axios.post(apiUrl, {
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant.',
          },
          {
            role: 'user',
            content: trash,
          },
        ],
        model: 'gpt-3.5-turbo',
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${api_key}`,
        },
      });
      console.log(response.data.choices[0].message.content);
      const suggestedResponses = response.data.choices[0].message.content.split('\n');
      console.log(suggestedResponses);
      setSuggestedItems(suggestedResponses);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>업사이클링 종류와 방법</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="쓰레기 입력"
          value={trash}
          onChangeText={setTrash}
        />
        <TouchableOpacity onPress={handleConfirm}>
          <Text style={styles.confirmButton}>확인</Text>
        </TouchableOpacity>
      </View>
      
      {suggestedItems.length > 0 && (
        <View style={styles.column}>
          <Text style={styles.infoText2}>만들 수 있는 업사이클링 제품들</Text>
          {suggestedItems.map((item, index) => (
            <View key={index} style={styles.cell}>
              <Text style={styles.cellText}>{item}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00DE16',
    marginBottom: 20,
    
  },
  infoText2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00DE16',
    marginBottom: 20,
    marginLeft: 40,
    
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    width: SCREEN_WIDTH / 1.2,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  confirmButton: {
    fontSize: 16,
    color: '#00DE16',
    marginLeft: 10,
    textDecorationLine: 'underline',
  },
  celi: {
    width: SCREEN_WIDTH / 1.1,
    height: 100,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
  cell: {
    width: SCREEN_WIDTH / 1.2,
    height: 150,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
  cellText: {
    fontSize: 20,
  },
  additionalText: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default Photo_Analysis;
