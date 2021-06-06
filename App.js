import * as React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createAppContainer } from 'react-navigation';
import { Feather,FontAwesome } from '@expo/vector-icons';
// screens
import Home from './src/screens/Home';
import Complete from './src/screens/Complete';
import CreateScreen from './src/screens/CreateScreen';
import TodoScreen from './src/screens/TodoScreen';
import EditScreen from './src/screens/EditScreen';

import {Provider} from 'react-redux';
import { createStore} from 'redux';
import ListReducer from './src/reducers/ListReducer';
import { setNavigator } from './src/navigation/navigationRef';

const tabBarOptions = {
  showLabel: false,
  activeTintColor: '#9381ff',
  style: {
    height: '10%',
  },
};

const store = createStore(ListReducer);
const switchNavigator = createMaterialBottomTabNavigator({
    Homepage:{ 
      screen:createStackNavigator({
        Home,
        CreateScreen,
        TodoScreen,
        EditScreen
      }),
      navigationOptions:{  
        tabBarLabel:'Home',  
        tabBarIcon: ({color, size}) => (
          <FontAwesome name="list-alt" size={24} color={color} />
        )  
      }
    },
    Complete: {
      screen:Complete,
      navigationOptions:{  
        tabBarLabel:'Complete',  
        tabBarIcon: ({color, size}) => (
          <Feather name="check-square" size={24} color={color} />
        )  
      }  
    },
  },
    {  
      initialRouteName: "Homepage",  
      activeColor: '#f0edf6',  
      inactiveColor: '#226557',  
      barStyle: { backgroundColor: '#3BAD87' },  
    }
);

const App  = createAppContainer(switchNavigator);

export default () => {
  return (
    <Provider store={store}>
      <App ref={(navigator) => {setNavigator(navigator)}} />
    </Provider>
  );
}