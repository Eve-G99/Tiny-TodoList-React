import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import deleteIcon from '../assets/icon-delete.png';
import editIcon from '../assets/icon-edit.png';
import { formatDate } from '../utils';
import { updateTask } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles';

const TaskItem = ({ task, onDelete }) => {
    const navigation = useNavigation();

    const dispatch = useDispatch();
    const options = useSelector((state) => state.options.value);

    const [isComplete, setIsComplete] = useState(task.completed);

    const handleComplete = async () => {
        newTask = {...task}
        newTask.completed = !isComplete
        dispatch(updateTask(task.id, newTask, options));
        setIsComplete(!isComplete);
    };

    return (
        <View style={styles.taskItemContainer}>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('EditTask', { task })}>
                    <Image source={editIcon} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={styles.taskInfoContainer}>
                <Text style={styles.bold}>{task.taskDescription}</Text>
                <Text style={styles.text}>Due: {formatDate(new Date(task.dueDate))}</Text>
                <Text style={styles.text}>Created: {formatDate(new Date(task.createdDate))}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Checkbox
                    value={isComplete}
                    onValueChange={handleComplete}
                    color={isComplete ? '#696969' : undefined}
                />
                <TouchableOpacity onPress={() => onDelete(task.id)}>
                    <Image source={deleteIcon} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TaskItem;