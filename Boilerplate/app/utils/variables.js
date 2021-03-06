import { responsiveSize } from './utils';

export const baseColors = {
  black: 'black',
  white: 'white',
  gray: '#abadad',
  orange: 'orange',
  yellow: 'yellow',
  blackRussian: '#0f0f11',
  blackPearl: '#1c1d1e',
  zambezi: '#5f5f5f',
  transparent: 'transparent',
  red: 'red',
  green: 'green',
  appGreenColor: '#54b051',
  appRedColor: '#ff0032',
  appGreyColor: '#1e1e1e',
  fontGrayColor: '#8c8c8c',
  fontYellowColor: '#f68d38',
  seperatorColor: '#373738',
  placeHolderColor: '#787878',
  appHeaderBackgroundColor: '#151515',
  tableHeaderColor: '#a5a5a5',
};

export const UIColors = {
  primary: '#474747',
  secondary: '#333333',
  primaryText: baseColors.white,
  secondaryText: baseColors.black,
  placeholderText: '#545252',
  focused: 'yellow',
  danger: baseColors.red,
  warning: baseColors.orange,
  success: baseColors.green,
  failure: baseColors.red,
  separator: baseColors.blackPearl,
  border: baseColors.blackPearl,
  tableHeader: baseColors.zambezi,
  tableRow: baseColors.blackRussian,
  columnText: baseColors.zambezi,
  tableHeaderText: baseColors.gray,
  transparentColor: baseColors.transparent,
  defaultTextColor: baseColors.gray,
  defaultBlack: baseColors.black,
  defaultWhite: baseColors.white,
  defaultShadowColor: 'rgba(0, 0, 0, 0.6)',
  appGreenColor: baseColors.appGreenColor,
  appRedColor: baseColors.appRedColor,
  appGreyColor: baseColors.appGreyColor,
  fontGrayColor: baseColors.fontGrayColor,
  fontYellowColor: baseColors.fontYellowColor,
  seperatorColor: baseColors.seperatorColor,
  placeHolderColor: baseColors.placeHolderColor,
  appHeaderBackgroundColor: baseColors.appHeaderBackgroundColor,
  tableHeaderColor: baseColors.tableHeaderColor,

  // Text Colors
  // / NewApp theme
  newAppFontBlueColor: '#0972C7',
  newAppFontPurpleColor: '#AB4FAE',
  newAppFontLightPinkColor: '#ff7fff',
  newAppFontWhiteColor: 'white',
  newAppFontBlackColor: 'black',
  // New App Theme
  newAppBackgroundColorWhite: baseColors.white,
  newAppBackgroundColorBlack: 'black',
  newAppPurpleColor: '#A239A6',
  newAppButtonBlueColor: '#005AFF',
  newAppWhiteBorderColor: 'white',
  newAppBlackBorderColor: 'black',
  newAppDirtyYelloeColor: '#dabb58',
  newAppDirtyGreenColor: '#05ffab',
  newAppDividerLineBlackColor: '#1f1f1f',
  newAppLoaderWhiteColor: '#FFFFFF9F',
  newAppDirtyGreenCOlor: '#9cb036',
  newAppBlackishColour: '#130f0e',

  newAppBlackTextOnGrayColor: '#515151',
  newAppGrayContentColor: '#888888',
  newAppBackgroundGrayColor: '#474747',
  newAppButtonGreenBackgroundColor: '#14805E',
  newAppButtonGreenBackgroundColorDisabled: '#5d9985',
  newAppButtonGrayColor: '#545454',
  newAppYellowColor: 'yellow',
  newAppYellowDisabledColor: '#dee0a8',
  newAppHeaderColorGreen: '#14805E',
  newAppFooterColor: '#474747',
  newAppGrayFontTextColor: '#DDDDDD',
  newAppBetSlipContainerColor: '#505050',
};

export const fontSizes = {
  mini: responsiveSize(8),
  tiny: responsiveSize(10),
  extraExtraSmall: responsiveSize(12),
  extraSmall: responsiveSize(14),
  small: responsiveSize(16),
  medium: responsiveSize(18),
  mediumLarge: responsiveSize(20),
  large: responsiveSize(22),
  extraLarge: responsiveSize(24),
  extraLarger: responsiveSize(28),
  extraExtraLarge: responsiveSize(32),
  giant: responsiveSize(36),
  iosIcons: responsiveSize(32),
  androidCloseIcon: responsiveSize(22),
  androidCheckmarkIcon: responsiveSize(26),
};

export const spacing = {
  zero: responsiveSize(0),
  border: responsiveSize(1),
  borderDouble: responsiveSize(2),
  extraExtraSmall: responsiveSize(3),
  extraSmall: responsiveSize(5),
  small: responsiveSize(8),
  semiMedium: responsiveSize(10),
  medium: responsiveSize(12),
  mediumLarge: responsiveSize(16),
  large: responsiveSize(20),
  extraLarge: responsiveSize(24),
  extraExtraLarge: responsiveSize(30),
};

export const itemSizes = {
  avatarCircleSmall: responsiveSize(44),
  avatarCircleMedium: responsiveSize(54),
  avatarCircleLarge: responsiveSize(70),
  iconSmall: responsiveSize(18),
  iconExtraSmall: responsiveSize(14),
  iconExtraExtraSmall: responsiveSize(12),
  iconMedium: responsiveSize(20),
  iconLarge: responsiveSize(22),
  iconExtraLarge: responsiveSize(24),
  defaultButtonHeight: responsiveSize(40),
  defaultLargeButtonHeight: responsiveSize(56),
  defaultSmallButtonHeight: responsiveSize(36),
  extraSmallButtonHeight: responsiveSize(30),
  defaultHeight: 40,
  titleHeight: 20,
  defaultWidth: 30,
  mediumWidth: 60,
  largeWidth: 80,
  itemWidth: responsiveSize(50),
  headerSize: responsiveSize(65),
  headerMediumSize: responsiveSize(80),
  itemSizes280: responsiveSize(280),
};

export const fontWeights = {
  thin: '100',
  light: '300',
  book: '400',
  medium: '500',
  bold: '700',
  black: '900',
};

export const fontName = {
  sourceSansProBlack: 'SourceSansPro-Black',
  sourceSansProBlackItalic: 'SourceSansPro-BlackItalic',
  sourceSansProBold: 'SourceSansPro-Bold',
  sourceSansProBoldItalic: 'SourceSansPro-BoldItalic',
  sourceSansProExtraLight: 'SourceSansPro-ExtraLight',
  sourceSansProExtraLightItalic: 'SourceSansPro-ExtraLightItalic',
  sourceSansProItalic: 'SourceSansPro-Italic',
  sourceSansProLight: 'SourceSansPro-Light',
  sourceSansProLightItalic: 'SourceSansPro-LightItalic',
  sourceSansProRegular: 'SourceSansPro-Regular',
  sourceSansProSemiBold: 'SourceSansPro-SemiBold',
  sourceSansProSemiBoldItalic: 'SourceSansPro-SemiBoldItalic',
};

// TODO
// Dont use below font, and replace if you see anywhere with above.

export const FONT_18 = responsiveSize(18);

export const FONT_16 = responsiveSize(16);

export const FONT_14 = responsiveSize(14);

export const FONT_13 = responsiveSize(12);
