
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header/header.index';
import Task from '../../components/Task/task.index';
import Empty from '../../components/Empty/empty.index';

import styles from './home.styles';
import sortTasks from '../../components/Utils/sort';

const tasks = [
    {
        id: 1,
        text: 'Activity 1: Now with ES6 we have a very powerful spread operator (...Object) which can make this job very easy. It can be done as follows.',
        completed: false,
    },
    {
        id: 2,
        text: 'Activity 2',
        deadline: '20/20/2020',
        type: 'Personal',
        completed: false,
    },
    {
        id: 3,
        text: 'Activity 3',
        color: '#000',
        type: 'Personal',
        completed: false,
    }
];

const Home = () => {

    /**
     * 
     * const [tasks, setTasks] = useState(task);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Name', value: 'name' },
        { label: 'Deadline', value: 'deadline' },
        { label: 'Type', value: 'type' }
    ]);

    const handleSortBy = () => {
        const sortedTasks = sortTasks(tasks, value);
        console.log(sortedTasks);
        setTasks(sortedTasks);
    }

    useEffect(() => {
        handleSortBy();
    }, [value]);
     */

    return (
        <View>

        {
            /*
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Sort by"
            onChangeValue={handleSortBy}
        />
             */
        }

        <View style={styles.wrapper}>
            <Header text="ToDo's List" />
            {
                tasks.length > 0 ? (
                    tasks.map(item => (
                        <Task
                            key={item.id}
                            text={item.text}
                            deadline={item.deadline}
                            color={item.color}
                            type={item.type}
                        />
                    ))
                ) : (
                    <Empty text="ToDo's list is empty."></Empty>
                )
            }
        </View>
        <View style={styles.footer}>
            <TouchableOpacity>
                <View style={styles.iconContainer}>
                    <Icon name="add" style={styles.addButton} />
                </View>
            </TouchableOpacity>
        </View>
    </View>
    );
}

export default Home;