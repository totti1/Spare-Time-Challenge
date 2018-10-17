import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class Home extends React.Component {
    render(){
        return (
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <Image source = {require('../Images/limitless.png')} style = {styles.image}/>
                </View>
                <View style = {styles.titleView}>

                </View>
                <View style = {styles.content}>
                    <TouchableOpacity
                        style = {styles.submit}
                        onPress = {()=> this.props.navigation.navigate('Signup')}
                    >
                        <Text style = {styles.signupText}> Create An Account </Text>
                    </TouchableOpacity>
                    <Text style = {styles.title}>Already have an Account ? </Text>
                    <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {()=> this.props.navigation.navigate('Login')}
                    >
                        <Text style = {styles.submitButtonText}> LogIn</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.footer}>
                    <Text style = {styles.footerText}>By creating an account you agree to our Terms of use and privacy policy</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // color : '#76D7C4',
        backgroundColor: '#5DADE2',
        height: '100%',
        width: '100%'
    },
    content: {
        marginTop: 35,
    },
    submit:{
        backgroundColor: '#FDFEFE',
        padding: 10,
        margin: 15,
        height: 45,
        borderRadius: 50,
        width: 320,
        alignContent : 'center',
    },
    signupText:{
        color: '#5DADE2',
        fontSize: 15,
        alignItems: 'center',
        textAlign: 'center',
    },
    submitButton: {
        backgroundColor: '#F4D03F',
        padding: 10,
        margin: 15,
        height: 45,
        borderRadius: 50,
        width: 320,
        alignContent : 'center',
        // borderWidth: 2,
        // borderColor: '#F4D03F'
    },
    submitButtonText:{
        color: '#FDFEFE',
        fontSize: 15,
        alignItems: 'center',
        textAlign: 'center',
    },
    image: {
        marginTop: 20,
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    header: {
        alignItems: 'center',
    },
    title: {
        color: '#FDFEFE',
        alignItems: 'center',
        textAlign: 'center'
    },
    titleView:{
      marginTop: 30,
    },
    footer: {
        marginTop: 125,
    },
    footerText:{
        color: '#FDFEFE',
        fontSize: 12,
        alignItems: 'center',
        textAlign: 'center'
    },
});