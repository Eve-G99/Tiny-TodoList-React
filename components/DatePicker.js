import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({ value, onDateChange, style }) => {    
    return (
        <DateTimePicker 
            style={style} 
            display='inline'
            value={value}  
            onChange={onDateChange}
        />
    );
};

export default DatePicker;
