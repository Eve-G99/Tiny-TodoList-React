import React, { useState } from 'react';
import TaskForm from '../components/TaskForm.js';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask } from '../redux/actions';
import { View } from 'react-native';
import styles from '../styles';
import { formatDate } from '../utils';

const EditTaskScreen = ({ route, navigation }) => {
    const { task } = route.params;
    const [taskDescription, setTaskDescription] = useState(task.taskDescription);
    const [dueDate, setDueDate] = useState(new Date(task.dueDate));

    const dispatch = useDispatch();
    const options = useSelector((state) => state.options.value);
    const error = useSelector((state) => state.tasks.error);

    const onDateChange = (_, date) => {
        setDueDate(date);
    }

    const handleUpdate = async () => {
        if (!taskDescription || !dueDate) {
            alert('Please fill all fields');
            return;
        }
        const createdDate = new Date(task.createdDate)
        createdDate.setDate(createdDate.getDate() - 1)
        if (new Date(dueDate) < createdDate) {
            alert('Due date must be later than the Created Date, Created Date is ' + formatDate(task.createdDate));
            return;
        }
        
        dueDate.setMilliseconds(0);
        newTask = {...task} 
        newTask.taskDescription = taskDescription
        newTask.dueDate = dueDate
        dispatch(updateTask(task.id, newTask, options));
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TaskForm 
                taskDescription={taskDescription}
                setTaskDescription={setTaskDescription}
                dueDate={dueDate}
                onDateChange={onDateChange} 
                handleSubmit={handleUpdate}
            />
        </View>
    );
};

export default EditTaskScreen;
