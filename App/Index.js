import React from 'react';
import {StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';
import SignUp from './Components/SignUp';
import Memberarea from './Components/Memberarea';
import Login from './Components/Login';
import Home from './Screens/Home';

const style = StyleSheet.create({
    headerStyle:{
        backgroundColor: '#5DADE2',
        elevation : 0,
    },
    titleStyle:{
        color: 'white',
        elevation : 0,
        marginLeft: 30
    },
    loginStyle: {
        color: 'white',
        elevation : 0,
    }
});

const BasicApp = StackNavigator({
    Home : {
      screen: Home,
      navigationOptions:{
          headerStyle: style.headerStyle,
      }
    },
    Signup: {
        screen: SignUp,
        navigationOptions: {
            headerTitle: "Create An Account",
            headerStyle: style.headerStyle,
            headerTitleStyle: style.titleStyle
        },
    },
    Login : {
        screen: Login,
        navigationOptions: {
            headerStyle: style.headerStyle,
            headerTitleStyle: style.loginStyle
        },
    },
    Memberarea: {
        screen: Memberarea,
        navigationOptions: {
            headerTitle: "To Do List",
            headerStyle: style.headerStyle,
            headerTitleStyle: style.titleStyle
        },
    }
},{
        initialRouteName: 'Home', 
    
});


export default BasicApp ;