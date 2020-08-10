import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40
    },

    banner: {
        width: '100%',
        resizeMode: 'contain' /* faz com que a imagem fique toda dentro do container e não seja cortada */
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 40
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    },

    buttonsContainer: {
        flexDirection:'row',
        marginTop: 40,
        justifyContent:'space-between'
    },

    button: {
        height: 130,
        width: '48%',
        backgroundColor:'#333',
        borderRadius: 8,
        padding: 24,
        justifyContent:'space-between'
    },

    buttonPrimary: {
        backgroundColor: '#9871f5'
    },

    buttonSecondary: {
        backgroundColor: '#04d361'
    },

    buttonText: {
        fontFamily:'Archivo_700Bold',
        color:'#FFF',
        fontSize: 18
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color:'#d4c2ff',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40,
        marginBottom: 10
    }
})

export default styles