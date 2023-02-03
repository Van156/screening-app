import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    wrapper: {
        paddingVertical: '5@s',
        height: '100%',
        paddingHorizontal: '20@s',
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '50@s',
        width: '50@s',
        borderRadius: '25@s',
        backgroundColor: '#55BCF6',
        elevation: '40@s',
        shadowColor: '#000',
        shadowOffset: { width: '0@s', height: '2@s'},
        shadowOpacity: '0.2@s',
        shadowRadius: '3@s',
    },
    addButton: {
        color: '#fff',
        fontSize: '30@s',
    },
    footer: {
        position: 'absolute',
        bottom: '2%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '10@s',
        justifyContent: 'flex-end',
        backgroundColor: '#000',
    },
});

export default styles;