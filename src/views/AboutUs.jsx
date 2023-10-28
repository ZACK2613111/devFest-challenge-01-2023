import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import AboutUsLogo from '../../assets/images/Group 7.svg';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const AboutUs = () => {
  
  const navigation = useNavigation(); // Initialize navigation

  const handleHomePress = () => {
    navigation.navigate('Home'); // Navigate to the "AboutUs" screen
  };
  
  return (
    <View>
    <Header onPress={handleHomePress} />
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
      <Image source={AboutUsLogo} style={styles.logo} />
      <Text style={styles.text}>
      GDG Algiers is a local community situated at the Higher National School of Computer Science in Algiers (ESI ex INI), Algiers, Algeria. It is part of the big global community of developers "Google Developers Group," an inclusive environment where everyone and anyone interested in tech is welcome to join. Our community gathers motivated young students with similar interests in Google technologies and devoted developers.
        </Text>
        </ScrollView>
        </View>
      </View>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    width: windowWidth * 0.8, // Adjust the width as needed
    height: windowWidth * 0.1, // Adjust the height as needed
    marginVertical: 25,
  },
  text: {
    fontFamily: 'DevFest',
    fontSize: windowWidth * 0.055, // Adjust the font size as needed
    fontWeight: '500', // Set to semi-bold
    lineHeight: windowWidth * 0.08, // Adjust line height as needed
    letterSpacing: 0,
    textAlign: 'left',
    padding: 20,
    marginTop: 10, // Add margin top to the text
  },
});

export default AboutUs;
