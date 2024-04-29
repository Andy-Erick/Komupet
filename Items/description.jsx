import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';



const About = () => {
    const [description, aDescription] = useState('Tap to edit your description')
    const [newDescription, aNewDescription] = useState('')
    const [editDescription, aEditDescription] = useState(false)

   const changeIt = (text) => {
        aNewDescription(text)
    }
    const editIt = () => {
        aEditDescription(true),
        aNewDescription(description)
    }
    const saveIt = () => {
        if(newDescription.trim() !== '') {
            aDescription(newDescription);
            aEditDescription(false)
        }
    }

return (
    <View>
    {!editDescription && (
        <View>
        <Text style={estilasos.fishDescriptionText}>{description}</Text>
        <TouchableOpacity onPress={editIt}>
           
            <Text></Text>
        </TouchableOpacity>
        </View>
    )}
    {editDescription && (
        <View>
            <TextInput
            style={estilasos.fishDescriptionText}
            placeholder='new description'
            onChangeText={changeIt}
            value={newDescription}/>
            <TouchableOpacity onPress={saveIt}>
                <Text style={estilasos.fishSaveDescription}>Save</Text>
            </TouchableOpacity>
        </View>
    )}
</View>
)}


const estilasos = StyleSheet.create ({
    fishDescriptionText: {
        fontSize: 13,
        textAlign: 'center',
        width: 330,
        paddingTop: 5,
        opacity: 0.5,},

    fishEditText: {
        alignSelf: 'center',
        position: 'absolute',
        right: 79,

        bottom: 28,
    },
    fishSaveDescription: {
        alignSelf: 'center',
        backgroundColor: 'gold',
        borderRadius: 9,
        borderWidth: 1,
        borderColor: 'black',
    }    
})
export default About 