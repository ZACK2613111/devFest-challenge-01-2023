import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Field = ({ icon, backgroundColor, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.iconContainer, { backgroundColor }]}>
        <Image source={icon} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 97,
    borderRadius: 8,
    margin: 10, // Add margin to center vertically and horizontally
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    backgroundColor: '#FFFFFF',
  },
  iconContainer: {
    width: 32,
    height: 32,
  },
  icon: {
    width: 32,
    height: 32,
  },
  title: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    fontFamily: 'DevFest',
    color: '#000000',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default Field;
