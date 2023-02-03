import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/views/Home/home.view';
import Settings from './src/views/Settings/settings.view';
import Splash from './src/views/Splash/splash.view';

// import { Provider } from 'react-redux';
// import { Store } from './src/context/stores/store';

export default function App() {
  return (
    <View style={styles.container}>
      <Settings />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});
