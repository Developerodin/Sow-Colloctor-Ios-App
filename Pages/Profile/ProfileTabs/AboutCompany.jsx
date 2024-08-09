import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Block, Input, theme, Button } from "galio-framework";
export const AboutCompany = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.content}>
      {/* <Text style={styles.heading}>About Us</Text> */}
      <Text style={styles.paragraph}>
      "Scrap On Wheels" is a jaipur based startup who is looking forward to build a hygienic and scrap free society. Scrap On Wheels has its hand in this field from last 3 years and now we are building a block of online platform. We are looking to serve our nation folks with a GO Green Environment .
Our Organisation is an absolute blend of two words Junk & art, Junk goes for household scrap and industrial scrap and art is the creative way of selling your scrap through our online application . We are offering customer and vendors a platform , through our 'B2B & B2C' application & a solution for communication between customers and vendors .
      </Text>

      {/* <Text style={styles.subheading}>Our Story</Text>
      <Text style={styles.paragraph}>
        Scrap On Wheels was founded in [Year] by a group of environmentally
        conscious entrepreneurs who saw the need for a modern and convenient
        scrap collection service. With backgrounds in recycling, logistics,
        and technology, our founders set out to transform the way scrap
        materials are handled.
      </Text> */}

      {/* Add more sections like "What We Do," "Why Choose Us," "Our Vision," and "Contact Us" here */}
    </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  content: {
    // flex: 1,
    // justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
});