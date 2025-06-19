import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Centered Welcome Message */}
      <View style={styles.centerContent}>
        <Text style={styles.title}>Welcome To</Text>
        <Text style={styles.subtitle}>
          Create an account and access thousands of cool stuffs
        </Text>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => alert('Get Started Pressed!')}
      >
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>

      {/* Bottom Links */}
      <View style={styles.bottomContainer}>
        <Text style={styles.text}>Do you have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}> Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between', // Divide sections vertically
    alignItems: 'center', // Center elements horizontally
    padding: 20,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
  getStartedButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  getStartedText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
  linkText: {
    fontSize: 14,
    color: '#007bff',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default WelcomeScreen;



