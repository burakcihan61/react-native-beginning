import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/NewsCard';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={news_data}
          renderItem={({item}) => <NewsCard news={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
