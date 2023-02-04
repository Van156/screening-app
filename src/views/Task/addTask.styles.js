import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    wrapper: {
        paddingVertical: '5@s',
        height: '100%',
        paddingHorizontal: '20@s',
    },
    container: {
        padding: '10@s',
        backgroundColor: '#fff',
        borderRadius: '10@s',
        marginBottom: '10@s',
        elevation: '40@s',
        shadowColor: '#000',
        shadowOffset: { width: '0@s', height: '1@s'},
        shadowOpacity: '0.05@s',
        shadowRadius: '3@s',
    },
    TextInput: {
        fontSize: '14@s',
        color: '#000',
        marginBottom: '5@s',
        fontWeight: 'bold',
    },
    TextInputMultiline: {
        fontSize: '12@s',
        color: '#000',
        marginBottom: '20@s',
    },
    selector: {
        width: '100%',
        marginBottom: '5@s',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    label: {
        fontSize: '10@s',
        color: '#b8b8b8',
        marginBottom: '5@s',
        fontWeight: 'bold',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: '70@s',
        backgroundColor: '#55BCF6',
        padding: '10@s',
        borderRadius: '10@s',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: '40@s',
        shadowColor: '#000',
        shadowOffset: { width: '0@s', height: '1@s'},
        shadowOpacity: '0.05@s',
        shadowRadius: '3@s',
    },
    buttonText: {
        color: '#fff',
        fontSize: '14@s',
        fontWeight: 'bold',
    },
    picker: {
        flexDirection: 'row',
        width: '100%',
        height: '30@s',
        backgroundColor: '#fefefe',
        borderRadius: '5@s',
        borderWidth: '1@s',
        borderColor: '#b8b8b8',
        marginBottom: '5@s',
        paddingHorizontal: '10@s',
        fontSize: '12@s',
        color: '#000',
        marginBottom: '5@s',
    },
    icon: {
        color: '#fff',
        fontSize: '25@s',
        fontWeight: 'bold',
    },
    iconContainer: {
        width: '30@s',
        height: '30@s',
        backgroundColor: '#55BCF6',
        borderRadius: '5@s',
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionsContainer: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
});

export default styles;