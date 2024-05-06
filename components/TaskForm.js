import React, { useState } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import DatePicker from '../components/DatePicker.js';
import SaveButton from '../components/SaveButton.js';
import calenderIcon from '../assets/icon-calendar.png';
import { formatDate } from '../utils';
import { taskFormStyles } from '../styles';

const TaskForm = ({ taskDescription, setTaskDescription, dueDate, onDateChange, handleSubmit }) => {
    const [showCalendar, setShowCalendar] = useState(false);

    const toggleCalender = () => {
        setShowCalendar(!showCalendar);
    }

    return (
        <View>
            <Text>To-Do Item Name</Text>
            <TextInput
                placeholder="Task Description"
                value={taskDescription}
                onChangeText={setTaskDescription}
                style={taskFormStyles.input}
            />
            <Text>Select Due Date</Text>
            <View style={taskFormStyles.calenderContainer}>
                <TextInput
                    placeholder=""
                    value={formatDate(dueDate)}
                    onChangeText={setTaskDescription}
                    style={taskFormStyles.input}
                />
                <TouchableOpacity 
                    style={taskFormStyles.button} 
                    onPress={toggleCalender}
                >
                    <Image source={calenderIcon} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
                </View>
                {showCalendar &&
                    <DatePicker value={dueDate}
                                onDateChange={onDateChange}
                                style={styles.datePicker}
                    />}
            <SaveButton handleSave={handleSubmit} />
        </View>
    );
};

export default TaskForm;
