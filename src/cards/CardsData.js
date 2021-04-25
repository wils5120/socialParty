import React from 'react';
import { Text, ImageBackground, StyleSheet } from 'react-native';

export default (props) => {

    const coverImg = props.img;
    const descrip = props.descrip
    const title = props.title


    return (
        <ImageBackground style={styles.imgDrescrip} source={coverImg} imageStyle={{ borderRadius: 7 }}>
            <Text style={styles.titleBox}> {title} </Text>
            <Text style={styles.letterBox}>
                {descrip}
            </Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    titleBox: {
        color: '#fff',
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 10,
        paddingTop: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    letterBox: {
        color: '#fff',
        fontSize: 14,
        paddingLeft: 20,
        paddingRight: 10,
        paddingTop: 10
    },
    imgDrescrip: {
        width: '100%',
        height: 130,
        marginTop: 10,
    }
})