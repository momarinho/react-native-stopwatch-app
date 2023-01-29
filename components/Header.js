import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const Header = () => {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content title="Stopwatch" style={styles.content}/>
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
  },
  content: {
    color: '#fff',
    alignItems: 'center',
  },
});
