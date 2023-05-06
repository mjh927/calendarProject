import React from 'react';
import {Text, View} from 'react-native';

interface ItemProps {
  item: any;
}

const AgendaItem = (props: ItemProps) => {
  const {item} = props;

  return (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.duration}</Text>
      <Text>{item.hour}</Text>
    </View>
  );
};

export default AgendaItem;
