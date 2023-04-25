import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={data => <Text>{data.item}</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
