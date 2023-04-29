import React from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import news_data from '../news_data.json';
import news_banner from '../news_banner_data.json';
import NewsCard from '../components/NewsCard/NewsCard';
import ScrollView = Animated.ScrollView;

type TProps = {
  item: {
    imageUrl: string;
    title: string;
    description: string;
    author: string;
    u_id: string | number;
  };
};
const NewCard: React.FC = () => {
  const renderNews = ({item}: TProps) => {
    return <NewsCard news={item} />;
  };
  const keyExtractor = (item: {u_id: string | number}) => item.u_id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>News</Text>
        <FlatList
          ListHeaderComponent={() => (
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {news_banner.map((item, index) => {
                return (
                  <Image
                    key={index}
                    style={styles.image}
                    source={{uri: item.imageUrl}}
                  />
                );
              })}
            </ScrollView>
          )}
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
  image: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 5,
  },
  headerText: {
    fontSize: 50,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default NewCard;
