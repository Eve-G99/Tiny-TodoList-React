import React from 'react';
import { ScrollView } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete }) => {
    return (
        <ScrollView>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} onDelete={onDelete} />
            ))}
        </ScrollView>
    );
};

export default TaskList;