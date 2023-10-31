import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

const trash = "페트병"; // 변수로 묶음

const Photo_Analysis = ({ onNavigateToPhoto }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>업사이클링 종류와 방법</Text>
      <View style={styles.celi}>
        <Text style={styles.cellText}>사진 속 쓰레기 : {trash}</Text>
      </View>
      <Text style={styles.infoText}>{trash}으로 만들 수 있는 업사이클링 제품들</Text>
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
});

export default Photo_Analysis;
