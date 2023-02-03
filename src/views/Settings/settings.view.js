import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, SafeAreaView } from 'react-native';
import Header from '../../components/Header/header.index';
import Settings from '../../components/Settings/settings.index';

import styles from './settings.styles';

const settings = [
    {
        description: 'Select the type of notifications you want to receive:',
        checkboxValues: ['Email', 'SMS', 'Push Notification']
    },
];

const SettingsView = () => {
    return (
        <SafeAreaView>
            <View style={styles.wrapper}>
                <Header text="Settings" />
                {
                    settings.map((item, index) => (
                        <Settings
                            key={index}
                            description={item.description}
                            checkboxValues={item.checkboxValues}
                        />
                    ))
                }
            </View>
        </SafeAreaView>
    )
}

export default SettingsView;