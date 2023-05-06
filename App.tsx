import React, {PropsWithChildren} from 'react';
import MainCalendar from './src/screens/MainCalendarScreen';
import {Alert, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExpandableCalendarScreen from './src/screens/expandableCalendar/ExpandableCalendarScreen';

const Stack = createNativeStackNavigator();

const App: React.FC<PropsWithChildren<{}>> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ExpandableCalendar">
        <Stack.Screen
          name="MainCalendar"
          component={MainCalendar}
          options={({navigation}) => ({
            title: 'Agenda',
            headerLeft: () => (
              <Text onPress={() => navigation.navigate('ExpandableCalendar')}>
                캘린더 전환
              </Text>
            ),
            headerRight: () => (
              <Text
                onPress={() =>
                  Alert.alert('일정추가 할 수 있는 화면으로 이동')
                }>
                일정추가
              </Text>
            ),
          })}
        />
        <Stack.Screen
          name="ExpandableCalendar"
          component={ExpandableCalendarScreen}
          options={({navigation}) => ({
            title: 'ExpandableCalendar',
            headerLeft: () => (
              <Text onPress={() => navigation.navigate('MainCalendar')}>
                캘린더 전환
              </Text>
            ),
            headerRight: () => (
              <Text
                onPress={() =>
                  Alert.alert('일정추가 할 수 있는 화면으로 이동')
                }>
                일정추가
              </Text>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
