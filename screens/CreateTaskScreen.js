import React, { useState } from 'react';
import TaskForm from '../components/TaskForm.js';
import { useDispatch, useSelector } from 'react-redux';
import { createTask } from '../redux/actions';
import { View, Alert, Button } from 'react-native';
import styles from '../styles';
import { removeError } from '../redux/taskSlice'

const CreateTaskScreen = ({ navigation }) => {
    const [taskDescription, setTaskDescription] = useState('');
    const [dueDate, setDueDate] = useState(new Date());

    const dispatch = useDispatch();
    const options = useSelector((state) => state.options.value);
    const error = useSelector((state) => state.tasks.error);

    const onDateChange = (_, date) => {
        setDueDate(date);
    }

    const handleSave = async () => {
        if (!taskDescription || !dueDate) {
            alert('Please fill all fields');
            return;
        }
        const now = new Date();
        if (dueDate < now.setDate(now.getDate() - 1)){ 
            alert('Due date must be equal to or later than today');
            return;
        }
        
        dueDate.setMilliseconds(0);
        dispatch(createTask({taskDescription, dueDate}, options));
        navigation.goBack();
    };
    
    return (
        <View style={styles.container}>
            <TaskForm 
                taskDescription={taskDescription}
                setTaskDescription={setTaskDescription}
                dueDate={dueDate}
                onDateChange={onDateChange} 
                handleSubmit={handleSave}
            />
            
        </View>
    );
};

export default CreateTaskScreen;
