import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import { HeaderType } from './components.type';

export default function Header({
  title = '',
  customMenu = <></>,
  backButtonColor = '#000',
  titleColor = '#000',
  backButton = true,
}: HeaderType) {
  const navigation = useNavigation();
  return (
    <View className="h-[50px] w-full bg-white">
      <View className="flex-1 flex-row items-center justify-center">
        <View className="justify-center items-start h-[50px] w-[50px] absolute left-0">
          {backButton ? (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}>
              <FeatherIcons
                name="chevron-left"
                color={backButtonColor}
                size={38}
              />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
        <View className="flex-1 justify-center items-center px-[100px]">
          <Text
            className="text-white font-feather text-[18px] font-bold"
            style={{ color: titleColor }}
            numberOfLines={1}>
            {title}
          </Text>
        </View>

        <View
          className="flex-row justify-end items-center h-[50px] w-[100px] absolute right-0"
          style={{ gap: 2 }}>
          {customMenu}
        </View>
      </View>
    </View>
  );
}
