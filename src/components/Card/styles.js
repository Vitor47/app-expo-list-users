import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 12,
        width: 320,
        height: 480,
        padding: 20,
        borderRadius: 8,
        backgroundColor: "rgba(255, 255, 255, 0.10);",
    },
    containerImage: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    containerCard: {
        display: "flex",
        alignItems: "left",
        justifyContent: "center",
    },
    containerInfo: {
        margin: 12,
    },
    label: {
        color: "#FFF",
        textAlign: "left",
        fontSize: 12,
    },
    value: {
        color: "#FFF",
        textAlign: "left",
        fontSize: 12,
    },
    buttonGoBack: {
        top: 12,
        paddingTop: 16,
        width: 230,
        height: 57,
        borderRadius: 20,
    },
    text: {
        fontSize: 12,
        lineHeight: 22,
        textAlign: "center",
        color: "#fff",
        width: 230
      },
      containerButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }
});

export default styles;