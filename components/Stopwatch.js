import React, { useState, useRef, useCallback } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Result from './Result';
import Control from './Control';
import { displayTime } from './util';
import Header from './Header';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState([]);
  const timer = useRef(null);

  const handleLeftButtonPress = useCallback(() => {
    if (isRunning) {
      setResults((previousResult) => [time, ...previousResult]);
    } else {
      setResults([]);
      setTime(0);
    }
  }, [isRunning, time]);

  const handleRightButtonPress = useCallback(() => {
    if (!isRunning) {
      const interval = setInterval(() => {
        setTime((previousTime) => previousTime + 1);
      }, 10);
      timer.current = interval;
    } else {
      clearInterval(timer.current);
    }
    setIsRunning((previousState) => !previousState);
  }, [isRunning]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <StatusBar style="light" />

        <View style={styles.display}>
          <Text style={styles.displayText}>{displayTime(time)}</Text>
        </View>

        <View style={styles.control}>
          <Control
            isRunning={isRunning}
            handleLeftButtonPress={handleLeftButtonPress}
            handleRightButtonPress={handleRightButtonPress}
          />
        </View>
        <View style={styles.result}>
          <Result results={results} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: Constants.statusBarHeight,
  },
  display: {
    flex: 3 / 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayText: {
    color: '#fff',
    fontSize: 70,
    fontWeight: '200',
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : null,
  },
  control: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  result: { flex: 3 / 5 },
});

export default Stopwatch;
