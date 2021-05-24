import React, { useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ({ navigation }) => {

    useEffect(() => {
        AsyncStorage.getItem('token')
            .then(x => {
                navigation.navigate(x ? 'Home' : 'Login')
            })
    }, [])

    /* onPress={() => navigation.navigate('MenuClub')} */
    return (
        <View style={styles.containerLoad}>
            <Text style={styles.textLoad}>Espera un momento</Text>
            <ActivityIndicator size="large" color="#00000" />
        </View>
    )
}


const styles = StyleSheet.create({
    containerLoad: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLoad: {
        fontSize: 30
    },
})