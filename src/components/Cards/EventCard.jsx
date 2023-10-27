import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const EventCard = ({ logo, title, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },
  logoContainer: {
    flex: 2, // Adjust the flex value to give the image container more width
    marginRight: 10, // Add margin to separate the image from text
  },
  logo: {
    width: 120, // Make the image bigger as needed
    height: 120,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: 'DevFest', // You should define the 'DevFest' font
    fontWeight: '500',
    color: '#2B82FB',
    fontSize: 28,
    lineHeight: 32,
  },
  description: {
    fontSize: 11, // Updated font size
    lineHeight: 22, // Updated line height
    fontWeight: '500', // Updated font weight
},
});

export default EventCard;
