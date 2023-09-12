import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StackRoutes from './stackRoutes';

import Start from '../pages/Start';
import Detail from '../pages/Detail';

export default function Routes() {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Start">
      <Stack.Screen
        name="Start"
        component={Start}
        options={{ title: 'Tela Start', headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={StackRoutes}
        options={{ title: 'Tela Home', headerShown: false }
        } />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ title: 'Tela Detail', headerShown: false }}
      />
    </Stack.Navigator>
  );
}