import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TaskList from '../components/TaskList';
import { fetchTasks, deleteTask, sortTasks } from '../redux/actions';
import styles from '../styles';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.value);
    const error = useSelector((state) => state.tasks.error);
    const options = useSelector((state) => state.options.value);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        var completed = null;
        if(options.completed !== 'all') {
            completed = options.completed === 'completed';
        }
        const sortByFormatted = ((options.sortDirection==='ascending')?'':'-') + options.sortBy;
        dispatch(fetchTasks(sortByFormatted, completed));
        setLoading(false);
       }, [options.completed]);

    useEffect(() => {
        const { sortBy, sortDirection } = options;
        dispatch(sortTasks({sortBy, sortDirection}));
        return () => { };
    }, [options.sortBy, options.sortDirection]);

    const handleDelete = async (id) => {
        dispatch(deleteTask(id));
    };

    return (
        <View style={styles.container}>
            {loading || tasks.length == 0 ? (
                <ActivityIndicator size="large" />
            ) : (
                <TaskList tasks={tasks} onDelete={handleDelete} />
            )}
        </View>
    );
};

export default HomeScreen;

