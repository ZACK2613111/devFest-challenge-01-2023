import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import EventCard from '../components/Cards/EventCard';
import { Events } from '../utils/EventCard';
import AdsCard from '../components/Cards/AdsCard';

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header />
      <View style={styles.adsContainer}>
        <AdsCard title="HERE" description="You awaited Event Finally" />
      </View>
      {Events.map((event) => (
        <EventCard
          logo={event.logo}
          title={event.title}
          description={event.description}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  adsContainer: {
    alignItems: 'center', // Center the AdsCard horizontally
  },
});

export default Home;
