import React, {PropsWithChildren} from 'react';
import MainCalendar from './src/screens/MainCalendar';
import {SafeAreaView, Text} from 'react-native';

const App: React.FC<PropsWithChildren<{}>> = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'gray'}}>
      <Text style={{backgroundColor: 'yellow', textAlign: 'center'}}>
        Header
      </Text>
      <MainCalendar />
    </SafeAreaView>
  );
};
export default App;
