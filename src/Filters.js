import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Button, ActivityIndicator, Image, ScrollView, Switch, TouchableOpacity } from 'react-native';

export default ({ navigation }) => {

  var salsa = require('../assets/tambor-con-palitos.png')
  var reggetton = require('../assets/amplificador.png')
  var electronic = require('../assets/piano.png')
  var rock = require('../assets/silueta-variante-de-guitarra-electrica.png')
  var vallenato = require('../assets/acordeon.png')
  var Crossover = require('../assets/danza.png')
  var todo = require('../assets/vino.png')
  var casual = require('../assets/toast.png')
  var lgtb = require('../assets/variante-de-copa-con-detalles-en-blanco.png')
  var internacional = require('../assets/trago-de-tequila.png')
  var coctel = require('../assets/copa-de-coctel-en-copa-de-vino.png')

  const [isEnabledCovid, setIsEnabledCovid] = useState(false);
  const [cover, setIcover] = useState(false);
  const [events, setevents] = useState(false);
  const [eventSearch, seteventSearch] = useState(null);

  const toggleSwitch = () => setIsEnabledCovid(!isEnabledCovid);
  const toggleSwitchCover = () => setIcover(!cover);
  const toggleSwitchEvents = () => setevents(!events);
  const [loader, setLoader] = useState(false)

  const [activeButton, setActiveButton] = useState(null);

  const changeBgColor = (type) => {
    setActiveButton(type)
  }


  const [activeButtonGenr, setActiveButtonGenr] = useState(null);

  const changeBgColorGnr = (type) => {
    setActiveButtonGenr(type)
  }

  const searchClub = () => {
    let arrayTest = []
    setLoader(true)
    let submitEvent
    if (events == true) {
      submitEvent = 0
    } else {
      submitEvent = 1
    }
    fetch('https://social-party.herokuapp.com/api/clubs?musical_genre=' + activeButtonGenr + '&type=' + activeButton + '&covid=' + true + '&cover=0&events=' + submitEvent)
      .then(data => {
        setLoader(false)
        if (data.status == 200) {
          data.json().then(Response => {
            arrayTest.push(Response)
            navigation.navigate('Home', arrayTest)
          })
        }
      }).catch(error => {
        console.log("errpr", error)
      });
  }

  if (loader) {
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
        <Text style={styles.textHeader}>FILTROS</Text>
      </View>
      <View style={styles.body}>
        <ScrollView>
          <View style={styles.contenTitle}>
            <Text style={styles.title}>GENERO</Text>
          </View>
          <View style={styles.contentGenre}>
            <View style={styles.genre}>
              <TouchableOpacity onPress={() => changeBgColorGnr('Urbano')}>
                <View style={activeButtonGenr == 'Urbano' ? styles.buttonGenreActive : styles.buttonGenreInactive}>
                  <Image style={styles.imgGen} source={reggetton} />
                  <Text style={styles.texts}>Urbano</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => changeBgColorGnr('Salsa')}>
                <View style={activeButtonGenr == 'Salsa' ? styles.buttonGenreActive : styles.buttonGenreInactive}>
                  <Image style={styles.imgGen} source={salsa} />
                  <Text style={styles.texts}>Salsa</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => changeBgColorGnr('Electronica')}>
                <View style={activeButtonGenr == 'Electronica' ? styles.buttonGenreActive : styles.buttonGenreInactive}>
                  <Image style={styles.imgGen} source={electronic} />
                  <Text style={styles.texts}>Electronica</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.genreLow}>
              <TouchableOpacity onPress={() => changeBgColorGnr('Vallenato')}>
                <View style={activeButtonGenr == 'Vallenato' ? styles.buttonGenreActive : styles.buttonGenreInactive}>
                  <Image style={styles.imgGen} source={vallenato} />
                  <Text style={styles.texts}>Vallenato</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => changeBgColorGnr('Rock')}>
                <View style={activeButtonGenr == 'Rock' ? styles.buttonGenreActive : styles.buttonGenreInactive}>
                  <Image style={styles.imgGen} source={rock} />
                  <Text style={styles.texts}>Rock</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => changeBgColorGnr('CrossOver')}>
                <View style={activeButtonGenr == 'CrossOver' ? styles.buttonGenreActive : styles.buttonGenreInactive}>
                  <Image style={styles.imgGen} source={Crossover} />
                  <Text style={styles.texts}>Crossover</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contenTitle}>
            <Text style={styles.title}>AMBIENTE</Text>
          </View>
          <View style={styles.contentGenre}>
            <View style={styles.genre}>
              <TouchableOpacity onPress={() => changeBgColor('all')} style={styles.buttonTouch}>
                <View style={activeButton == 'all' ? styles.buttonGenreActive : styles.buttonGenreInactive}>
                  <Image style={styles.imgGen} source={todo} />
                  <Text style={styles.texts}>De todo</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => changeBgColor('Casual')} style={styles.buttonTouch}>
                <View style={activeButton == 'Casual' ? styles.buttonGenreActive : styles.buttonGenreInactive}>
                  <Image style={styles.imgGen} source={casual} />
                  <Text style={styles.texts}>Casual</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => changeBgColor('LGTB')} style={styles.buttonTouch}>
                <View style={activeButton == 'LGTB' ? styles.buttonGenreActive : styles.buttonGenreInactive}>
                  <Image style={styles.imgGen} source={lgtb} />
                  <Text style={styles.texts}>LGTB</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.genreLow}>
              <TouchableOpacity onPress={() => changeBgColor('Internacional')} style={styles.buttonTouch}>
                <View style={activeButton == 'Internacional' ? styles.buttonGenreActive : styles.buttonGenreInactive}>
                  <Image style={styles.imgGen} source={internacional} />
                  <Text style={styles.texts}>Internacional</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonTouch} onPress={() => changeBgColor('Bar/Cantina')} >
                <View style={activeButton == 'Bar/Cantina' ? styles.buttonGenreActive : styles.buttonGenreInactive}>
                  <Image style={styles.imgGen} source={coctel} />
                  <Text style={styles.texts}>cantina</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contenTitle}>
            <Text style={styles.title}>FILTROS AVANAZADOS</Text>
          </View>
          <View style={styles.contentGenre}>
            <View style={styles.filtersContent}>
              <View style={styles.filters}>
                <Text style={styles.textFilts}>Certificado Covid</Text>
                <Switch
                  trackColor={{ false: "#E9E9E9", true: "#E9E9E9" }}
                  thumbColor={isEnabledCovid ? "#250675" : "#0A0A0A"}
                  ios_backgroundColor="#E9E9E9"
                  onValueChange={toggleSwitch}
                  value={isEnabledCovid}
                  style={styles.Switchs}
                />
              </View>
              <View style={styles.filters}>
                <Text style={styles.textFilts}>Cover</Text>
                <Switch
                  trackColor={{ false: "#E9E9E9", true: "#E9E9E9" }}
                  thumbColor={cover ? "#250675" : "#0A0A0A"}
                  ios_backgroundColor="#E9E9E9"
                  onValueChange={toggleSwitchCover}
                  value={cover}
                  style={styles.Switchs}
                />
              </View>
              <View style={styles.filters}>
                <Text style={styles.textFilts}>Eventos</Text>
                <Switch
                  trackColor={{ false: "#E9E9E9", true: "#E9E9E9" }}
                  thumbColor={events ? "#250675" : "#0A0A0A"}
                  ios_backgroundColor="#E9E9E9"
                  onValueChange={toggleSwitchEvents}
                  value={events}
                  style={styles.Switchs}
                />
              </View>
            </View>
          </View>
          <View style={styles.contSearshFilter}>
            <Text style={styles.textCleanFilters}>Limpiar filtros</Text>
            <Button title="Buscar" color="#250675" style={styles.buttons} onPress={searchClub}></Button>
          </View>
        </ScrollView>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  containerLoad: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textLoad: {
    fontSize: 30
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
  textHeader: {
    color: '#00095E',
    fontSize: 24,
    marginLeft: 5
  },
  body: {
    flex: 1,
    marginTop: 20
  },
  contenTitle: {
    borderTopWidth: 1,
    borderTopColor: '#063B75',
    borderBottomWidth: 1,
    borderBottomColor: '#063B75',
    paddingBottom: 15,
    paddingTop: 15,
    marginTop: 10,
    alignItems: 'center'
  },
  title: {
    color: '#00095E',
    fontSize: 24,
    fontWeight: 'bold'
  },
  contentGenre: {
    alignItems: 'center',
    paddingTop: 15,
  },
  genre: {
    flexDirection: 'row'
  },
  genreLow: {
    flexDirection: 'row',
    paddingTop: 30,
    paddingBottom: 80,
    marginTop: 30
  },
  imgGen: {
    marginTop: 20,
    width: 60,
    height: 60,
    backgroundColor: 'transparent',
    marginBottom: 2,
  },
  texts: {
    color: '#4A056B',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
  },
  filters: {
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 20
  },
  filtersContent: {
    width: '100%',
    paddingLeft: 20
  },
  textFilts: {
    fontSize: 14,
    color: '#4A056B',
    width: '50%',
  },
  Switchs: {
    width: '40%',
    alignItems: 'flex-end',
  },
  contSearshFilter: {
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 40,
    paddingTop: 20,
    paddingRight: 45,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  textCleanFilters: {
    fontSize: 15,
    color: '#250675',
    paddingLeft: 20,
    marginEnd: 20
  },
  buttons: {
    borderRadius: 5,
  },
  buttonGenreActive: {
    backgroundColor: '#4b056bb8',
    width: 111,
    height: 95,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    paddingTop: 25,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10
  },
  buttonGenreInactive: {
    backgroundColor: 'transparent',
    width: 111,
    height: 95,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    paddingTop: 25,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10
  },
});
