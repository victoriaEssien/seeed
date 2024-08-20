import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import icons from '../constants/icons';

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base font-rregular text-primary-500">{title}</Text>

      <View className="w-full h-[50px] px-4 bg-[#fff] border border-black-700 rounded-lg focus:border-accent-600 items-center flex-row">
        <TextInput 
          className="flex-1 text-primary-500 font-rregular text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#C8C8C8'
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
          {...props} // Spread additional props
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image source={!showPassword ? icons.eyeClosed : icons.eyeOpen} className="w-6 h-6" resizeMode='contain' />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
