
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

export default function StackRoutes() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: '#FFF',
                tabBarStyle: {
                    backgroundColor: '#201C30',
                    paddingBottom: 4,
                    paddingTop: 4,
                    height: '12%',
                    borderTopWidth: 0,
                }
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => {
                        return <Entypo name="home" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen
                name="Detail"
                component={Detail}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size }) => {
                        return <FontAwesome name="user" size={size} color={color} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}