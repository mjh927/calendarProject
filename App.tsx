import React, {PropsWithChildren} from 'react';
import MainCalendar from './src/screens/MainCalendar';
import {Alert, SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App: React.FC<PropsWithChildren<{}>> = ({children}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainCalendar"
          component={MainCalendar}
          options={({navigation}) => ({
            title: '',
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
