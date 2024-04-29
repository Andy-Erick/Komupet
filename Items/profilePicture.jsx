import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

const profilePicture = () => {
    
    const [imagen, ponerImagen] = useState(null)
    const tomarImagen = async () => {
        let resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            
        });
    console.log(resultado)

    if(!resultado.canceled){
        ponerImagen(resultado.assets[0].uri)
    }
    }
    return(
        
        <View style={estilasos.turtlePostView}>
            <TouchableOpacity onPress={tomarImagen} style={estilasos.turtlePostButton}>
                <Text style={estilasos.turtlePostText}>✏️</Text>
            </TouchableOpacity>
            {imagen ? (
             <Image source={{ uri: imagen }} style={estilasos.image} />
             ) : (
            <Image source={require('../assets/dawg.png')} style={estilasos.image} />
)}

            {imagen && <Image source={{uri: imagen}} style={estilasos.image}/>}
            <Text></Text>
            <Text></Text>
        </View>
        
    )
}

const estilasos = StyleSheet.create ({
    turtlePostView: {
        flex: 1,
    alignItems: "center",
    justifyContent: "center",
    bottom: 90,

    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 75,
        alignSelf: 'center',
        top: 107,
        position: 'absolute'
    },
    turtlePostText: {
        fontSize: 20,
        top: 180,
        left: 55,
    },
    })

    export default profilePicture
