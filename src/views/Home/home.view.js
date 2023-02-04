
import React from 'react';
import { TouchableOpacity, View, SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header/header.index';
import Task from '../../components/Task/task.index';
import Empty from '../../components/Empty/empty.index';

import styles from './home.styles';

import { useSelector } from 'react-redux';
import { selectTasks } from '../../context/slices/tasks.slice';

const Home = ({ navigation }) => {

    const tasks = useSelector(state => selectTasks(state));

    return (
        <SafeAreaView>
            <View style={styles.wrapper}>
                <Header text="ToDo's List" />
                {
                    tasks.length > 0 ? (
                        <FlatList
                            data={tasks}
                            renderItem={({ item }) => (
                                !item?.completed ? (
                                    <TouchableOpacity 
                                        onPress={() => navigation.navigate('Task', { task: item })}>
                                        <Task
                                            key={item.id}
                                            id={item.id}
                                            text={item.text}
                                            deadline={item.deadline}
                                            type={item.type}
                                            color={item.color}
                                            completed={item.completed}
                                        />
                                    </TouchableOpacity>
                                ) : null
                            )}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                        />
                    ) : (
                        <Empty text="ToDo's list is empty."></Empty>
                    )
                }
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('AddTask')}>
                    <View style={styles.iconContainer}>
                        <Icon name="add" style={styles.addButton} />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Home;