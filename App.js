import { StyleSheet, View } from 'react-native';

import Splash from './src/views/Splash/splash.view';
import AddTask from './src/views/Task/addTask.view';
import LoadTask from './src/views/Task/loadTask.view';

import NavTab from './src/components/NavTab/navTab.index';

import Store from './src/context/stores/Store';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Main"
              component={NavTab}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="AddTask"
              component={AddTask}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Task"
              component={LoadTask}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});
