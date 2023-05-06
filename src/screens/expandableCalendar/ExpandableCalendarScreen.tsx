import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import {
  AgendaList,
  CalendarProvider,
  ExpandableCalendar,
  WeekCalendar,
} from 'react-native-calendars';
import {agendaItems, getMarkedDates} from './mockData';
import AgendaItem from '../../components/AgendaItem';
import {Positions} from 'react-native-calendars/src/expandableCalendar';

const leftArrowIcon = require('../../assets/img/previous.png');
const rightArrowIcon = require('../../assets/img/next.png');
// MOCK : DATA
const ITEMS: any[] = agendaItems;

interface Props {
  weekView?: boolean;
}

const ExpandableCalendarScreen = (props: Props) => {
  const {weekView} = props;

  const renderItem = useCallback(({item}: any) => {
    return <AgendaItem item={item} />;
  }, []);

  return (
    <CalendarProvider
      date="2023-05-06"
      theme={{todayButtonTextColor: '#FF00FF'}}>
      {false ? (
        <WeekCalendar />
      ) : (
        <ExpandableCalendar
          theme={{todayButtonTextColor: '##FF0000'}}
          initialPosition={Positions.OPEN}
          markedDates={{
            '2023-05-03': {marked: true},
            '2023-05-04': {
              marked: true,
              dotColor: 'red',
            },
            '2023-05-05': {marked: true},
            '2023-05-06': {marked: true},
            '2023-05-07': {marked: true},
            '2023-05-08': {marked: true},
            '2023-05-09': {marked: true},
            '2023-05-10': {marked: true},
            '2023-05-11': {marked: true},
            '2023-05-12': {marked: true},
            '2023-05-13': {marked: true},
            '2023-05-14': {marked: true},
            '2023-06-15': {marked: true},
            '2023-06-16': {marked: true},
            '2023-06-17': {marked: true},
            '2023-06-18': {marked: true},
          }}
          leftArrowImageSource={leftArrowIcon}
          rightArrowImageSource={rightArrowIcon}
        />
      )}
      <AgendaList
        sections={ITEMS}
        renderItem={renderItem}
        dayFormat={'yyyy-MM-d'}
      />
    </CalendarProvider>
  );
};

export default ExpandableCalendarScreen;
