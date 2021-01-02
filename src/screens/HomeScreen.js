import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ButtonStyle from '../UI/Buttons/Buttons';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hi Katleho!</Text>
      <Button 
        onPress={() => {
          return props.navigation.navigate('Components');
        }} 
        title="Go to components demo" />
      <TouchableOpacity
        onPress={() => {
          return props.navigation.navigate('Lists');
        }}>
        <Text style={ButtonStyle.textButton}>Lists</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          return props.navigation.navigate('CustomImages');
        }}>
        <Text style={ButtonStyle.textButton}>Images</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          return props.navigation.navigate('Counter');
        }}>
        <Text style={ButtonStyle.textButton}>Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          return props.navigation.navigate('FormContact');
        }}>
        <Text style={ButtonStyle.textButton}>Form</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          return props.navigation.navigate('Colour');
        }}>
        <Text style={ButtonStyle.textButton}>Add Colours</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('ChangeColours')} >
        <Text style={ButtonStyle.textButton}>Change Colour</Text>
      </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

