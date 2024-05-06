export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
}

export const sort = (tasks, sortBy, sortDirection) => {
    tasks.sort((a, b) => {
        if (sortDirection === 'ascending') {
            return new Date(a[sortBy]) - new Date(b[sortBy]);
        } else {
            return new Date(b[sortBy]) - new Date(a[sortBy]);
        }
    });
    return tasks;
}