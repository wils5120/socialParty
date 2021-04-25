import React, { useState, useEffect } from 'react'
import { StyleSheet, Alert, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Constants from 'expo-constants';

export default () => {
    const [location, setLocation] = useState({})
    const Searchlocation = async () => {
        const { status } = await Location.requestPermissionsAsync()
        if (status !== 'granted') {
            return Alert.alert('No tienes los permisos necesarios para acceder al mapa, por favor acepta los permisos de localización')
        }
        const location = await Location.getCurrentPositionAsync({})
        setLocation(location)
    }

    useEffect(() => {
        Searchlocation()
    })

    return (
        <MapView style={styles.map} >
            { location.coords
                ?
                    <Marker
                        coordinate={location.coords}
                        title="Bar"
                    />
                :
                    null

            }
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: 360
    }
})