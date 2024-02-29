import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  Button,
  TextInput,
  ScrollView,
  Dimensions,
  Alert,
  TouchableOpacity,
} from 'react-native';

import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../App'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'AppPro'>

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AppPro = ({ navigation }: HomeProps) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const users = [
    { email: "shreyash.b@sankeysolutionscom", password: "Shrey@12" },
    { email: "ashwin.s@sankeysolutionscom", password: "ash@1005" },
  ];

  const handleLogin = () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Email and password fields cannot be blank.');
    } else if (form.password.length !== 8) {
      Alert.alert('Error', 'Password should be 8 characters long.');
    } else {
      const matchedUser = users.find(user => user.email === form.email && user.password === form.password);
      if (matchedUser) {
        navigation.push('MovieScreen', {
          email: form.email,
          productId: '86' 
        });
      } else {
        Alert.alert('Error', 'Invalid email or password.');
      }
    }
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Please contact support for password recovery.');
    // Navigate to the ForgotPassword screen if needed
    // navigation.push('ForgotPassword');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={require('./login.png')} style={styles.headerImg} />
          </View>
          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Email address</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={(email) => setForm({ ...form, email })}
                placeholder="Email-id"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.email}
              />
            </View>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                autoCorrect={false}
                onChangeText={(password) => setForm({ ...form, password })}
                placeholder="Password"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={form.password}
              />
            </View>
            <View style={styles.formAction}>
              <Button 
                title='Submit'
                onPress={handleLogin}
              />
            </View>
            <View style={styles.forgotPassword}>
              <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E5E4E2', //#dcdcdc
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: windowHeight * 0.05,
  },
  header: {
    marginBottom: windowHeight * 0.05,
  },
  headerImg: {
    width: windowWidth * 0.23,
    height: windowWidth * 0.23,
  },
  form: {
    width: '100%',
  },
  input: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: windowWidth * 0.05,
    fontWeight: '700',
    color: '#222',
    marginBottom: 10,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 15,
    fontSize: windowWidth * 0.04,
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
  },
  formAction: {
    marginTop: 20,
    marginBottom: 10,
  },
  forgotPassword: {
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontSize: windowWidth * 0.04,
    textDecorationLine: 'underline',
    textAlign:'center',
    padding:10,
    color:'black',
  },
});

export default AppPro;

