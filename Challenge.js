/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

const datasource = [
  {
    data: [
      {
        name: 'iPhone XR',
        brand: 'Apple',
        image: require('./src/img/iphonexr.jpg'),
      },
      {
        name: 'Redmi Note 7 and 7 Pro',
        brand: 'Xiaomi',
        image: require('./src/img/redminote7.jpg'),
      },
      {
        name: 'P30 and P30 Pro',
        brand: 'Huawei',
        image: require('./src/img/p30.jpg'),
      },
    ],
    title: 'More than 20 million sold',
  },
  {
    data: [
      {
        name: 'iPhone 7 Plus',
        brand: 'Apple',
        image: require('./src/img/iphone7plus.jpg'),
      },
      {
        name: 'Mate 20 and Mate 20 Pro',
        brand: 'Huawei',
        image: require('./src/img/mate20.png'),
      },
      {
        name: 'Galaxy A10',
        brand: 'Samsung',
        image: require('./src/img/a10.jpg'),
      },
      {
        name: 'Galaxy A50',
        brand: 'Samsung',
        image: require('./src/img/a50.jpg'),
      },
      {
        name: 'iPhone 8',
        brand: 'Apple',
        image: require('./src/img/iphone8.jpg'),
      },
      {
        name: 'Redmi 6A',
        brand: 'Xiaomi',
        image: require('./src/img/redmi6a.jpg'),
      },
    ],
    title: 'More than 10 million sold',
  },
  {
    data: [
      {name: 'A5', brand: 'Oppo', image: require('./src/img/a5.png')},
      {
        name: 'iPhone Xs Max',
        brand: 'Apple',
        image: require('./src/img/iphonexsmax.jpg'),
      },
      {
        name: 'Galaxy A30',
        brand: 'Samsung',
        image: require('./src/img/a30.jpg'),
      },
      {
        name: 'Galaxy S10+',
        brand: 'Samsung',
        image: require('./src/img/s10plus.jpg'),
      },
      {
        name: 'Galaxy S10',
        brand: 'Samsung',
        image: require('./src/img/s10.jpg'),
      },
      {
        name: 'Galaxy S10e',
        brand: 'Samsung',
        image: require('./src/img/s10e.jpg'),
      },
      {
        name: 'Galaxy S10 5G',
        brand: 'Samsung',
        image: require('./src/img/s105g.jpg'),
      },
    ],
    title: 'Less than 10 million sold',
  },
];

const Challenge: () => React$Node = () => {
  return (
    <View>

    </View>
  );
};

const styles = StyleSheet.create({

});

export default Challenge;
