import axios from 'axios';
import { getAllTasks, appendTask, patchTask, removeTask, sortTasksBy } from './taskSlice'

const API_URL = 'http://localhost:8080/api/tasks';

export const fetchTasks = (sort_by, completed) => async (dispatch) => {
    try {
        const response = await axios.get(API_URL,
            { params: { sort_by, completed } });
        dispatch(getAllTasks({data: response.data}));
    } catch (error) {
        console.error('Error fetching tasks:', error);
        dispatch(getAllTasks({error: 'Failed to fetch tasks.'}));
    }
}

export const createTask = (taskData, options) => async (dispatch) => {
    try {
        const createdDate = new Date();
        createdDate.setMilliseconds(0);
        taskData.createdDate = createdDate;
        const response = await axios.post(API_URL, taskData);
        dispatch(appendTask({data: response.data}));
        const { sortBy, sortDirection } = options;
        dispatch(sortTasksBy({sortBy, sortDirection}));
    } catch (error) {
        alert('Failed to create task.');
        console.error('Error creating tasks:', error);
        dispatch(appendTask({error: 'Failed to create task.'}));
    }
}

export const updateTask = (id, taskData, options) => async (dispatch) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, taskData); 
        dispatch(patchTask({data: response.data}));
        const { sortBy, sortDirection } = options;
        dispatch(sortTasksBy({sortBy, sortDirection}));
    } catch (error) {
        alert('Failed to update task.');
        console.error('Error updateng tasks:', error);
        dispatch(patchTask({error: "Failed to update task."}));
    }
}

export const deleteTask = (id) => async (dispatch) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        dispatch(removeTask({id}));
    } catch (error) {
        alert('Failed to delete task.');
        console.error('Error deleting tasks:', error);
        dispatch(removeTask({error: 'Failed to delete task.'}));
    }
}

export const sortTasks = (options) => async (dispatch) => {
    try {
        dispatch(sortTasksBy(options));
    } catch (error) {
        console.error('Error deleting tasks:', error);
    }
}




