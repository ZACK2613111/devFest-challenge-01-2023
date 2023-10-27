import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Logo from '../../assets/images/Logo.svg';
import Icon from '../../assets/images/menu-02.svg';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={Icon} style={styles.icon} />
      <Image source={Logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
    marginLeft: 'auto', // Push the logo to the center
    marginRight: 'auto', // Push the logo to the center
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 10, // Add a margin to push the icon to the left
  },
});

export default Header;
