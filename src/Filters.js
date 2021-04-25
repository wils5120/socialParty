import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, ScrollView, Switch, TouchableWithoutFeedback } from 'react-native';

export default ({ navigation }) => {

  var salsa = require('../assets/tambor-con-palitos.jpg')
  var reggetton = require('../assets/amplificador.jpg')
  var electronic = require('../assets/piano.jpg')
  var rock = require('../assets/silueta-variante-de-guitarra-electrica.jpg')
  var vallenato = require('../assets/acordeon.jpg')
  var Crossover = require('../assets/danza.png')
  var todo = require('../assets/vino.jpg')
  var casual = require('../assets/toast.jpg')
  var lgtb = require('../assets/variante-de-copa-con-detalles-en-blanco.jpg')
  var internacional = require('../assets/trago-de-tequila.png')
  var coctel = require('../assets/copa-de-coctel-en-copa-de-vino.png')

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  const [activeButton, setActiveButton] = useState(false);

  const changeBgColor = () => {
    setActiveButton(activeButton => !activeButton)
  }


  const [activeButtonGenr, setActiveButtonGenr] = useState(false);

  const changeBgColorGnr = () => {
    setActiveButtonGenr(activeButtonGenr => !activeButtonGenr)
  }

  console.log(activeButton)
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
              <TouchableHighlight>
                <View  style={styles.buttonGenreInactive}>
                  <Image style={styles.imgGen} source={reggetton} />
                  <Text style={styles.texts}>Reggaeton</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight>
                <View style={styles.buttonGenreInactive}>
                  <Image style={styles.imgGen} source={salsa} />
                  <Text style={styles.texts}>Salsa</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight>
                <View  style={styles.buttonGenreInactive}>
                  <Image style={styles.imgGen} source={electronic} />
                  <Text style={styles.texts}>Electronica</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.genreLow}>
              <TouchableHighlight>
                <View style={styles.buttonGenreInactive}>
                  <Image style={styles.imgGen} source={vallenato} />
                  <Text style={styles.texts}>Vallenato</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight>
                <View  style={styles.buttonGenreInactive}>
                  <Image style={styles.imgGen} source={rock} />
                  <Text style={styles.texts}>Rock</Text>
                </View>
              </TouchableHighlight>
              <TouchableWithoutFeedback onPress={changeBgColorGnr}>
                <View style={(activeButtonGenr) ? styles.buttonGenreActive : styles.buttonGenreInactive}>
                  <Image style={styles.imgGen} source={Crossover} />
                  <Text style={styles.texts}>Crossover</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={styles.contenTitle}>
            <Text style={styles.title}>AMBIENTE</Text>
          </View>
          <View style={styles.contentGenre}>
            <View style={styles.genre}>
              <TouchableHighlight>
                <View  style={styles.buttonGenreInactive}>
                  <Image style={styles.imgGen} source={todo} />
                  <Text style={styles.texts}>De todo</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight>
                <View  style={styles.buttonGenreInactive}>
                  <Image style={styles.imgGen} source={casual} />
                  <Text style={styles.texts}>Casual</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight>
                <View style={styles.buttonGenreInactive}>
                  <Image style={styles.imgGen} source={lgtb} />
                  <Text style={styles.texts}>LGTB</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.genreLow}>
              <TouchableWithoutFeedback onPress={changeBgColor} style={styles.buttonTouch}>
                <View style={(activeButton) ? styles.buttonGenreActive : styles.buttonGenreInactive}>
                  <Image style={styles.imgGen} source={internacional} />
                  <Text style={styles.texts}>Internacional</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback style={styles.buttonTouch}>
                <View style={styles.buttonGenreInactive}>
                  <Image style={styles.imgGen} source={coctel} />
                  <Text style={styles.texts}>Cocteles</Text>
                </View>
              </TouchableWithoutFeedback>
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
                  thumbColor={isEnabled ? "#250675" : "#0A0A0A"}
                  ios_backgroundColor="#E9E9E9"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  style={styles.Switchs}
                />
              </View>
              <View style={styles.filters}>
                <Text style={styles.textFilts}>Cover</Text>
                <Switch
                  trackColor={{ false: "#E9E9E9", true: "#E9E9E9" }}
                  thumbColor={isEnabled ? "#250675" : "#0A0A0A"}
                  ios_backgroundColor="#E9E9E9"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  style={styles.Switchs}
                />
              </View>
              <View style={styles.filters}>
                <Text style={styles.textFilts}>Eventos</Text>
                <Switch
                  trackColor={{ false: "#E9E9E9", true: "#E9E9E9" }}
                  thumbColor={isEnabled ? "#250675" : "#0A0A0A"}
                  ios_backgroundColor="#E9E9E9"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  style={styles.Switchs}
                />
              </View>
            </View>
          </View>
          <View style={styles.contSearshFilter}>
            <Text style={styles.textCleanFilters}>Limpiar filtros</Text>
            <Button title="Buscar" color="#250675" style={styles.buttons}></Button>
          </View>
        </ScrollView>
      </View>
    </View >
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
