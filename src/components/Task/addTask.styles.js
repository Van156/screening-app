import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    wrapper: {
        paddingHorizontal: 20,
    },
    TextInput: {
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        marginVertical: 5,
        fontSize: 18,
    },
    TextInputMultiline: {
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        marginVertical: 5,
        height: 80,
        fontSize: 18,
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    btn: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "blue",
        width: 50,
        alignSelf: "center",
    },
});

export default styles;