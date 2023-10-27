import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import EventCard from '../components/Cards/EventCard';
import { Events } from '../utils/EventCard';

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header />
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

export default Home;
