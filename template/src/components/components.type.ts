import React from "react";
import { ViewProps } from 'react-native';

export interface ScreenType extends ViewProps {
  children?: React.JSX.Element;
  verticalCenter?: boolean;
  horizontalCenter?: boolean;
  header?: React.JSX.Element;
  safeAreaBackgroundColor?: string;
}

export interface HeaderType {
  title?: string;
  customMenu?: React.JSX.Element | React.JSX.Element[];
  backButtonColor?: string;
  backButton?: boolean;
  titleColor?: string;
}
