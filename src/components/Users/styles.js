import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 12,
        width: 320,
        height: 180,
        padding: 20,
        borderRadius: 8,
        backgroundColor: "#fff",
    },
    containerCard: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    name: {
        fontSize: 28,
        lineHeight: 44,
        textAlign: "left",
    },
    buttonDetails: {
        width: 116,
        height: 42,
        padding: 15,
        borderRadius: 8,
    },
    text: {
        fontSize: 12,
        lineHeight: 12,
        textAlign: "center",
        color: "#fff",
    },
});

export default styles;
