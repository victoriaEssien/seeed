import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router'; // Import useRouter for navigation

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const { email, firstName, lastName, phoneNumber, password } = form;
    if (!email || !firstName || !lastName || !phoneNumber || !password) {
      alert('Please fill in all fields');
      return false;
    }
    // Add more specific validations as needed
    return true;
  };

  const handleSignUp = async () => {
    if (!validateForm()) return;
  
    console.log('Submit button pressed');
    console.log('Form Data Before Submission:', form);
    setIsSubmitting(true);
    try {
      const response = await axios.post('https://penny-wise-7m67.onrender.com/api/auth/register', form);
      
      console.log('API Response:', response.data);
      if (response.data.success) {
        alert('Registration successful');
        setForm({
          email: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
          password: ""
        });
        router.push('/sign-in');
      } else {
        alert(response.data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration failed:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'An error occurred during registration');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-[#fff] h-full">
      <ScrollView>
        <View className="w-full min-h-[85vh] justify-center px-5 my-6">
          <Text className="text-2xl font-psemibold text-primary-600 text-left leading-[42px]">Create your Seeed account</Text>
          <Text className="text-base font-rregular text-primary-500 leading-7 mb-8">Sign up to securely manage your PINs, wallet addresses, and secret keys with ease.</Text>

          <FormField 
            title="First Name"
            value={form.firstName}
            handleChangeText={(e) => {
              console.log('First Name:', e);
              setForm({ ...form, firstName: e });
            }}
            otherStyles="mt-6"
          />

          <FormField 
            title="Last Name"
            value={form.lastName}
            handleChangeText={(e) => {
              console.log('Last Name:', e);
              setForm({ ...form, lastName: e });
            }}
            otherStyles="mt-6"
          />

          <FormField 
            title="Email Address"
            value={form.email}
            handleChangeText={(e) => {
              console.log('Email:', e);
              setForm({ ...form, email: e });
            }}
            otherStyles="mt-6"
            keyboardType="email-address"
          />

          <FormField 
            title="Phone Number"
            value={form.phoneNumber}
            handleChangeText={(e) => {
              console.log('Phone Number:', e);
              setForm({ ...form, phoneNumber: e });
            }}
            otherStyles="mt-6"
            keyboardType="phone-pad"
          />

          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => {
              console.log('Password:', e);
              setForm({ ...form, password: e });
            }}
            otherStyles="mt-6"
          />


          <CustomButton 
            title="Create Account"
            handlePress={handleSignUp}
            containerStyles='mt-10'
            isLoading={isSubmitting}
          />

          <View className="pt-10 justify-center items-center flex-row gap-2">
            <Text className="text-base text-primary-500 font-rregular text-center">Already have an account?</Text>
            <Link href='/sign-in' className='text-[17px] text-accent-600 font-rbold'>Log in</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
