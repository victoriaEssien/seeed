import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const { email, password } = form;
    if (!email || !password) {
      alert('Please fill in all fields');
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    console.log('Submit button pressed');
    console.log('Form Data Before Submission:', form);
    setIsSubmitting(true);
    try {
      const response = await axios.post('https://penny-wise-7m67.onrender.com/api/auth/login', form);

      console.log('API Response:', response.data);
      if (response.data.success) {
        alert('Login successful');
        // Handle successful login, e.g., save token, navigate to the dashboard
        // router.push('/dashboard'); // Replace with your desired route
        setForm({
          email: '',
          password: ''
        });
      } else {
        alert(response.data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'An error occurred during login');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-[#fff] h-full">
      <ScrollView>
        <View className="w-full min-h-[85vh] justify-center px-5 my-6">
          <Text className="text-2xl font-psemibold text-primary-600 text-left leading-[42px]">Long time no see!</Text>
          <Text className="text-base font-rregular text-primary-500 leading-7 mb-8">Log in to access your data and continue using our secure and easy-to-use features.</Text>

          <FormField 
            title="Email Address"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-6"
            keyboardType="email-address"
          />

          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-6"
          />

          <CustomButton 
            title="Log in"
            handlePress={handleLogin}
            containerStyles='mt-10'
            isLoading={isSubmitting}
          />

          <View className="pt-10 justify-center items-center flex-row gap-2">
            <Text className="text-base text-primary-500 font-rregular text-center">Don't have an account?</Text>
            <Link href='/sign-up' className='text-[17px] text-accent-600 font-rbold'>Sign up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
