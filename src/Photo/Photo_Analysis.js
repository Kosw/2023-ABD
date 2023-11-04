import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

const Photo_Analysis = ({ onNavigateToPhoto }) => {
  const [trash, setTrash] = useState(""); // 사용자 입력을 받을 상태값 추가
  const [showItems, setShowItems] = useState(false); // 업사이클링 아이템들을 보여줄지 여부 상태값 추가

  const handleConfirm = () => {
    setShowItems(true); // 확인 버튼이 눌렸을 때 업사이클링 아이템들을 보이게 설정
  }

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>업사이클링 종류와 방법</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="쓰레기 입력" // 입력 힌트를 표시합니다.
          value={trash}
          onChangeText={setTrash} // 입력값이 변경될 때마다 호출됩니다.
        />
        <TouchableOpacity onPress={handleConfirm}>
          <Text style={styles.confirmButton}>확인</Text>
        </TouchableOpacity>
      </View>
      
      {showItems && (
        <View style={styles.column}>
          <Text style={styles.infoText2}>만들 수 있는 업사이클링 제품들</Text>
          <View style={styles.cell}>
            <Text style={styles.cellText}>{trash} 화분</Text>
            <Text style={styles.additionalText}>추가 내용 3</Text>
            <Text style={styles.additionalText}>추가 내용 4</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>{trash} 필통</Text>
            <Text style={styles.additionalText}>추가 내용 5</Text>
            <Text style={styles.additionalText}>추가 내용 6</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>{trash} 필통</Text>
            <Text style={styles.additionalText}>추가 내용 5</Text>
            <Text style={styles.additionalText}>추가 내용 6</Text>
          </View>
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
