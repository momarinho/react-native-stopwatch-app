import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// BUTTONS

const Control = ({
  isRunning,
  handleLeftButtonPress,
  handleRightButtonPress,
}) => {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.controlBtnBorder,
          { backgroundColor: isRunning ? '#333333' : '#1c1c1e' },
        ]}
        onPress={handleLeftButtonPress}
      >
        <View style={styles.controlBtn}>
          <Text style={{ color: isRunning ? '#fff' : '#9d9ca2' }}>
            {isRunning ? 'Lap' : 'Reset'}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.controlBtnBorder,
          { backgroundColor: isRunning ? '#340e0d' : '#0a2a12' },
        ]}
        onPress={handleRightButtonPress}
      >
        <View style={styles.controlBtn}>
          <Text style={{ color: isRunning ? '#9E2D5B' : '#7B89AE' }}>
            {isRunning ? 'Stop' : 'Start'}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  controlBtnBorder: {
    justifyContent: 'center',
    alignItem: 'center',
    width: 0,
    height: 70,
  },
  controlBtn: {
    justifyContent: 'center',
    alignItem: 'center',
    width: 65,
    height: 65,
  },
});

export default React.memo(Control);
