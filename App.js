import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CreateTaskScreen from './screens/CreateTaskScreen';
import EditTaskScreen from './screens/EditTaskScreen';
import SettingsScreen from './screens/SettingsScreen';
import store from './redux/store'
import { Provider } from 'react-redux'
import { View } from 'react-native';
import SettingButton from './components/SettingButton';
import CreateButton from './components/CreateButton';
import styles from './styles';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={(navigation) => ({
                headerTitle: 'Task List', 
                headerLeft: () => (
                  <View style={styles.headerButton}>
                    <SettingButton navigation={navigation.navigation} />
                  </View>
                ),
                headerRight: () => (
                  <View style={styles.headerButton}>
                    <CreateButton navigation={navigation.navigation} />
                  </View>
                )
            })}
          />
          <Stack.Screen name="CreateTask" component={CreateTaskScreen} options={{ title: 'Create Task' }} />
          <Stack.Screen name="EditTask" component={EditTaskScreen} options={{ title: 'Edit Task' }} />
          <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
