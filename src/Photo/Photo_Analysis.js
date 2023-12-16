import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity,Alert } from 'react-native';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

const Photo_Analysis = ({ onNavigateToPhoto }) => {
  const [trash, setTrash] = useState(""); // 사용자 입력을 받을 상태값 추가
  const [showItems, setShowItems] = useState(false); // 업사이클링 아이템들을 보여줄지 여부 상태값 추가

  const handleConfirm = () => {
    // 확인 버튼이 눌렸을 때, 입력값이 "페트병"인 경우에만 업사이클링 아이템 리스트를 보이게 설정
    if (trash === "페트병" || trash == "옷걸이" || trash == "건전지") {
      setShowItems(true);
    } else {
      setShowItems(false);
      Alert.alert("알림", "입력하신 쓰레기에 대한 정보가 없습니다.");
    }
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
          {trash === "페트병" && (
            <>
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
          </>
          )}
          {trash === "옷걸이" && (
            <>
          <View style={styles.cell}>
            <Text style={styles.cellText}>{trash} 리스</Text>
            <Text style={styles.additionalText}>
              1. 옷걸이를 동그란 모양으로 만들어줍니다.
              {'\n'}2. 취향에 맞는 끈을 고리부분에 한번 묶어준 뒤 돌려 감기 해줍니다.
              {'\n'}3. 만들어진 옷걸이 리스틀에 준비된 조화를 틀 모양대로 잡아준 후 고정해줍니다.
              {'\n'}4. 원하는 곳에 걸어 장식합니다.
            </Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>{trash} 레터링 장식</Text>
            <Text style={styles.additionalText}>
              1. 원하는 글자를 끊어지지 않게 적어줍니다.
              {'\n'}2. 옷걸이를 펼쳐줍니다.
              {'\n'}3. 펼친 옷걸이를 글자 모양에 맞게 구부려 줍니다.
              {'\n'}4. 만든 레터링 장식에 끈같은 것을 묶어 장식해줍니다.
              {'\n'}5. 투명한 낚시줄로 원하는 곳에 걸어 장식합니다.
            </Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>{trash} 핸드폰 거치대</Text>
            <Text style={styles.additionalText}>
              1. 옷걸이를 반으로 구부려 줍니다.
              {'\n'}2. 휴대폰 사이즈에 맞게 접힌 부분을 벌려 줍니다.
              {'\n'}3. 휴대폰을 거치할 수 있게 끝을 살짝 구부려 줍니다.
              {'\n'}4. 옷걸이의 고리를 뒤로 젖혀 아래로 걸어줍니다.
            </Text>
          </View>
          </>
          )}
          {trash === "건전지" && (
            <>
          <View style={styles.cell}>
            <Text style={styles.cellText}>{trash} 조각 작품</Text>
            <Text style={styles.additionalText}>
              1. 집에 남는 폐건전지 여러개를 준비한다
              {'\n'}2. 준비한 폐건전지로 자신이 원하는 모양을 만든다.
              {'\n'}3. 폐건전지를 접착제나 고무시멘트 등으로 연결한다
              {'\n'}4. 원한다면, 색상을 입혀 독특하게 만든다

            </Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>{trash} 페인팅</Text>
            <Text style={styles.additionalText}>
              1. 물감을 사용하여 캔버스에 배경을 그린다
              {'\n'}2. 다양한 크기와 모양의 폐건전지를 물감으로 칠한다
              {'\n'}3. 색칠된 폐건전지를 다양한 패턴이냐 모양으로 배치한다
            </Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>{trash} 목걸이</Text>
            <Text style={styles.additionalText}>
              1. 원하는 크기와 모양의 건전지를 선택한다

              {'\n'}2. 건전지에 구멍을 뚫고 체인을 연결할 수 있도록 한다
              {'\n'}3. 접착제를 사용하여 건전지를 체인에 고정시킨다
            </Text>
          </View>
          </>
          )}
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