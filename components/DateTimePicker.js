import React from 'react';
import { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export default function DateTimePicker() {
    const [date, setDate] = useState(new Date());
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: currentMode,
        is24Hour: true,
      });
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
  
    return (
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
        <Button onPress={showTimepicker} title="Show time picker!" />
        <Text>selected: {date.toLocaleString()}</Text>
      </View>
    );
  };