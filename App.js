import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './components/Pages/Main';
import Home from './components/Pages/Home';
import RecipiesBook from './components/Pages/RecipiesBook';
import Profile from './components/Pages/Profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Main" component={Main} />
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Recipies Book" component={RecipiesBook} />
          <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}