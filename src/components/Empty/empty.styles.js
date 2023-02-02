import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    empty: {
        width: '100%',
        height: '500@vs',
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        color: '#b8b8b8',
        fontSize: '14@s',
        fontWeight: 'bold',
    },
});

export default styles;