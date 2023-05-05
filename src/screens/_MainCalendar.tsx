import React, {useCallback} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  AgendaList,
  CalendarProvider,
  ExpandableCalendar,
  WeekCalendar,
} from 'react-native-calendars';
import {Positions} from 'react-native-calendars/src/expandableCalendar';

export const agendaItems = [
  {
    title: '2023-05-01',
    data: [{hour: '12am', duration: '1h', title: 'First Yoga'}],
  },
  {
    title: '2023-05-02',
    data: [
      {hour: '4pm', duration: '1h', title: 'Pilates ABC'},
      {hour: '5pm', duration: '1h', title: 'Vinyasa Yoga'},
    ],
  },
  {
    title: '2023-05-03',
    data: [
      {hour: '1pm', duration: '1h', title: 'Ashtanga Yoga'},
      {hour: '2pm', duration: '1h', title: 'Deep Stretches'},
      {hour: '3pm', duration: '1h', title: 'Private Yoga'},
    ],
  },
  {
    title: '2023-05-05',
    data: [{hour: '12am', duration: '1h', title: 'Ashtanga Yoga'}],
  },
  {
    title: '2023-05-06',
    data: [{}],
  },
];

const leftArrowIcon = require('../assets/img/previous.png');
const rightArrowIcon = require('../assets/img/next.png');

const MainCalendar = () => {
  const onPress = props => {
    console.log('onPress Clicked');
    console.log(props);
  };

  const RenderItem = ({item}: any) => {
    return (
      <View style={styles.item}>
        <Text>This is a render item. this should be displayed</Text>
        <Text>This is a render item. this should be displayed</Text>
      </View>
    );
  };
  // const renderItem = useCallback(({item}: any) => {
  //   return <AgendaItem item={item}/>;
  // }, []);

  return (
    <CalendarProvider date="2023-05-06" style={{backgroundColor: 'red'}}>
      <ExpandableCalendar
        initialPosition={Positions.CLOSED}
        onCalendarToggled={prop => {
          console.log(prop);
        }}
        firstDay={0}
        style={{backgroundColor: 'red'}}
        // leftArrowImageSource={leftArrowIcon}
        // rightArrowImageSource={rightArrowIcon}
        theme={{arrowColor: 'black'}}
      />
      <AgendaList
        sections={agendaItems}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
        renderItem={prop => {
          return (
            <View style={{height: 10, width: 20}}>
              <Text>{prop.item.title}</Text>
            </View>
          );
        }}
        markToday
      />
    </CalendarProvider>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 10,
    width: 50,
  },
});

export default MainCalendar;
