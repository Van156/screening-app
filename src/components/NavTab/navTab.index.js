
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

import Home from '../../views/Home/home.view';
import Settings from '../../views/Settings/settings.view';

const Tab = createBottomTabNavigator();

const NavTab = () => {
    <Tab.Navigator
        screenOptions={
            ({ route }) => ({
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName;
                    let icon;
                    if (route.name === 'ToDo') {
                        iconName = 'clipboard-list';
                        size = focused ? 25 : 20;
                        icon = <FontAwesome5
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    } else if (route.name === 'Settings') {
                        iconName = 'settings';
                        size = focused ? 25 : 20;
                        icon = <Ionicons
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    }
                    return icon;
                }
            })
        }
        tabBarOptions={{
            activeTintColor: '#000',
            inactiveTintColor: '#b8bb8',
            labelStyle: { fontSize: 15, fontWeight: 'bold' }
        }}
    >
        <Tab.Screen name={'ToDo'} component={Home} />
        <Tab.Screen name={'Settings'} component={Settings} />
    </Tab.Navigator>

}

export default NavTab;