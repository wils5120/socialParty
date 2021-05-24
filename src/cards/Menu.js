import React from 'react';
import { Text, ImageBackground, StyleSheet, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default ({navigation, datas}) => {

    var menuImg = require('../../assets/Rectangle24.png')
    return (
        <TouchableHighlight onPress={() => navigation.navigate('MenuClub',  datas)} >
            <ImageBackground style={styles.imgMenu} source={menuImg} imageStyle={{ borderRadius: 7 }}>
                <Text style={styles.titleBoxMap}>Carta</Text>
                <Ionicons name="chevron-forward-sharp" color={'#ffff'} size={33} />
            </ImageBackground>
        </TouchableHighlight>
    )
}


const styles = StyleSheet.create({
    titleBoxMap: {
        color: '#fff',
        fontSize: 18,
        paddingLeft: 20,
        paddingTop: 10,
        width: '80%',
        paddingBottom: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    imgMenu: {
        width: '100%',
        height: 76,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
})