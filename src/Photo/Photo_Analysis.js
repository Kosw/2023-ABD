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
            <Text style={styles.additionalText}>
  1. 빈 페트병을 세척합니다.
  {'\n'}2. 페트병 상단을 자르고, 아래에 작은 배수구를 만듭니다.
  {'\n'}3. 페트병 안에 토양을 채워줍니다.
  {'\n'}4. 선택한 식물을 토양에 심어줍니다.
  {'\n'}5. 화분을 적절한 장소에 배치하고 햇빛과 물을 공급하세요.
</Text>

          </View>
          <View style={styles.cell}>
  <Text style={styles.cellText}>{trash} 샤워헤드</Text>
  <Text style={styles.additionalText}>
    1. 사용하지 않는 샤워헤드를 분해하여 부품을 확인합니다.
    {'\n'}2. 페트병을 적당한 크기로 잘라내고, 샤워헤드 부품과 맞는 구멍을 만듭니다.
    {'\n'}3. 페트병을 샤워헤드 부품에 고정시킵니다.
    {'\n'}4. 필요하다면 물이 원활하게 흐를 수 있도록 홀을 뚫어줍니다.
    {'\n'}5. 조립하여 사용합니다.
  </Text>
</View>

<View style={styles.cell}>
  <Text style={styles.cellText}>{trash} 조명</Text>
  <Text style={styles.additionalText}>
    1. 사용하지 않는 조명의 전선과 부품을 확인합니다.
    {'\n'}2. 페트병을 적당한 크기로 잘라내고, 조명 부품과 맞는 구멍을 만듭니다.
    {'\n'}3. 페트병을 조명 부품에 고정시킵니다.
    {'\n'}4. 전선을 연결하고 조립하여 사용합니다.
  </Text>
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
    fontSize: 14,
    marginTop: 6,
  },
});

export default Photo_Analysis;