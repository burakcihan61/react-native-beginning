import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Card from './components/Card';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Card name="Burak Cihan" title="Lorem ipsum bla bla bla" />
      <Card name="Berat Cihan" title="Lorem ipsum bla bla bla" />
      <Card name="Fuat Cihan" title="Lorem ipsum bla bla bla" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});
export default App;
