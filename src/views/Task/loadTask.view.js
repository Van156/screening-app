import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Alert,
} from "react-native";
import React from "react";
import Header from "../../components/Header/header.index";
import TaskInfo from "../../components/Task/taskInfo.index";
import { useDispatch } from "react-redux";
import { Ionicons } from '@expo/vector-icons';

import { removeTask, markComplete } from "../../context/slices/tasks.slice";

import styles from "./addTask.styles";

const LoadTask = ({ navigation, route }) => {

    const task = route.params.task;
    const index = task.id;
    const dispatch = useDispatch();

    const deleteTask = () => {
        dispatch(removeTask({
            id: index
        }));
        navigation.goBack();
    };

    const completeTask = () => {
        dispatch(markComplete({
            id: index
        })); 
        Alert.alert("Task information", "This task has been marked as completed.", [
            { text: "OK" },
        ]);
        navigation.goBack();
    };

    return (
        <SafeAreaView>
            <View style={styles.wrapper}>
                <Header text="Task's information" />
                <TaskInfo
                    text={task.text}
                    description={task.description}
                    deadline={task.deadline}
                    type={task.type}
                    color={task.color}
                    completed={task.completed}
                />

                <View style={styles.actionsContainer}>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => deleteTask()}
                    >
                        <View style={styles.iconContainer} backgroundColor={'#D61355'}>
                            <Ionicons name="md-trash-sharp" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => completeTask()}
                    >
                        <View style={styles.iconContainer} backgroundColor={'#5dbea3'}>
                            <Ionicons name="checkmark-circle" style={styles.icon} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LoadTask;