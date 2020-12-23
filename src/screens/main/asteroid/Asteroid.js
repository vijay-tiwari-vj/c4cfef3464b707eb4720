import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity, Image, View, StatusBar, ScrollView } from "react-native";
import { Content, Input, Item } from "native-base";

import Button from "../../../components/button";

import Toast from "../../../utils/Toast";
import Validator from "../../../utils/ValidateUtil";

import { asteroidService } from "../../../services";

import  { colors } from "../../../styles";

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.palePurple,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    borderRadius: 16,
    backgroundColor: colors.white,
    padding: 10,
    marginVertical: 10
  },
  input: {
    marginVertical: 10,
    borderRadius: 16,
  },
  buttonContainer: {
    marginTop: 10
  },
  asteroidInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

function Asteroid({ navigation }) {
  const [isLoading, setIsLoading] = React.useState();
  const asteroid  = navigation.getParam('asteroidData');

  return (
    <View style={{ flex: 1, backgroundColor: colors.palePurple }}>
      <ScrollView contentContainerStyle={styles.root}>
        <StatusBar backgroundColor={colors.secondaryBlue} barStyle='light-content' />

        {
          asteroid.map(({ name, nasa_jpl_url, is_potentially_hazardous_asteroid }) => (
            <View key={name} style={styles.inputContainer}>
              <Text> Name - {name}</Text>
              <Text> {nasa_jpl_url} </Text>
              <Text> {is_potentially_hazardous_asteroid} </Text>

              {/* <View style={styles.buttonContainer}>
                <Button isLoading={isLoading} onPress={() => handleSubmit(random)} buttonTitle='Random Asteroid' />
              </View> */}

            </View>
          ))
        }
      </ScrollView>
      
    </View>
  );
}

Asteroid.propTypes = {
  navigation: PropTypes.object,
};

Asteroid.defaultProps = {
  navigation: {},
};

module.exports = Asteroid;
