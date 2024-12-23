import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {IPProvider} from './context';
const Stack = createStackNavigator();

import MainPage from './screens/mainPage';
export default function App(){
  return(
    <IPProvider>
      <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen 
                name='MainPage'
                component={MainPage}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
    </IPProvider>
   
  )
}