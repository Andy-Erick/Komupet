import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {komupetFirebase} from '../credencialesFirebase'
import Posts from './Posts'
import Description from './description'
import ProfileDescription from './profilePicture'
const defaultFoto = require("../assets/JackCoooper.jpeg")


const Profile = () => {
    return (
        <View style={estilasos.turtleBackground}>
        <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={null}>
        <View style={estilasos.turtleView}>
        <ProfileDescription/>
        <Text></Text>
        <Text></Text>
            <Text style={estilasos.turtleUserName}>User</Text>
            <Description/>
        <View>
        <View style={estilasos.turtleFollow}>
        <View style={estilasos.turtleFollowersContainer}>
            <Text style={estilasos.turtleFollowersNumer}>0</Text>
            <Text style={estilasos.turtleFollowers}>Followers</Text>
        </View>
        <View style={estilasos.turtleFollowingContainer}>
            <Text style={estilasos.turtleFollowingNumer}>0</Text>
            <Text style={estilasos.turtleFollowing}>Following</Text>
        </View>
        </View>
        </View>
        </View>
        <Posts/>
        <Text style={{opacity: 0.3, alignSelf: 'center', bottom: 20, fontSize: 16,}}>This place is empty...</Text>
        </ScrollView>
        </SafeAreaView>
        </View>
    )
}

const estilasos = StyleSheet.create({
    turtleBackground: {
        flex: 1,
        backgroundColor: 'white',
    },
    turtleView: {
        alignItems: 'center',
        alignContent: 'center'
    },
    turtleUserName: {
        fontSize: 18,
        paddingTop: 22,
        fontWeight: 'bold'
    },
    turtleFollow: {
        flexDirection: 'row',
        paddingHorizontal: 40,
    },
    turtleFollowersContainer: {
        alignItems: 'center',
    },
    turtleFollowingContainer: {
        alignItems: 'center',
        marginLeft: 120,
    },
    turtleFollowersNumer: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    turtleFollowers: {
        fontSize: 15,
        opacity: 0.5,
    },
    turtleFollowingNumer: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    turtleFollowing: {
        fontSize: 15,
        opacity: 0.5,
    },
})
export default Profile