import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, ImageBackground, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';
import { SliderBox } from "react-native-image-slider-box";

//cards
import Menu from './cards/Menu';
import MapCard from './cards/MapCard';
import CardsData from './cards/CardsData';
import Map from './Map';



export default ({ navigation }) => {

    const [viewMaps, setViewMaps] = useState(false)

    const viewMap = () => {
        setViewMaps(viewMaps => !viewMaps)
    }

    const dataImg = [
        require('../assets/bar1.jpg'),
        require('../assets/bar2.jpg'),
        require('../assets/bar3.jpeg'),
        require('../assets/bar1.jpg'),
    ]

    var titleDescrip = 'Descripción'
    var desdrip = 'Este bar cuenta con una zona para fumadores, es super amplico para que el aire circule ademas de esto contamos con uno de los mejores Dj de Bogota'
    var descripImg = require('../assets/image18.png')

    var titleEvent = 'Evento'
    var event = ' El dia de hoy se tendra en exclusiva a J Balbin no te lo pierdas!!!! :D'
    var eventImg = require('../assets/events.png')
    var eventActive = true

    var titlePromotion = 'Promociónes'
    var descripPromo = 'El dia de hoy hay barra libre hasta las 10pm aprobecha y cae con tu parche, no te lo pierdas'
    var promoImg = require('../assets/promo.png')
    var promoActive = false


    var titleCover = 'Cover/ Derechos de admisión'
    var descripCover = 'Este bar cuenta con un cover de $10.000 pesos ademas de esto exije codeDress.'
    var coverImg = require('../assets/Rectangle21.png')

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons
                    name="menu" color={'#00095E'} size={33} onPress={() => navigation.openDrawer()} />
                <Text style={styles.textHeader}>TONICA</Text>
            </View>
            <View style={styles.body}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View>
                        <SliderBox
                            images={dataImg}
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
                        <CardsData descrip={desdrip} img={descripImg} title={titleDescrip} />
                        {eventActive ? <CardsData descrip={event} img={eventImg} title={titleEvent} /> : null}
                        {promoActive ? <CardsData descrip={descripPromo} img={promoImg} title={titlePromotion} /> : null}
                        <CardsData descrip={descripCover} img={coverImg} title={titleCover} />
                        <Menu navigation={navigation} />
                        <MapCard onPress={viewMap} />
                        {
                            viewMaps ?
                                <Map />
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
})