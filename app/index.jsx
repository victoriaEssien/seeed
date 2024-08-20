import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import CustomButton from "../components/CustomButton";

export default function App() {
    return (
        <SafeAreaView className='bg-[#fff] h-full'>
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="w-full min-h-[95vh] justify-center px-5">
                    <Image 
                        source={images.onboardingImg} 
                        className="w-[331px] h-[246px]"
                        resizeMode="contain"
                    />

                    <View className="relative mt-12">
                        <Text className="text-2xl font-psemibold text-primary-600 text-left leading-[42px]">Dedicated to your Faithful Giving</Text>
                    </View>

                    <Text className="text-base font-rregular text-[#333] text-left leading-7 mt-4">Keep your tithes separate and secure. Easily save and track your tithes without mixing them with your other funds.
                    </Text>
                    <CustomButton 
                        title="Get Started"
                        handlePress={() => router.push('/sign-up')}
                        containerStyles="w-full mt-12"
                    />

                    <View className="pt-10 justify-center items-center flex-row gap-2">
                        <Text className="text-base text-[#333] font-rregular text-center">Already have an account?</Text>
                        <Link href='/sign-in' className='text-[17px] text-[#5DADE2] font-rbold'>Log in</Link>
                    </View>
                </View>
            </ScrollView>
            {/* Display/show device status bar e.g time, battery etc */}
            <StatusBar backgroundColor="#1A1A2E" style="light"/>
        </SafeAreaView>
    );
}