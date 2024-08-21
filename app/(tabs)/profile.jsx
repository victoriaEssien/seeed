import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import CustomMenuButton from '../../components/CustomMenuButton'

const Profile = () => {
  return (
    <SafeAreaView>
        <ScrollView>
        <View className="w-full min-h-[85vh] justify-center px-5 my-6">
            <CustomMenuButton 
                title="Create Virtual Account"
                handlePress={() => router.push('/create-virtual-account')}
                containerStyles='mt-10'
                // isLoading={isSubmitting}
          />
        </View>

        </ScrollView>
    </SafeAreaView>
  )
}

export default Profile