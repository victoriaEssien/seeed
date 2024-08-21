import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'

const ForgotPassword = () => {
  return (
    <SafeAreaView className="bg-[#fff] h-full">
        <ScrollView>
        <View className="w-full min-h-[85vh] justify-center px-5 my-6">
            <Text className="text-2xl font-psemibold text-primary-600 text-left leading-[42px]">Forgot your password?</Text>
            <Text className="text-base font-rregular text-primary-500 leading-7 mb-8">Enter your email and we'll send you a code to reset your password.</Text>
            
            <FormField 
                title="Email Address"
                // value={form.email}
                // handleChangeText={(e) => setForm({ ...form, email: e })}
                otherStyles="mt-6"
                keyboardType="email-address"
            />

            <CustomButton 
                title="Send Code"
                // handlePress={handleLogin}
                containerStyles='mt-10'
                // isLoading={isSubmitting}
            />

        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default ForgotPassword