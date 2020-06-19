import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

let Avitar = ({ url, size }) => {
    return (
        <View style={{width: size, height: size, borderRadius: '100%', overflow: 'hidden'}}>
            <ImageBackground source={`assets/${url}`} style={styles.image}>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    }
})

export default Avitar;