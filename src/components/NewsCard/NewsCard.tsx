import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './NewsCard.style';

const NewsCard = props => {
  const {news} = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} />
      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.description}>{news.description}</Text>
    </View>
  );
};

export default NewsCard;
