import React, {useCallback, useState} from 'react';
import {Alert, Pressable, Text, View} from 'react-native';
import {
  Agenda,
  AgendaEntry,
  AgendaSchedule,
  DateData,
} from 'react-native-calendars';

const MainCalendar = () => {
  const [events, setEvents] = useState<any>({});

  const renderItem = useCallback((event: AgendaEntry, isFirst: boolean) => {
    return (
      <Pressable
        style={{
          flex: 1,
          backgroundColor: 'white',
          padding: 10,
          borderWidth: 1,
          borderColor: 'black',
        }}
        onPress={() => Alert.alert(event.name, String(isFirst))}
        onLongPress={() => Alert.alert(`Long Press : ${event.name}`)}>
        <Text>{event.name}</Text>
        <Text>{event.height}</Text>
        <Text>{event.day}</Text>
      </Pressable>
    );
  }, []);

  const loadItems = (day: DateData) => {
    const items = events || {};

    setTimeout(() => {
      console.log('load!!');
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;

        const strTime = timeToString(time);

        if (!events[strTime]) {
          events[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            events[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime,
            });
          }
        }
      }

      const newItems: AgendaSchedule = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setEvents({
        ...newItems,
      });
    }, 1000);

    const timeToString = (time: number) => {
      const date = new Date(time);
      return date.toISOString().split('T')[0];
    };
  };

  return (
    <Agenda
      // The list of items that have to be displayed in agenda. If you want to render item as empty date
      // the value of date key has to be an empty array []. If there exists no value for date key it is
      // considered that the date in question is not yet loaded
      items={events}
      // Callback that gets called when items for a certain month should be loaded (month became visible)
      loadItemsForMonth={loadItems}
      //   // Callback that fires when the calendar is opened or closed
      //   onCalendarToggled={calendarOpened => {
      //     console.log(calendarOpened);
      //   }}
      //   // Callback that gets called on day press
      //   onDayPress={day => {
      //     console.log('day pressed');
      //   }}
      //   // Callback that gets called when day changes while scrolling agenda list
      //   onDayChange={day => {
      //     console.log('day changed');
      //   }}
      // Initially selected day
      selected={'2023-05-05'}
      //   // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
      //   minDate={'2023-05-01'}
      //   // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
      //   maxDate={'2023-05-30'}
      //   // Max amount of months allowed to scroll to the past. Default = 50
      //   pastScrollRange={50}
      //   // Max amount of months allowed to scroll to the future. Default = 50
      //   futureScrollRange={50}
      // Specify how each item should be rendered in agenda
      renderItem={renderItem}
      //   // Specify how each date should be rendered. day can be undefined if the item is not first in that day
      //   renderDay={(day, item) => {
      //     return (
      //       <View>
      //         <Text>renderDay</Text>
      //       </View>
      //     );
      //   }}
      // Specify how empty date content with no items should be rendered
      renderEmptyDate={() => {
        return (
          <View>
            <Text>renderEmptyDate</Text>
          </View>
        );
      }}
      //   // Specify how agenda knob should look like
      //   renderKnob={() => {
      //     return (
      //       <View>
      //         <Text>-----</Text>
      //       </View>
      //     );
      //   }}
      //   // Override inner list with a custom implemented component
      //   renderList={listProps => {
      //     console.log(listProps.items);
      //     return (
      //       <View>
      //         <Text>listItemProp</Text>
      //       </View>
      //     );
      //   }}
      //   // Specify what should be rendered instead of ActivityIndicator
      //   renderEmptyData={() => {
      //     return (
      //       <View>
      //         <Text>renderEmptyData</Text>
      //       </View>
      //     );
      //   }}
      //   // Hide knob button. Default = false
      //   hideKnob={false}
      //   // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
      //   disabledByDefault={false}
      //   // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
      //   onRefresh={() => console.log('refreshing...')}
      //   // Set this true while waiting for new data from a refresh
      //   refreshing={false}
      //   // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView
      //   refreshControl={undefined}
      //   // Agenda theme
      //   theme={{
      //     // ...calendarTheme,
      //     agendaDayTextColor: 'yellow',
      //     agendaDayNumColor: 'green',
      //     agendaTodayColor: 'red',
      //     agendaKnobColor: 'blue',
      //   }}
      //   // Agenda container style
      //   style={{}}
    />
  );
};

export default MainCalendar;
