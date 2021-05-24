import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import StarRating from 'react-native-star-rating';

export default ({ route: { params }, navigation }) => {

  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true)
  const [change, setchange] = useState(true)
  const [test, setTest] = useState(false)


  useEffect(() => {
    fetch('https://social-party.herokuapp.com/api/clubs').then(response => response.json())
      .then(data => {
        setDatas(data)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    setchange(true)
  }, [params])


  if (params != undefined && change) {
    setTest(true)
    setchange(false)
  }

  const clean = () => {
    setTest(false)

  }

  if (params != params) {
    setDatas(params)
  }


  if (loading) {
    return <View style={styles.containerLoad}>
      <Text style={styles.textLoad}>Espera un momento</Text>
      <ActivityIndicator size="large" color="#00000" />
    </View>
  }


  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="menu" color={'#00095E'} size={33} onPress={() => navigation.openDrawer()} />
        <Text style={styles.textHeader}>HOME</Text>
      </View>
      {
        test ?
          <View style={styles.boxButton}>
            <Button title="Borrar Filtros" onPress={clean} color="#250675" />
          </View>
          : null
      }

      <View style={styles.body}>
        <FlatList
          data={test ? params[0] : datas}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => navigation.navigate('Clubs', { id: item._id })}>
              <ImageBackground style={styles.imgs} source={{ uri: item.background }} >
                <View style={styles.contetText}>
                  <Text id={item._id} keyExtractor={item => item._id} style={styles.titleName}>{item.name} </Text>
                  <Text style={styles.texts}>{item.desc} </Text>
                  {
                    item.events.length > 0 ?
                      <Text style={styles.texts}>Evento: Si </Text>
                      :
                      <Text style={styles.texts}>Evento: No </Text>
                  }
                  {
                    item.covid ?
                      <Text style={styles.texts}>Certificado Covid: Si </Text>
                      :
                      <Text style={styles.texts}>Certificado Covid: No </Text>
                  }
                  {/*   <View style={styles.star}>
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
                        selectedStar={onStarRatingPress(rating)}
                    />
                  </View> */}
                </View>
                <View style={styles.contentStore}>
                  {
                    item.state == 'open' ?
                      <View style={styles.stored}>
                        <Text style={styles.texts}> {item.state} </Text>
                      </View>
                      :
                      <View style={styles.storedClosed}>
                        <Text style={styles.texts}> {item.state} </Text>
                      </View>
                  }

                </View>
              </ImageBackground>
            </TouchableOpacity>
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  boxButton: {
    marginTop: 10
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
  storedClosed: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#FF1A35'
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
