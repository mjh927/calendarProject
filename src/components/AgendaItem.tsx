import React from 'react';
import {Text, View} from 'react-native';

interface ItemProps {
  item: any;
}

const AgendaItem = (props: ItemProps) => {
  const {item} = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        // paddingLeft: 10,
        // paddingRight: 10,
        paddingTop: 10,
        margin: 10,
        borderTopColor: 'gray',
        borderTopWidth: 0.2,
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: 'red',
            height: '100%',
            width: 4,
            borderRadius: 10,
            marginRight: 5,
          }}></View>
        <View>
          <Text style={{fontWeight: '500'}}>{item.title}</Text>
          <Text style={{fontWeight: '300', color: 'gray', fontSize: 12}}>
            {item.duration}
          </Text>
        </View>
      </View>
      <View style={{justifyContent: 'center'}}>
        <Text style={{fontWeight: '300', fontSize: 12}}>{item.hour}</Text>
        <Text style={{fontWeight: '300', color: 'gray', fontSize: 12}}>
          {item.hour}
        </Text>
      </View>
    </View>
  );
};

export default AgendaItem;
