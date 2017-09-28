import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={require('../../Images/Octocat.png')} 
                    />

                    <Text>An App Made for Github Using React Native</Text>
                 </View>
                   <View style={styles.formContainer}>
                   </View>
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo:{
        width: 100,
        height: 100
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 160
    }

});


   