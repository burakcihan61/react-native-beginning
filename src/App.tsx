import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/NewsCard';

type TProps = {
  item: {
    imageUrl: string;
    title: string;
    description: string;
    author: string;
    u_id: string | number;
  };
};
const App: React.FC = () => {
  const renderNews = ({item}: TProps) => {
    return <NewsCard news={item} />;
  };
  const keyExtractor = (item: {u_id: string | number}) => item.u_id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={news_data}
          renderItem={renderNews}
          keyExtractor={keyExtractor}
        />
      </View>
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
