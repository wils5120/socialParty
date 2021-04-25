import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';

export default ({ navigation }) => {

  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://social-party.herokuapp.com/api/clubs').then(response => response.json())
      .then(data => {
        console.log(data)
        setDatas(data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <View style={styles.containerLoad}>
      <Text style={styles.textLoad}>Espera un momento</Text>
      <ActivityIndicator  size="large" color="#00000"/>
    </View>
  }

  const imgs = {
    fristImg: require('../assets/bar1.jpg'),
    SecondImg: require('../assets/bar2.jpg'),
    Thehremg: require('../assets/bar3.jpeg'),
    fourImg: require('../assets/bar1.jpg'),
    fivetImg: require('../assets/bar2.jpg'),
    sixtImg: require('../assets/bar3.jpeg'),
    sevenImg: require('../assets/bar1.jpg'),
    eightImg: require('../assets/bar3.jpeg'),
    nineImg: require('../assets/bar1.jpg'),
    teenImg: require('../assets/bar2.jpg'),

  }


  const dataBar = [
    { key: '1', name: 'LA SANTA', description: 'Buen bar para menores', event: 'no', certificateCovid: 'no', img: imgs.fristImg, open: 'Abierto', rating: 2 },
    { key: '2', name: 'TONICA', description: 'Buen bar para bailar en psina picha', event: 'si', certificateCovid: 'si', img: imgs.SecondImg, open: 'Abierto', rating: 3 },
    { key: '3', name: 'PARADISE', description: 'Buen bar para ver', event: 'si', certificateCovid: 'no', img: imgs.Thehremg, open: 'Abierto', rating: 1 },
    { key: '4', name: 'MIDLET', description: 'Buen bar para beber', event: 'no', certificateCovid: 'si', img: imgs.fourImg, open: 'Abierto', rating: 5 },
    { key: '5', name: 'LA 51', description: 'Buen bar para gozata', event: 'si', certificateCovid: 'no', img: imgs.fivetImg, open: 'Abierto', rating: 2 },
    { key: '6', name: 'GUADALUPE', description: 'Buen bar para rezar', event: 'no', certificateCovid: 'si', img: imgs.sixtImg, open: 'Abierto', rating: 4 },
    { key: '7', name: 'EL PAISA', description: 'Buen bar para beber con musica', event: 'si', certificateCovid: 'no', img: imgs.sevenImg, open: 'Abierto', rating: 2 },
    { key: '8', name: 'BAR AL SON DE MATAS', description: 'Perreo intenso', event: 'si', certificateCovid: 'si', img: imgs.eightImg, open: 'Abierto', rating: 3 },
    { key: '9', name: 'PURA SALSA', description: 'SALSEALO', event: 'si', certificateCovid: 'no', img: imgs.nineImg, open: 'Abierto', rating: 5 },
    { key: '10', name: 'PURO PERREO', description: 'Perreo intenso', event: 'no', certificateCovid: 'si', img: imgs.teenImg, open: 'Abierto', rating: 1 },
  ]



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="menu" color={'#00095E'} size={33} onPress={() => navigation.openDrawer()} />
        <Text style={styles.textHeader}>HOME</Text>
      </View>
      <View style={styles.body}>
        <FlatList
          data={dataBar}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => navigation.navigate('Clubs')}>
              <ImageBackground style={styles.imgs} source={item.img} >
                <View style={styles.contetText}>
                  <Text id={item.key} style={styles.titleName}>{item.name} </Text>
                  <Text style={styles.texts}>{item.description} </Text>
                  <Text style={styles.texts}>Evento: {item.event} </Text>
                  <Text style={styles.texts}>Certificado Covid: {item.certificateCovid} </Text>
                  <View style={styles.star}>
                    <StarRating
                      disabled={false}
                      emptyStar={'ios-star-outline'}
                      fullStar={'ios-star'}
                      halfStar={'ios-star-half'}
                      iconSet={'Ionicons'}
                      maxStars={5}
                      rating={item.rating}
                      fullStarColor={'#F5D73A'}
                      starSize={30}
                    /* selectedStar={onStarRatingPress(rating)} */
                    />
                  </View>
                </View>
                <View style={styles.contentStore}>
                  <View style={styles.stored}>
                    <Text style={styles.texts}> {item.open} </Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
  imgs: {
    width: '100%',
    height: 200,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  contetText: {
    width: '55%',
    height: '100%',
    backgroundColor: '#250675bf',
    paddingTop: 10,
    paddingLeft: 10
  },
  texts: {
    color: '#fff',
    lineHeight: 20,
    fontSize: 14
  },
  titleName: {
    fontSize: 18,
    color: '#E44D4D'
  },
  contentStore: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '45%',
    height: '100%',
    paddingBottom: 20,
    paddingEnd: 20,
  },
  stored: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#055C6B'
  },
  star: {
    flex: 1,
    height: '100%',
    justifyContent: 'flex-end',
    paddingBottom: 15,
    paddingEnd: 15
  },
  containerLoad: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textLoad: {
    fontSize: 30
  }
});
