import {View, Text, StyleSheet} from 'react-native';


const Explore = () => {
    return (
        <View>
            <Text style={estilasos.catText}>Que show, aqui vas a ver muchisimas cosas</Text>
        </View>
    )
}

const estilasos = StyleSheet.create({
    catText: {
        fontSize: 25,
        textAlign: 'center',
        alignContent: 'center',
        paddingTop: 50,
    },
})
export default Explore