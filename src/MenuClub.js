import React, { useState, useEffect } from 'react';
import { Text, ImageBackground, StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ProductsMenu from './constants/ProductsMenu';

export default ({ route: { params } }) => {


    const [beer, setBeer] = useState([]);
    const [whisky, setWhisky] = useState([]);
    const [vodka, setvodka] = useState([]);
    const [ron, setPron] = useState([]);

    var menuImg = require('../assets/carta.png')

    const imgs = {
        beerImg: require('../assets/beer.png'),
        vodkaImg: require('../assets/vodka.png'),
        viskyImg: require('../assets/wisky.png')
    }


    console.log("akaka", params)

    useEffect(() => {
        let dataBeer = []
        let dataWhisky = []
        let dataVodka = []
        let dataRon = []
        console.log("asdasdasdasdasd", beer)

        params[0].map((data) => {
            if (data.type == 'beer') {
                dataBeer.push(data)
                setBeer(dataBeer)
            } else if (data.type == 'vodka') {
                dataVodka.push(data)
                setvodka(dataVodka)
            } else if (data.type == 'whisky') {
                dataWhisky.push(data)
                setWhisky(dataWhisky)
            } else if (data.type == 'ron') {
                dataRon.push(data)
                setPron(dataRon)
            }
        })
    }, [params])


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
                    {/* <ProductsMenu dataMenuTop={beer} /> */}
                    {
                        beer.length > 0 ? <ProductsMenu dataMenuTop={beer} title={"Cerveza"} /> : null
                    }
                  
                    {
                        whisky.length > 0 ? <ProductsMenu dataMenuTop={whisky} title={"Whisky"} /> : null
                    }
                    {
                        vodka.length > 0 ?   <ProductsMenu dataMenuTop={vodka} title={"Vodka"} /> : null
                    }
                    {
                        ron.length > 0 ? <ProductsMenu dataMenuTop={ron} title={"Ron"} /> : null
                    }
                  
                    
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