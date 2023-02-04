import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header/header.index";
import DatePicker from "@react-native-community/datetimepicker";
import DropDownPicker from "react-native-dropdown-picker";
import { useDispatch } from "react-redux";

import { addTask } from "../../context/slices/tasks.slice";

import styles from "./addTask.styles";

const AddTask = ({ navigation }) => {
    const dispatch = useDispatch();

    const saveTask = (task) => {
        dispatch(addTask(task));
    };

    const typeColors = {
        Personal: "#10A19D",
        Work: "#FF7000",
        School: "#FFBF00",
        Other: "#20262E",
    };

    const createTask = (data) => {
        // validate fields
        if (data.title === "") {
            Alert.alert("Add activity", "The title is required", [{ text: "OK" }]);
            return;
        }
        const task = {
            id: Math.random().toString(),
            text: data.title,
            description: data.description,
            deadline: getCurrentDate(data.date),
            type: data.type,
            color: typeColors[data.type],
            completed: false,
        };
        saveTask(task);
        navigation.goBack();
    };

    const currentDate = new Date();
    const [date, setDate] = useState(currentDate);

    const getCurrentDate = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [open, setOpen] = useState(false);
    const [type, setType] = useState("Personal");
    const [items, setItems] = useState([
        { label: 'Personal', value: 'Personal' },
        { label: 'Work', value: 'Work' },
        { label: 'School', value: 'School' },
        { label: 'Other', value: 'Other' },
    ]);

    return (
        <SafeAreaView>
            <View style={styles.wrapper}>
                <Header text="New Task" />
                <View style={styles.container}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Title"
                        defaultValue={title}
                        onChangeText={(newTitle) => setTitle(newTitle)}
                    />
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        style={styles.TextInputMultiline}
                        placeholder="Description"
                        defaultValue={description}
                        onChangeText={(newDescription) => setDescription(newDescription)}
                    />
                    <View style={styles.row}>
                        <View style={styles.selector}>
                            <Text style={styles.label}>Deadline:</Text>
                            <DatePicker
                                value={date}
                                mode="datetime"
                                minimumDate={currentDate}
                                customStyles={{
                                    dateIcon: {
                                        position: "absolute",
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0,
                                    },
                                    dateInput: {
                                        marginLeft: 36,
                                    },
                                }}
                                onChange={(event, selectedDate) => {
                                    const currentDate = selectedDate || date;
                                    setDate(currentDate);
                                }}
                            />
                        </View>
                        <View style={styles.selector}>
                            <Text style={styles.label}>Type:</Text>
                            <DropDownPicker
                                open={open}
                                value={type}
                                items={items}
                                setOpen={setOpen}
                                setValue={setType}
                                setItems={setItems}
                                dropDownDirection="TOP"
                            />
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => createTask({ title, description, date, type })}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Add</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default AddTask;