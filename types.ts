import { StackNavigationProp } from '@react-navigation/stack';


export type RootStackParamList = {
    Splash: undefined;
    Login: undefined;
    Register: undefined;
    Home: undefined;
    TutorList: undefined;
    Messages: undefined;
    Notifications: undefined;
    Calendar: undefined
    TeacherSearch: undefined;
    Reservation: undefined;
    Confirmation: undefined;
    Cancellation: undefined;
  };

  
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home', 'Messages'>;
export type NotificationsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Notifications'>;
export type CalendarScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Calendar'>;
export type TeacherSearchScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TeacherSearch'>;
export type ReservationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Reservation'>;
export type ConfirmationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Confirmation'>;
export type CancellationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cancellation'>;

