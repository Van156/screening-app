import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useSelector, useDispatch } from 'react-redux';

import { selectCheckbox, setCheckbox } from '../../context/slices/setting.slice';

import styles from './settings.styles';

const Settings = props => {
    const checkboxStates = useSelector(state => selectCheckbox(state));
    const dispatch = useDispatch();

    const handleSelection = (index) => {
        const newCheckboxStates = [...checkboxStates];
        newCheckboxStates[index] = !newCheckboxStates[index];
        dispatch(setCheckbox(newCheckboxStates));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.description}>{props?.description}</Text>
            {
                props?.checkboxValues && (
                    <View style={styles.checkboxContainer}>
                        {
                            props?.checkboxValues.map((item, index) => (
                                <View key={index} style={styles.checkboxItem}>
                                    <Checkbox
                                        key={index}
                                        value={checkboxStates[index]}
                                        onValueChange={() => handleSelection(index)}
                                        style={styles.checkbox}
                                        color={checkboxStates[index] ? "#000" : undefined}
                                    />
                                    <Text style={styles.checkboxText}>{item}</Text>
                                </View>
                            ))
                        }
                    </View>
                )
            }
        </View>
    );
}

export default Settings;