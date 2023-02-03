import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100@s',
        width: '100@s',
        borderRadius: '25@s',
        backgroundColor: '#55BCF6',
        marginBottom: '15@s',
    },
    text: {
        color: '#000',
        fontSize: '20@s',
        fontWeight: 'bold',
    },
    icon: {
        color: '#fff',
        fontSize: '50@s',
    }
});

export default styles;