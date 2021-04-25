import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default (props) => {
    return (
        <View style={styles.content}>
            <TouchableOpacity onPress={() =>  props.navigation.navigate('Home')}>
                <View style={styles.flexs}>
                    <Ionicons
                        name="md-home"
                        size={20}
                        color={'#fff'}
                    />
                    <Text style={styles.Text}>Home</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => props.navigation.navigate('Filtros')}>
                <View style={styles.flexs}>
                    <Ionicons
                        name="options"
                        size={20}
                        color={'#fff'}
                    />
                    <Text style={styles.Text}>Filtros</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    Text:{
        color: '#fff',
        fontSize: 18,
        paddingLeft: 10,
    },
    flexs: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 10
    },
    content: {
        flex: 1,
        paddingTop: 40,
        paddingLeft: 20
    }
})