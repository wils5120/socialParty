import React from 'react';
import { Text, ImageBackground, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default ({ onPress }) => {

    var mapImg = require('../../assets/image7.png')

    return (
        <TouchableOpacity onPress={onPress}>
            <ImageBackground style={styles.imgAddress} source={mapImg} imageStyle={{ borderRadius: 7 }}>
                <View style={styles.containerAddress}>
                    <Text style={styles.titleBox}>Dirección</Text>
                    <Text style={styles.letterBox}>
                        cra 88i #44 nor zona T
            </Text>
                </View>
                <Ionicons name="chevron-forward-sharp" color={'#ffff'} size={33} />
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerAddress: {
        width: '80%',
        marginBottom: 10
    },
    titleBox: {
        color: '#fff',
        fontSize: 18,
        paddingLeft: 20,
        paddingTop: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    letterBox: {
        color: '#fff',
        fontSize: 14,
        paddingLeft: 20,
        paddingTop: 10
    },
    imgAddress: {
        width: '100%',
        height: 80,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

})