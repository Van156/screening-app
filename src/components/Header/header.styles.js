import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    header: {
        width: '100%',
        height: '50@s',
        justifyContent: 'center',
    },
    headerText: {
        color: '#000',
        fontSize: '18@s',
        fontWeight: 'bold',
        textAlign: 'left',
    },
});

export default styles;