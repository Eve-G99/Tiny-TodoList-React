import axios from 'axios';

const API_URL = 'http://localhost:8080/api/tasks'; 

export const fetchTasks = async (sort_by, completed) => {
    try {
        const response = await axios.get(API_URL, 
            { params: { sort_by, completed } 
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
  };
  
  export const fetchTaskById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching task:', error);
        throw error;
    }
  };
  
  export const createTask = async (taskData) => {
    try {
        const response = await axios.post(API_URL, taskData);
        return response.data;
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
  };
  
  export const updateTask = async (id, taskData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, taskData);
        return response.data;
    } catch (error) {
        console.error('Error updating task:', error);
        throw error;
    }
  };
  
  export const deleteTask = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
  };