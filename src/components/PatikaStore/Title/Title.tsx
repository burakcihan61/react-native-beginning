import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Title: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PatikaStore</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'purple',
  },
});

export default Title;
