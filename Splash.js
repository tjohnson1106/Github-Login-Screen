import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Github</Text>
                </View>
                <Text style={styles.subitle}>Powered by React Native</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#2980b9',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'

    },
    subitle: {
        color: 'white',
        fontWeight: '200',
        paddingTop: 20

    },
    titleWrapper: {
        justifyContent: 'center',
        flex: 1


    }
});