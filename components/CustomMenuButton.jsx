

import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomMenuButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-[#d5dadc] rounded-lg min-h-[57px] justify-center items-center text-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
        disabled={isLoading}
        >
      <Text className={`text-lg text-[#fff] font-rmedium ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomMenuButton