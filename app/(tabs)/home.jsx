import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Home = () => {
    const [user, setUser] = useState(null);
    const [wallet, setWallet] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            const token = await AsyncStorage.getItem('accessToken');
            if (token) {
                try {
                    const config = {
                        method: 'get',
                        url: 'https://penny-wise-7m67.onrender.com/api/account/profile',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        },
                    };
                    const response = await axios(config);
                    setUser(response.data.data);
                } catch (error) {
                    console.error('Failed to fetch user profile:', error.response?.data || error.message);
                }
            }
        };

        const fetchWalletInfo = async () => {
            const token = await AsyncStorage.getItem('accessToken');
            if (token) {
                try {
                    const config = {
                        method: 'get',
                        url: 'https://penny-wise-7m67.onrender.com/api/wallet/info',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        },
                    };
                    const response = await axios(config);
                    setWallet(response.data.data);
                } catch (error) {
                    console.error('Failed to fetch wallet info:', error.response?.data || error.message);
                }
            }
        };

        fetchUserProfile();
        fetchWalletInfo();
    }, []);

    return (
        <SafeAreaView className="bg-[#fff] h-full">
            <ScrollView>
                <View className="w-full h-[95vh] px-5 justify-center">
                    {user ? (
                        <>
                            <Text>Hello, {user.firstName}</Text>
                            {wallet ? (
                                <View className="mt-6">
                                    <Text>Account Number: {wallet.account_number}</Text>
                                    <Text>Bank: {wallet.account_bank}</Text>
                                    <Text>Balance: ₦{wallet.balance}</Text>
                                </View>
                            ) : (
                                <Text>Loading wallet info...</Text>
                            )}
                        </>
                    ) : (
                        <Text>Loading user info...</Text>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
