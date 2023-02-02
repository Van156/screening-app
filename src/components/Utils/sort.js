const sortTasks = (tasks, sortBy) => {
    switch (sortBy) {
        case 'name':
            return tasks.sort((a, b) => {
                if (a.text < b.text) {
                    return -1;
                }
                if (a.text > b.text) {
                    return 1;
                }
                return 0;
            });
        case 'deadline':
            return tasks.sort((a, b) => {
                if (a.deadline < b.deadline) {
                    return -1;
                }
                if (a.deadline > b.deadline) {
                    return 1;
                }
                return 0;
            });
        case 'type':
            return tasks.sort((a, b) => {
                if (a.type < b.type) {
                    return -1;
                }
                if (a.type > b.type) {
                    return 1;
                }
                return 0;
            });
        default:
            return tasks;
    }
}

export default sortTasks;