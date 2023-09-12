import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "8%",
    color: "#fff",
  },
  title: {
    fontSize: 22,
    lineHeight: 42,
    textAlign: "center",
    color: "#fff",
    width: 230,
    marginTop: "8%",
  },
  text: {
    fontSize: 12,
    lineHeight: 22,
    textAlign: "center",
    color: "#fff",
    width: 230
  },
  backgroundImageContainer: {
    top: 120,
    position: 'absolute',
    width: '100%',
    height: '40%',
  },
  backgroundImageContainer2: {
    position: 'absolute',
    width: '100%',
    height: '40%',
  },
  backgroundImage: {
    width: '100%',
    height: '100%'
  },
  image: {
    width: 227,
    height: 220,
    resizeMode: "contain",
    marginBottom: 80,
  },
  buttonStart: {
    top: 10,
    paddingTop: 16,
    width: 230,
    height: 57,
    borderRadius: 20,
  }
});


export default styles;