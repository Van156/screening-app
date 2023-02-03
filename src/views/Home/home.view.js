
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, SafeAreaView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header/header.index';
import Task from '../../components/Task/task.index';
import Empty from '../../components/Empty/empty.index';

import styles from './home.styles';
import sortTasks from '../../components/Utils/sort';
import NavTab from '../../components/NavTab/navTab.index';

import { useSelector } from 'react-redux';

const Home = () => {

    const [tasks, setTasks] = useState(useSelector(state => state.taskReducer));

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
        <SafeAreaView>
            <View style={styles.wrapper}>
                <Header text="ToDo's List" />
                {
                    tasks.length > 0 ? (
                        tasks.map(item => (
                            !item?.completed ? (
                                <Task
                                    key={item.id}
                                    text={item.text}
                                    deadline={item.deadline}
                                    color={item.color}
                                    type={item.type}
                                />
                            ) : null
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
            <View style={styles.footer}>
                <TouchableOpacity>
                    <View style={styles.iconContainer}>
                        <Icon name="add" style={styles.addButton} />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Home;