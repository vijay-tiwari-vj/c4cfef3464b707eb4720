import React from 'react';
import { View, Text } from 'react-native';

import { withNavigation } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { colors } from '../../styles';

import { Home, Country, Weather } from '../../screens/main';

import Constants from '../../utils/Constants';
const { Screens } = Constants.NAVIGATION.routes;

export const homeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      header: null
    }),
  },
  Country: {
    screen: Country,
    navigationOptions: () => ({
      header: null
    }),
  },
  Weather: {
    screen: Weather,
    navigationOptions: () => ({
      header: null
    }),
  },
},
  {
    initialRouteName: Screens.HOME,
    defaultNavigationOptions: {
    }
  });
