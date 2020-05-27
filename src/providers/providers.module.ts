import { NgModule } from '@angular/core';

import { DecimalPipe } from '@angular/common';

import {
  ActionSheetProvider,
  AddressBookProvider,
  AddressProvider,
  AnalyticsProvider,
  AndroidFingerprintAuth,
  AppIdentityProvider,
  AppProvider,
  BackupProvider,
  BitPayAccountProvider,
  BitPayCardProvider,
  BitPayIdProvider,
  BitPayProvider,
  BwcErrorProvider,
  BwcProvider,
  CardPhasesProvider,
  Clipboard,
  ClipboardProvider,
  CoinbaseProvider,
  ConfettiProvider,
  ConfigProvider,
  CurrencyProvider,
  DerivationPathHelperProvider,
  Device,
  DomProvider,
  DownloadProvider,
  ElectronProvider,
  EmailNotificationsProvider,
  ErrorsProvider,
  ExchangeRatesProvider,
  ExternalLinkProvider,
  FCMNG,
  FeedbackProvider,
  FeeProvider,
  File,
  FilterProvider,
  // GiftCardProvider,
  HomeIntegrationsProvider,
  HttpRequestsProvider,
  IABCardProvider,
  InAppBrowserProvider,
  IncomingDataProvider,
  InvoiceProvider,
  KeyProvider,
  LanguageLoader,
  LanguageProvider,
  LaunchReview,
  Logger,
  MoonPayProvider,
  OnGoingProcessProvider,
  PayproProvider,
  PdfProvider,
  PersistenceProvider,
  PlatformProvider,
  PopupProvider,
  ProfileProvider,
  PushNotificationsProvider,
  QRScanner,
  RateProvider,
  ReleaseProvider,
  ReplaceParametersProvider,
  ScanProvider,
  ScreenOrientation,
  ShapeshiftProvider,
  SimplexProvider,
  SocialSharing,
  SplashScreen,
  StatusBar,
  TabProvider,
  TimeProvider,
  Toast,
  TouchID,
  TouchIdProvider,
  TxConfirmNotificationProvider,
  TxFormatProvider,
  UserAgent,
  Vibration,
  WalletProvider
} from './index';

@NgModule({
  providers: [
    ActionSheetProvider,
    AddressProvider,
    AddressBookProvider,
    AnalyticsProvider,
    AndroidFingerprintAuth,
    AppProvider,
    AppIdentityProvider,
    BackupProvider,
    BitPayProvider,
    BitPayCardProvider,
    BitPayIdProvider,
    BitPayAccountProvider,
    BwcProvider,
    BwcErrorProvider,
    ConfettiProvider,
    ConfigProvider,
    CoinbaseProvider,
    Clipboard,
    ClipboardProvider,
    CurrencyProvider,
    DerivationPathHelperProvider,
    Device,
    DomProvider,
    DownloadProvider,
    ErrorsProvider,
    ExternalLinkProvider,
    FeedbackProvider,
    FCMNG,
    HomeIntegrationsProvider,
    HttpRequestsProvider,
    IABCardProvider,
    InAppBrowserProvider,
    FeeProvider,
    // GiftCardProvider,
    IncomingDataProvider,
    InvoiceProvider,
    KeyProvider,
    LanguageLoader,
    LanguageProvider,
    LaunchReview,
    Logger,
    ElectronProvider,
    OnGoingProcessProvider,
    PayproProvider,
    PlatformProvider,
    ExchangeRatesProvider,
    ProfileProvider,
    PopupProvider,
    QRScanner,
    PushNotificationsProvider,
    RateProvider,
    ReplaceParametersProvider,
    ReleaseProvider,
    ShapeshiftProvider,
    SimplexProvider,
    StatusBar,
    SplashScreen,
    ScanProvider,
    ScreenOrientation,
    SocialSharing,
    TabProvider,
    Toast,
    TouchID,
    Vibration,
    TimeProvider,
    TouchIdProvider,
    TxConfirmNotificationProvider,
    FilterProvider,
    TxFormatProvider,
    UserAgent,
    WalletProvider,
    EmailNotificationsProvider,
    DecimalPipe,
    PersistenceProvider,
    File,
    CardPhasesProvider,
    MoonPayProvider,
    PdfProvider
  ]
})
export class ProvidersModule { }
