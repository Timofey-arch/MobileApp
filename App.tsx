import NavBar from './components/NavBar';
import RecipeContainer from './components/RecipeContainer';
import { SafeAreaView, ScrollView } from 'react-native';
import SideMenu from './components/SideMenu';
import { useState } from 'react';
import MenuButton from './components/MenuButton';


export default function App() {
  const [sideMenustate, setSideMenuState] = useState(false);

  return (
    <>
      <NavBar>
        <MenuButton openFunction={() => setSideMenuState(sideMenustate ? false : true)}></MenuButton>
      </NavBar>

      <SideMenu isOpen={sideMenustate}>

      </SideMenu>

      <SafeAreaView>
          <ScrollView>
            <RecipeContainer></RecipeContainer>
            <RecipeContainer></RecipeContainer>
            <RecipeContainer></RecipeContainer>
            <RecipeContainer></RecipeContainer>
          </ScrollView>
      </SafeAreaView>
    </>
  );
}