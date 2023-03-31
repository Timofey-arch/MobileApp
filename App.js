import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './components/Pages/Main';
import Home from './components/Pages/Home';
import RecipiesBook from './components/Pages/RecipiesBook';
import Profile from './components/Pages/Profile'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Recipies Book" component={RecipiesBook} />
          <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}