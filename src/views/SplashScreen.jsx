import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Logo from '../../assets/images/Calque 3.svg';
import { useAppContext } from '../context/ContextProvider'; // Import the context

const SplashScreen = ({ navigation }) => {
  const { splashScreenVisible } = useAppContext();

  // Conditionally render the SplashScreen
  if (splashScreenVisible) {
    return (
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
      </View>
    );
  }

  // After the splash screen duration, navigate to the DrawerNavigator
  navigation.navigate('Home');
  return null; // This will prevent rendering anything after navigation
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
