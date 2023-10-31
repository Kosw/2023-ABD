import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

const Photo_Analysis = ({ onNavigateToPhoto }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>업사이클링 종류와 방법</Text>
      <View style={styles.celi}>
        <Text style={styles.cellText}>사진 속 쓰레기 : 페트병</Text>
      </View>
      <Text style={styles.infoText}>페트병으로 만들 수 있는 업사이클링 제품들</Text>
      <View style={styles.column}>
        <View style={styles.cell}>
          <Text style={styles.cellText}>페트병 화분</Text>
          <Text style={styles.additionalText}>추가 내용 3</Text>
          <Text style={styles.additionalText}>추가 내용 4</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}>페트병 필통</Text>
          <Text style={styles.additionalText}>추가 내용 5</Text>
          <Text style={styles.additionalText}>추가 내용 6</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}>페트병 필통</Text>
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
    backgroundColor: '#EEEEEE', // 더 연한 회색으로 변경
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10, // 각진 부분을 둥글게 만듦
  },
  cell: {
    width: SCREEN_WIDTH / 1.5,
    height: 150,
    backgroundColor: '#EEEEEE', // 더 연한 회색으로 변경
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10, // 각진 부분을 둥글게 만듦
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
