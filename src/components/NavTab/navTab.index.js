
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Home from '../../views/Home/home.view';
import Settings from '../../views/Settings/settings.view';

const Tab = createBottomTabNavigator();

const NavTab = () => {
    <Tab.Navigator
        screenOptions={
            ({ route }) => ({
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName;
                    if (route.name === 'To-Do') {
                        iconName = 'clipboard-list';
                        size = focused ? 25 : 20;
                    } else if (route.name === 'Done') {
                        iconName = 'clipboard-check';
                        size = focused ? 25 : 20;
                    }
                    return (
                        <FontAwesome5
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                }
            })
        }
        tabBarOptions={{
            activeTintColor: '#0080ff',
            inactiveTintColor: '#777777',
            labelStyle: { fontSize: 15, fontWeight: 'bold' }
        }}
    >
        <Tab.Screen name={'ToDo'} component={Home} />
        <Tab.Screen name={'Done'} component={Settings} />
    </Tab.Navigator>

}

export default NavTab;