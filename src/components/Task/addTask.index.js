import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header/header.index";
import DatePicker from "react-native-datepicker";
import SelectDropdown from "react-native-select-dropdown";
import { useSelector, useDispatch } from "react-redux";

import styles from "./addTask.styles";

const AddTask = () => {

    const dispatch = useDispatch();

    const saveTask = task => {
        dispatch({ type: "ADD_TASK", payload: task });
    }

    const createTask = (data) => {
        const task = {
            id: Math.random().toString(),
            title: data.title,
            description: data.description,
            date: data.date,
            completed: false,
        }
        saveTask(task);
    }

    const [date, setDate] = useState(new Date());
    const countries = ["blue", "red", "rose", "yellow"];

    return (
        <SafeAreaView>
            <View style={styles.wrapper}>
                <Header text="Add New Activity" />
                <TextInput style={styles.TextInput} placeholder="Title" />
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={styles.TextInputMultiline}
                    placeholder="Description"
                />

                <View style={styles.row}>
                    <DatePicker
                        style={{ width: 200 }}
                        date={date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate={new Date()}
                        maxDate="2030-01-04"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
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
                        onDateChange={(date) => {
                            setDate(date);
                        }}
                    />
                    <SelectDropdown
                        data={countries}
                        defaultButtonText={"Select status"}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item;
                        }}
                    />
                </View>
                <TouchableOpacity
                    onPress={() =>
                        dispatch({
                            type: "ADD_TASK",
                            payload: {
                                id: 4,
                                text: "Activity 4: Now with ES6 we have a very powerful spread operator (...Object) which can make this job very easy. It can be done as follows.",
                                completed: false,
                            },
                        })
                    }
                    style={styles.btn}
                >
                    <Text>Add </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default AddTask;