import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Screen from 'components/Screen';
import { useNavigation } from '@react-navigation/native';
import Header from 'components/Header';
import { SPLASHSCREEN_TIMEOUT } from 'constants/config';

const Splashscreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Dashboard');
    }, SPLASHSCREEN_TIMEOUT);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Screen header={<Header title="Hello" />}>
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl font-bold">Splash Screen</Text>
      </View>
    </Screen>
  );
};

export default Splashscreen;
