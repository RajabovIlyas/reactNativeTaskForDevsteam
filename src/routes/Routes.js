import React from 'react';
import Home from '../components/HomePages/HomePages';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ShowPhoto from '../components/ShowPhoto/ShowPhoto';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const Routes = (props) => {
  const photoName = useSelector((state) => state.showPhoto.name);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Картинки',
          }}
        />
        <Stack.Screen
          name="ShowPhoto"
          component={ShowPhoto}
          options={{
            title: photoName,
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'black',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
