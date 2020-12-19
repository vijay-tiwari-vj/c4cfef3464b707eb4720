import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity, Image, View, StatusBar, ScrollView } from "react-native";
import { Content, Input, Item } from "native-base";

import Button from "../../../components/button";

import Toast from "../../../utils/Toast";
import Validator from "../../../utils/ValidateUtil";

import { weatherService } from "../../../services";

import { colors } from "../../../styles";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.primaryBlue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    borderRadius: 16,
    backgroundColor: colors.white,
    padding: 20,
    marginVertical: 10
  }
});

function Weather({ navigation }) {
  const [isLoading, setIsLoading] = React.useState();

  const weatherData = navigation.getParam('weatherData');
  const { data } = weatherData || {}
  console.log(data);

  return (
    <View style={styles.root}>
      <StatusBar backgroundColor={colors.primaryPink} barStyle='light-content' />
      <View style={styles.container}>
        <Text>{data['temperature']}</Text>
        <Text>{data['weather_icons']} </Text>
        <Text>{data['wind_speed']}</Text>
        <Text>{data['precip']}</Text>
      </View>

    </View>
  );
}

Weather.propTypes = {
  navigation: PropTypes.object,
};

Weather.defaultProps = {
  navigation: {},
};

module.exports = Weather;
