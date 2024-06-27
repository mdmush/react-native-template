import { View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScreenType } from './components.type';

export default function Screen({
  children,
  style,
  verticalCenter = false,
  horizontalCenter = false,
  header = <></>,
  safeAreaBackgroundColor = '#fff',
}: ScreenType) {
  const insets = useSafeAreaInsets();
  return (
    <>
      <View
        style={{
          height: insets.top,
          width: '100%',
          backgroundColor: safeAreaBackgroundColor,
        }}
      />
      <View
        className={`flex-1 
        ${verticalCenter ? 'justify-center' : ''} 
        ${horizontalCenter ? 'items-center' : ''}`}
        style={[
          {
            paddingBottom: insets.bottom,
          },
          style,
        ]}>
        {header}
        {children}
      </View>
    </>
  );
}
