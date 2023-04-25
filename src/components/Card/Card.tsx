import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Card.style';

type TProps = {
  name: string;
  title: string;
};

const Card: React.FC<TProps> = (props: TProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.text}>{props.title}</Text>
      </View>
      <TouchableOpacity style={styles.button_container}>
        <Text style={styles.button_title}>I Like</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Card;
