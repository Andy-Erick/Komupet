import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const turtlePostImage = () => {
    const [imagen, ponerImagen] = useState([]);

    const tomarImagen = async () => {
        let resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
        });

        if (!resultado.canceled) {
            ponerImagen([...imagen, resultado.assets[0].uri]);
        }
    };

    return (
    <View style={estilasos.turtlePostView}>
        <TouchableOpacity onPress={tomarImagen}>
            <Text style={estilasos.turtlePostText}>Add Post</Text>
        </TouchableOpacity>
        <ScrollView>
            <View style={estilasos.turtlePostStuff}>
                {imagen.map((imagenUri, index) => (
                    <Image key={index} source={{ uri: imagenUri }} style={[estilasos.image, index !== 0 && estilasos.turtleMargin]} />
                ))}
            </View>
        </ScrollView>
    </View>
    );
};

const estilasos = StyleSheet.create({
    turtlePostView: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        bottom: 40,
    },
    turtlePostStuff: {
        borderRadius: 9,
        borderColor: 'black',
        paddingVertical: 40,
    },
    image: {
        alignSelf: 'center',
        width: 350,
        height: 280,
        borderRadius: 10,
    },
    turtleMargin: {
        marginVertical: 20,
    },
    turtlePostText: {
        fontSize: 15,
        color: 'white',
        backgroundColor: '#8AEF69',
        borderRadius: 15,
        padding: 10,
    },
});

export default turtlePostImage;
