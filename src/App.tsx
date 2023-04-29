import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import PatikaStore from './pages/PatikaStore';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PatikaStore />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
});

export default App;
