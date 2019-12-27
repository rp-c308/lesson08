import React from 'react';
import {StyleSheet, View} from 'react-native';

const datasource = [
  {
    data: [{key: 'a'}, {key: 'e'}, {key: 'i'}, {key: 'o'}, {key: 'u'}],
    title: 'Vowels',
  },
  {
    data: [
      {key: 'b'},
      {key: 'c'},
      {key: 'd'},
      {key: 'f'},
      {key: 'g'},
      {key: 'h'},
      {key: 'j'},
      {key: 'k'},
      {key: 'l'},
      {key: 'm'},
      {key: 'n'},
      {key: 'p'},
    ],
    title: 'Consonants',
  },
];

const Worksheet: () => React$Node = () => {
  return (
    <View>

    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {fontSize: 15, margin: 10, textAlign: 'left'},
  headingText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
});

export default Worksheet;
