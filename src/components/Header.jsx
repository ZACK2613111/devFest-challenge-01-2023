import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../../assets/images/Logo.svg';
import Icon from '../../assets/images/menu-02.svg';

const Header = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onPress}>
          <Image source={Icon} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Adjust the alignment
    padding: 10,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  logoContainer: {
    flex: 1, // Make the logo container flex to center the logo
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 10, // Add margin to the icon
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default Header;
