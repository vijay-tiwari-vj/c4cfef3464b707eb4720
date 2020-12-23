import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity, Image, View, StatusBar } from "react-native";
import { Content, Input, Item } from "native-base";

import Button from "../../../components/button";

import Toast from "../../../utils/Toast";
import Validator from "../../../utils/ValidateUtil";

import { asteroidService, randomService } from "../../../services";

import { colors } from "../../../styles";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.blueGrey,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    borderRadius: 16,
    backgroundColor: colors.white,
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    width: '80%',
    height: '60%'
  },
  input: {
    marginVertical: 10,
    borderRadius: 16,
  },
  buttonContainer: {
    marginTop: 70
  }
});

function Home({ navigation }) {
  const [isLoading, setIsLoading] = React.useState();
  const [asteroid, setAsteroid] = React.useState();
  const [ randomAsteroid, setRandomAsteroid] = React.useState({});
  const [ firstTime, setFirstTime] =  React.useState(false);

  function handleAsteroidResponse(asteroidData) {
    navigation.navigate('Asteroid', { asteroidData });
  }

  function handleRandom() {
    setIsLoading(true);
    randomService
      .getRandom()
      .then(asteroid => {
        setRandomAsteroid(asteroid);
        setFirstTime(true);
      })
      .catch(Toast.error)
      .finally(() => setIsLoading(false));
  };

  function handleSubmit(id) {
    if (!Validator.validateFeild(id)) return Toast.warning("please fill the asteroid ID");
    setIsLoading(true);
    asteroidService
      .getAsteroid(asteroid)
      .then(handleAsteroidResponse)
      .catch(Toast.error)
      .finally(() => setIsLoading(false));
  };


  return (
    <View style={styles.root}>
      <StatusBar backgroundColor={colors.secondaryBlue} barStyle='light-content' />

      <View style={styles.inputContainer}>

        <Item rounded style={styles.input} >
          <Input
            placeholder='Enter Asteroid ID'
            placeholderTextColor={colors.warmGrey}
            value={asteroid}
            onChangeText={asteroid => setAsteroid(asteroid)}
          />
        </Item>
        <View style={styles.buttonContainer}>
          <Button isLoading={isLoading} onPress={handleSubmit} buttonTitle='SUBMIT' />
        </View>

        <View style={styles.buttonContainer}>
          <Button isLoading={isLoading} onPress={() => handleRandom()} buttonTitle='Random Asteroid' />
        </View>

      </View>
      <View>
      {
        firstTime
          ? (
          <View style={styles.asteroidInfo}>
            <Text style={{ fontSize: 16 }}>Asteroid name: {randomAsteroid.name.substring(0, 25) + "..."}</Text>
            <Text style={{ fontSize: 16 }}> {randomAsteroid.nasa_jpl_url}</Text>
            <Text style={{ fontSize: 12 }}> {randomAsteroid.is_potentially_hazardous_asteroid}</Text>
          </View>
        ) : (
          <View style={styles.asteroidInfo}>
            <Text> Select a random asteroid </Text>
          </View>
        )
      }
      </View>

    </View>
  );
}

Home.propTypes = {
  navigation: PropTypes.object,
};

Home.defaultProps = {
  navigation: {},
};

module.exports = Home;
