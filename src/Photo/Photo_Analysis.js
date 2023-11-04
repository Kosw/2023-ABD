import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

const Photo_Analysis = ({ onNavigateToPhoto }) => {
  const [trash, setTrash] = useState(""); // 사용자 입력을 받을 상태값 추가

  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>업사이클링 종류와 방법</Text>
      <View style={styles.celi}>
        <TextInput
          style={styles.input}
          placeholder="쓰레기 입력" // 입력 힌트를 표시합니다.
          value={trash}
          onChangeText={setTrash} // 입력값이 변경될 때마다 호출됩니다.
        />
      </View>
      <Text style={styles.infoText}>만들 수 있는 업사이클링 제품들</Text>
      <View style={styles.column}>
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
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
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
  input: {
    width: SCREEN_WIDTH / 1.2,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 6,
    fontSize: 22,
  },
});

export default Photo_Analysis;
