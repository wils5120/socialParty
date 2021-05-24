import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, ImageBackground, ScrollView, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';
import { SliderBox } from "react-native-image-slider-box";

//cards
import Menu from './cards/Menu';
import MapCard from './cards/MapCard';
import CardsData from './cards/CardsData';
import Map from './Map';



export default ({ route, navigation }) => {

    const [viewMaps, setViewMaps] = useState(false)
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true)
    const [locations, setLocations] = useState(null);
    const [imgData, setimgData] = useState([]);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        setLoading(true)
        const dataLoad = []
        const dataProducts = []
        fetch('https://social-party.herokuapp.com/api/clubs/' + route.params.id).then(response => response.json())
            .then(data => {
                setDatas(data)
                setLoading(false)
                dataProducts.push(data.products)
                setProducts(dataProducts)
                if (data.gallery.length > 0) {
                    for (let i = 0; data.gallery.length; i++) {
                        dataLoad.push(data.gallery[i].imageURL)
                        setimgData(dataLoad)
                    }
                }
                let longitude = parseFloat(data.longitud, 10)
                let latitude = parseFloat(data.latitud, 10)
                let dataLocation = { "coordinate": { latitude, longitude } }
                setLocations(dataLocation)
            })
    }, [route.params.id])


    const viewMap = () => {
        setViewMaps(viewMaps => !viewMaps)
    }

    if (loading) {
        return <View style={styles.containerLoad}>
            <Text style={styles.textLoad}>Espera un momento</Text>
            <ActivityIndicator size="large" color="#00000" />
        </View>
    }

    var titleDescrip = 'Descripción'
    var descripImg = require('../assets/image18.png')

    var titleEvent = 'Evento'
    var event = ' El dia de hoy se tendra en exclusiva a J Balbin no te lo pierdas!!!! :D'
    var eventImg = require('../assets/events.png')

    var titlePromotion = 'Promociónes'
    var descripPromo = 'El dia de hoy hay barra libre hasta las 10pm aprobecha y cae con tu parche, no te lo pierdas'
    var promoImg = require('../assets/promo.png')

    var titleCover = 'Cover/ Derechos de admisión'
    var coverImg = require('../assets/Rectangle21.png')

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons
                    name="menu" color={'#00095E'} size={33} onPress={() => navigation.openDrawer()} />
                <Text style={styles.textHeader}>{datas.name}</Text>
            </View>
            <View style={styles.body}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View>
                        <SliderBox
                            images={imgData}
                            sliderBoxHeight={250}
                            dotColor="#fff"
                            dotStyle={{
                                marginBottom: 10,
                                height: 13,
                                width: 12,
                                borderRadius: 100,
                            }}
                        />
                    </View>
                    <View style={styles.contentDesripClub}>
                        <CardsData descrip={datas.desc} img={descripImg} title={titleDescrip} />
                        {datas.events.length > 0 ? <CardsData descrip={event} img={eventImg} title={titleEvent} /> : null}
                        {datas.sales.length > 0 ? <CardsData descrip={descripPromo} img={promoImg} title={titlePromotion} /> : null}
                        <CardsData descrip={datas.cover} img={coverImg} title={titleCover} />
                        {datas.products.length > 0 ? <Menu navigation={navigation} datas={products} /> : null}
                        <MapCard onPress={viewMap} />
                        {
                            viewMaps ?
                                <Map locations={locations} />
                                :
                                null
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 30
    },
    contentDesripClub: {
        marginTop: 10,
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        marginTop: 35,
        marginLeft: 10,
        flexDirection: 'row'
    },
    body: {
        flex: 1,
        marginTop: 20
    },
    textHeader: {
        color: '#00095E',
        fontSize: 24,
        marginLeft: 5
    },
    containerLoad: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLoad: {
        fontSize: 30
    }
})