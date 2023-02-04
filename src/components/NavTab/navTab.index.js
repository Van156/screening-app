
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Home from '../../views/Home/home.view';
import Settings from '../../views/Settings/settings.view';

const Tab = createBottomTabNavigator();

const NavTab = () => {
    const navigation = useNavigation();
    return (
        <Tab.Navigator
            initialRouteName="Home"
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Task',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="tasks" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default NavTab;