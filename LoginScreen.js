import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Both fields are required.');
      return;
    }
    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }
    Alert.alert('Success', `Logged in with Email: ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In Now</Text>
      <Text style={styles.subtitle}>
        Please login to continue using our app
      </Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={!passwordVisible}
        autoCapitalize="none"
        value={password}
        onChangeText={setPassword}
      />

      {/* Hide/Show Password Button */}
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => setPasswordVisible(!passwordVisible)}
      >
        <Text style={styles.toggleButtonText}>
          {passwordVisible ? 'Hide Password' : 'Show Password'}
        </Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      {/* Forgot Password */}
      <TouchableOpacity
        onPress={() => Alert.alert('Forgot Password', 'Reset your password')}
      >
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  toggleButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  toggleButtonText: {
    color: '#007bff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#007bff',
  },
});

export default LoginScreen;


