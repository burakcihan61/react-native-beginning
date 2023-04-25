import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Card.style';

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>Burak Cihan</Text>
        <Text style={styles.text}>Lorem ipsum bla bla bla</Text>
      </View>
      <TouchableOpacity style={styles.button_container}>
        <Text style={styles.button_title}>I Like</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Card;
