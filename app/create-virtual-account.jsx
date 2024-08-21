import { View, Text, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../components/FormField';
import CustomButton from '../components/CustomButton';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateVirtualAccount = () => {
  const [form, setForm] = useState({ bvn: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateAccount = async () => {
    try {
      setIsLoading(true);
      const accessToken = await AsyncStorage.getItem('accessToken'); // Get the access token from AsyncStorage
      const config = {
        method: 'post',
        url: 'https://penny-wise-7m67.onrender.com/api/account/new/virtual-account',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({ bvn: form.bvn }),
      };

      const response = await axios(config);
      console.log('API Response:', response.data);

      Alert.alert('Success', `Virtual Account Created: ${response.data.data.account_number} at ${response.data.data.bank_name}`);
    } catch (error) {
      console.error('Error creating virtual account:', error);
      Alert.alert('Error', 'Failed to create virtual account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView className="bg-[#fff] h-full">
      <ScrollView>
        <View className="w-full min-h-[85vh] justify-center px-5 my-6">
          <Text>Create Virtual Account</Text>

          <FormField 
            title="BVN"
            value={form.bvn}
            handleChangeText={(e) => {
              console.log('Enter your BVN...:', e);
              setForm({ ...form, bvn: e });
            }}
            otherStyles="mt-6"
          />

          <CustomButton 
            title="Create Virtual Account"
            handlePress={handleCreateAccount}
            containerStyles='mt-10'
            isLoading={isLoading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CreateVirtualAccount;
