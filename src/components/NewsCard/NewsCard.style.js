import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  inner_container: {
    padding: 5,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    color: '#000',
    marginTop: 5,
  },
  author: {
    color: '#000',
    fontStyle: 'italic',
    textAlign: 'right',
  },
});
