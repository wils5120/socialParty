import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu from './src/Menu';
import { Login } from './src';
import Home from './src/Home';
import Filtros from './src/Filters';
import Clubs from './src/clubs';
import MenuClub from './src/MenuClub';



const Drawer = createDrawerNavigator();

function Router() {

  return (
    <Drawer.Navigator initialRouteName="Login"
      drawerStyle={{
        backgroundColor: '#00095E',
      }}
      drawerContentOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#fff',
      }}
      drawerContent={(props) => <Menu {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
      />
      <Drawer.Screen
        name="Filtros"
        component={Filtros}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          gestureEnabled: false,
          hideStatusBar: true
        }}
      />
      <Drawer.Screen
        name="Clubs"
        component={Clubs}
      />
      <Drawer.Screen
        name="MenuClub"
        component={MenuClub}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

