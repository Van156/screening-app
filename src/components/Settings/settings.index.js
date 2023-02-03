import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Checkbox from 'expo-checkbox';
import Header from '../Header/header.index';

import styles from './settings.styles';

const Settings = props => {
    const [checkboxStates, setCheckboxStates] = useState(Array(props?.checkboxValues.length).fill(false));

    const handleSelection = (index) => {
        const newCheckboxStates = [...checkboxStates];
        newCheckboxStates[index] = !newCheckboxStates[index];
        setCheckboxStates(newCheckboxStates);
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