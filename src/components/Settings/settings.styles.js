import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    description: {
        fontSize: '12@s',
        color: '#495057',
        marginBottom: '2@s',
        fontWeight: 'bold',
    },
    checkboxContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '20@s'
    },
    checkboxItem: {
        padding: '10@s',
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkboxText: {
        fontSize: '12@s',
        color: '#495057',
        marginLeft: '5@s',
    },
    checkbox: {
        width: '15@s',
        height: '15@s',
        borderRadius: '10@s',
        borderWidth: '1@s',
        borderColor: '#495057',
    },
});

export default styles;