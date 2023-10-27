import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import TopRight from "../../../assets/images/AdsCard/2.png";
import TopLeft from "../../../assets/images/AdsCard/3.png";
import BottomLeft from "../../../assets/images/AdsCard/1.png";
import BottomRight from "../../../assets/images/AdsCard/4.png";

const { width, height } = Dimensions.get('window');

const AdsCard = ({ description, title }) => {
  const cardWidth = width * 0.9; // Adjust the percentage as needed
  const cardHeight = cardWidth * (179 / 378); // Maintain the aspect ratio

  const topRightWidth = cardWidth * (41.03 / 378);
  const topRightHeight = cardHeight * (25.72 / 179);
  const topRightTop = cardHeight * (8 / 179);
  const topRightLeft = cardWidth * (317 / 378);

  const topLeftWidth = cardWidth * (114.57 / 378);
  const topLeftHeight = cardHeight * (57.54 / 179);
  const topLeftTop = cardHeight * (-1 / 179);

  const bottomRightWidth = cardWidth * (77.92 / 378);
  const bottomRightHeight = cardHeight * (66.36 / 179);
  const bottomRightTop = cardHeight * (113 / 179);
  const bottomRightLeft = cardWidth * (301 / 378);

  const bottomLeftWidth = cardWidth * (30 / 378);
  const bottomLeftHeight = cardHeight * (19.35 / 179);
  const bottomLeftTop = cardHeight * (136 / 179);
  const bottomLeftLeft = cardWidth * (48 / 378);

  return (
    <View style={[styles.container, { height: cardHeight }]}>
      <Image source={TopRight} style={[styles.topRight, { width: topRightWidth, height: topRightHeight, top: topRightTop, left: topRightLeft }]} />
      <Image source={TopLeft} style={[styles.topLeft, { width: topLeftWidth, height: topLeftHeight, top: topLeftTop }]} />
      <Image source={BottomRight} style={[styles.bottomRight, { width: bottomRightWidth, height: bottomRightHeight, top: bottomRightTop, left: bottomRightLeft }]} />
      <Image source={BottomLeft} style={[styles.bottomLeft, { width: bottomLeftWidth, height: bottomLeftHeight, top: bottomLeftTop, left: bottomLeftLeft }]} />
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 10,
    padding: 20,
    width: '90%', // Adjust the percentage as needed
    alignItems: 'center', // Center the content horizontally
    justifyContent: 'center', // Center the content vertically
    fontFamily: 'DevFest', // Use the 'DevFest' font
  },
  description: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '400',
    textAlign: 'center', // Center the description text
    marginBottom: 10, // Add margin between description and title
  },
  title: {
    color: '#FFBA00',
    fontWeight: '500',
    fontSize: 22,
    lineHeight: 28,
    textAlign: 'center', // Center the title text
  },
  topRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: [{ rotate: '11.28deg' }], // Rotate the image
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  bottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    transform: [{ rotate: '-23.89deg' }], // Rotate the image
  },
});

export default AdsCard;
