import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {CommonApp} from '@fingular/app';

export function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello from Ceyloan</Text>
      <CommonApp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
