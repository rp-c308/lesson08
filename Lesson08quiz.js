
import React from 'react';
import {StyleSheet, View} from 'react-native';

const datasource = [
  {name: 'Chilli Crab', price: '$25.00'},
  {name: 'Hainanese Chicken Rice', price: '$3.50'},
  {name: 'Nasi Lemak', price: '$2.50'},
  {name: 'Kopi-O', price: '$0.65'},
  {name: 'Teh Tarik', price: '$2.00'},
  {name: 'Milo Dinosaur', price: '$3.00'},
  {name: 'Cendol', price: '$2.30'},
  {name: 'Tau Huay', price: '$0.50'},
];

const Lesson08quiz: () => React$Node = () => {
  return (
      <View style={styles.container}>

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    marginHorizontal: 16,
  },
});

export default Lesson08quiz;
