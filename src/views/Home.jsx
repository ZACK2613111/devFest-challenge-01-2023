import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook
import Header from '../components/Header';
import Field from '../components/Field';
import EventCard from '../components/Cards/EventCard';
import AdsCard from '../components/Cards/AdsCard';
import { Events } from '../utils/EventCard';
import { Fields } from '../utils/Fields';

const Home = () => {
  const navigation = useNavigation(); // Initialize navigation

  const handleAboutUsPress = () => {
    navigation.navigate('AboutUs'); // Navigate to the "AboutUs" screen
  };

  return (
    <View style={styles.container}>
      <Header onPress={handleAboutUsPress} /> {/* Pass the onPress function to Header */}
      <AdsCard title="HERE" description="You awaited Event Finally" />
      <Text style={styles.fieldTitle}>Our Fields</Text>
      <View>
        <FlatList
          data={Fields}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Field
              icon={item.icon}
              backgroundColor={item.bgColor}
              title={item.fieldTitle}
            />
          )}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.eventsContainer}>
        {Events.map((event, index) => (
          <EventCard
            key={index}
            logo={event.logo}
            title={event.title}
            description={event.description}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fieldTitle: {
    fontFamily: 'DevFest',
    fontSize: 22,
    fontWeight: '400',
    lineHeight: 22,
    margin: 10,
  },
  eventsContainer: {
    flex: 1,
  },
  flatListContent: {
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Home;
