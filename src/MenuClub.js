import React from 'react';
import { Text, ImageBackground, StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ProductsMenu from './constants/ProductsMenu';

export default () => {

    var menuImg = require('../assets/carta.png')

    const imgs = {
        beerImg: require('../assets/beer.png'),
        vodkaImg: require('../assets/vodka.png'),
        viskyImg: require('../assets/wisky.png')
    }


    const dataMenuTop = {
        DataTop: {
            nameSpace: 'mas vendidos',
            data: [
                { key: '1', name: 'Poker', des: true, descValue: '20', value: '15.000', productImg: imgs.beerImg },
                { key: '2', name: 'Avsolut', des: true, descValue: '25', value: '80.000', productImg: imgs.vodkaImg },
                { key: '3', name: 'Jhony Walker', des: true, descValue: '20', value: '90.000', productImg: imgs.viskyImg },
                { key: '4', name: 'Corona', des: true, descValue: '28', value: '20.000', productImg: imgs.beerImg },
                { key: '5', name: 'VodRus', des: true, descValue: '30', value: '150.000', productImg: imgs.vodkaImg },
                { key: '6', name: 'Jagger Masser', des: true, descValue: '10', value: '100.000', productImg: imgs.viskyImg },
            ]
        },
        dataBeer: {
            nameSpace: 'Cerveza',
            data: [
                { key: '1', name: 'Poker', des: false, value: '15.000', productImg: imgs.beerImg },
                { key: '2', name: 'Poker roja', des: false, value: '10.000', productImg: imgs.beerImg },
                { key: '3', name: 'Club Colombia', des: false, value: '30.000', productImg: imgs.beerImg },
                { key: '4', name: 'Corona', des: false, value: '25.000', productImg: imgs.beerImg },
                { key: '5', name: 'Heiniken', des: false, value: '18.000', productImg: imgs.beerImg },
                { key: '6', name: 'Aguila', des: false, value: '11.000', productImg: imgs.beerImg },
            ]
        },
        dataVodka: {
            nameSpace: 'Vodka',
            data: [
                { key: '1', name: 'absolut', des: false, value: '150.000', productImg: imgs.vodkaImg },
                { key: '2', name: 'RusVod', des: false, value: '170.000', productImg: imgs.vodkaImg },
                { key: '3', name: 'Belvedere', des: false, value: '70.000', productImg: imgs.vodkaImg },
                { key: '4', name: 'Finlandia', des: false, value: '50.000', productImg: imgs.vodkaImg },
                { key: '5', name: 'Grey Goose', des: false, value: '180.000', productImg: imgs.vodkaImg },
                { key: '6', name: 'Smirnoff', des: true, descValue: '20', value: '60.000', productImg: imgs.vodkaImg },
            ]
        },
        dataWisky: {
            nameSpace: 'Whisky',
            data: [
                { key: '1', name: 'Talisker', des: false, value: '150.000', productImg: imgs.viskyImg },
                { key: '2', name: 'Johnny Walker', des: false, value: '170.000', productImg: imgs.viskyImg },
                { key: '3', name: 'Jack Daniels', des: true, descValue: '25', value: '180.000', productImg: imgs.viskyImg },
                { key: '4', name: 'Macallan', des: false, value: '500.000', productImg: imgs.viskyImg },
                { key: '5', name: 'J&B', des: false, value: '180.000', productImg: imgs.viskyImg },
                { key: '6', name: 'Passport', des: true, descValue: '10', value: '160.000', productImg: imgs.viskyImg },
            ]
        }
    }

    const dataMenuBeer = [
    ]

    return (
        <View style={styles.container}>
            <View style={styles.headers}>
                <ImageBackground source={menuImg} style={styles.imgMenuClubs}>
                    <Text style={styles.text}>CARTA</Text>
                </ImageBackground>
            </View>
            <View style={styles.boby}>
                <ScrollView
                    contentContainerStyle={styles.contentContainer}>
                    <ProductsMenu dataMenuTop={dataMenuTop.DataTop} />
                    <ProductsMenu dataMenuTop={dataMenuTop.dataBeer} />
                    <ProductsMenu dataMenuTop={dataMenuTop.dataVodka} />
                    <ProductsMenu dataMenuTop={dataMenuTop.dataWisky} />
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 150
    },
    text: {
        color: '#fff',
        fontSize: 30
    },
    imgMenuClubs: {
        width: Dimensions.get('window').width,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }

})