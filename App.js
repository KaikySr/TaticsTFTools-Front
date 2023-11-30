import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store';
import login from './src/pages/login/login';
import register from './src/pages/register/register';
import main from './src/pages/main/main';
import user from './src/pages/user/user';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="user" component={user} />
          <Stack.Screen options={{headerShown: false}} name="login" component={login} />
          <Stack.Screen options={{headerShown: false}} name="register" component={register} /> 
          <Stack.Screen options={{headerShown: false}} name="main" component={main} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
} 

