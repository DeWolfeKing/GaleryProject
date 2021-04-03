import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GalleryScreen from '../screens/galleryScreen';
import ImageInfoScreen from '../screens/imageInformationScreen';
import {Provider} from 'react-redux';
import {store} from '../store';
const Stack = createStackNavigator();

const Nav = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="GALLERY_SCREEN" component={GalleryScreen} />
          <Stack.Screen name="IMAGE_INFO_SCREEN" component={ImageInfoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default Nav;
