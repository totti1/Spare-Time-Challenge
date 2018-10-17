import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Firebase from'../Firebase/firebase';

export default class SignUp extends React.Component {
    // state = { email: '', password: ''};
    render(){
        // const { navigate } = this.props.navigation;
        return (
            <View style = {styles.container}>
                <KeyboardAvoidingView behavior = "position">
                    <View style = {styles.header}>
                        <Text style = {styles.title}>Sign Up</Text>
                    </View>
                    <View style = {styles.content}>
                        <View style = {styles.icon}>
                            <Icon
                                name = "users"
                                size={20}
                                color="#AEB6BF"
                                style = {styles.iconStyle}
                            />
                            <TextInput
                                       style = {{flex:1}}
                                       // icon = {<Icon name = "users"/>}
                                       underlineColorAndroid = "transparent"
                                       placeholder = "Username"
                                       placeholderTextColor = "#AEB6BF"
                                       autoCapitalize = "none"
                                       onChangeText = {(username)=> this.setState({username})}
                                       // value = {this.state.username}
                            />
                        </View>
                        <View style = {styles.icon}>
                            <Icon
                                name = "envelope-o"
                                size={20}
                                color="#AEB6BF"
                                style = {styles.iconStyle}
                            />
                            <TextInput style = {{flex: 1}}
                                       // icon = {<Icon name = "envelope-o"/>}
                                       underlineColorAndroid = "transparent"
                                       placeholder = "Email"
                                       placeholderTextColor = "#AEB6BF"
                                       autoCapitalize = "none"
                                       onChangeText = {(email)=> this.setState({email})}
                                       // value = {this.state.email}
                            />
                        </View>
                        <View style = {styles.icon}>
                            <Icon
                                name = "lock"
                                size={20}
                                color="#AEB6BF"
                                style = {styles.iconStyle}
                            />
                            <TextInput style = {{flex:1}}
                                secureTextEntry ={true}
                                //        icon = {<Icon name = "lock"/>}
                                       underlineColorAndroid = "transparent"
                                       placeholder = "Password"
                                       placeholderTextColor = "#AEB6BF"
                                       autoCapitalize = "none"
                                       onChangeText = {(password)=> this.setState({password})}
                                       value = {this.state.password}
                            />
                        </View>
                        <TouchableOpacity
                            style = {styles.submitButton}
                            onPress = {this.SignUp}
                        >
                            <Text style = {styles.submitButtonText}> Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
                <View style = {styles.iconfooter}>
                    <TouchableOpacity style={styles.searchIcon}>
                        <Icon
                            name="facebook-square"
                            size={30}
                            color="#FDFEFE"
                            style={styles.fbicon}/>
                        <Text style={styles.texticonfooter}>SignUp with facebook</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.iconfooter}>
                    <TouchableOpacity style={styles.googleicon}>
                        <Icon name = "google"
                              size={30}
                              color="#FDFEFE"
                              style={styles.fbicon}/>
                        <Text style={styles.texticonfooter}>SignUp with google</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    SignUp = () => {
        // console.log('clicking');
        const {email, password} = this.state;
        if (this.state.password.length < 6){
            alert('Password must be at least 6 characters')
            return
        }
        else{
                //Login was not successful, let's create a new account
            Firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                this.props.navigation.navigate('Memberarea');
                // alert ('data inserted');
                // this.setState({error: '', loading: false});
            })
            .catch((error) => {
                const {code, message} = error;
                alert ('nothing was inserted');
                // this.setState({error: 'Authentication failed.', loading: false});
            });
        }
    }
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // color : '#76D7C4',
        backgroundColor: '#FDFEFE',
        height : '100%',
        width : '100%'
    },
    submitButton: {
        backgroundColor: '#5DADE2',
        padding: 10,
        marginTop: 15,
        height: 45,
        borderRadius: 50,
        width: 320,
        alignItems : 'center',
        // borderWidth: 2,
        // borderColor: '#F4D03F'
    },
    submitButtonText:{
        color: '#FDFEFE',
        fontSize: 20,
        alignItems: 'center',
        textAlign: 'center',
    },
    text: {
        fontSize :20,
        marginTop: 50
    },
    content: {
        marginTop: 25,
        alignItems: 'center',

    },
    title: {
        color: '#FDFEFE',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 50,

    },
    image: {
        marginTop: 20,
        width: 120,
        height: 120,
        borderRadius: 100,
    },
    header: {
        alignItems: 'center',
    },
    signin:{
        marginTop : 10,
        color: 'white',
    },
    icon:{
        flexDirection: 'row',
        margin: 15,
        height: 40,
        width: 320,
        backgroundColor: 'white',
        borderBottomWidth: 2,
        borderBottomColor: '#AEB6BF',
        marginTop: 20,
        // paddingHorizontal: 0,
    },
    iconStyle:{
        padding: 10,
    },
    iconfooter:{
        alignItems: 'center',
        marginTop: 5,
    },
    texticonfooter:{
        flex:1,
        fontSize: 15,
        color: '#FDFEFE',
        marginLeft: 20,
    },
    searchIcon:{
        flexDirection: 'row',
        backgroundColor: '#2471A3',
        height: 45,
        borderRadius: 50,
        width: 320,
        alignItems: 'center',
    },
    fbicon:{
        marginLeft: 40,
    },
    googleicon:{
        flexDirection: 'row',
        backgroundColor: '#F4D03F',
        height: 45,
        // borderWidth:2,
        // borderColor:'#AEB6BF',
        borderRadius: 50,
        width: 320,
        alignItems: 'center',
    }
});