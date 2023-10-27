import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Field = ({ icon, backgroundColor, title }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.iconContainer}>
        {icon && <Image source={icon} style={styles.icon} />}
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 97,
    borderRadius: 8, // Add a border radius to round the corners
  },
  iconContainer: {
    position: 'relative',
  },
  icon: {
    width: 32,
    height: 32,
    position: 'absolute',
    top: 17,
    left: 54,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default Field;
