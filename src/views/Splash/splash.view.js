import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import styles from './splash.styles';

const Splash = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <FontAwesome5 name="tasks" style={styles.icon} />
            </View>
            <Text style={styles.text}>ToDo List App</Text>
        </View>
    );
}

export default Splash;