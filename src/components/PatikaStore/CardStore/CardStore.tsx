import React from 'react';

import {Text, View, StyleSheet, Image} from 'react-native';

type TProps = {
  item: {
    id: number | string;
    title: string;
    imgURL: string;
    price: string;
    inStock?: boolean;
  };
};

const CardStore: React.FC<TProps> = (props: TProps) => {
  return (
    <View style={styles.layout}>
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={{uri: props.item.imgURL}} />
          <Text style={styles.title}>{props.item.title}</Text>
          <Text style={styles.price}>{props.item.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    margin: 10,
    justifyContent: 'center',
  },
  container: {
    width: 140,
    height: 275,
    backgroundColor: '#eceff1',
    flexDirection: 'column',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
  },
  image: {
    width: 135,
    height: 175,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
    marginLeft: 5,
  },
  price: {
    marginTop: 5,
    color: '#000',
    marginLeft: 5,
  },
});

export default CardStore;
