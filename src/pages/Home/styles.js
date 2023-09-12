import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: "8%",
    alignItems: "center",
    paddingTop: "8%",
    paddingBottom: 0,
  },
  title: {
    fontSize: 22,
    lineHeight: 42,
    textAlign: "left",
    color: "#fff",
    width: 280,
    marginTop: "8%",
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 320,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    marginTop: 12,
  },
  input: {
    flex: 1,
    padding: 8,
  },
  searchButton: {
    borderRadius: 4,
    marginRight: 8,
    padding: 8,
  },
});

export default styles;