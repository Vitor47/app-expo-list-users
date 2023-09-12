import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import styles from './styles';
import imageStart from '../../../assets/Start/start.png'
import imageFoundLine1 from '../../../assets/Start/rectangle.png'
import imageFoundLine2 from '../../../assets/Start/rectangle.png'
import { LinearGradient } from 'expo-linear-gradient'

function Start() {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate("Home")
  }

  return (
    <LinearGradient
      colors={["#111017", "#090320"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={styles.backgroundImageContainer}>
        <Image style={styles.backgroundImage} source={imageFoundLine1} />
      </View>

      <View style={styles.backgroundImageContainer2}>
        <Image style={styles.backgroundImage} source={imageFoundLine2} />
      </View>

      <View style={styles.container}>
        <Image style={styles.image} source={imageStart} />
        <Text style={styles.title}>Manage Your Employees. All in One Place</Text>
        <Text style={styles.text}>Eliminate physical cards, get virtual data in your hand.</Text>
        <LinearGradient style={styles.buttonStart}
          colors={["#179AC3", "#4A4A4A"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Pressable onPress={handlePress}>
            <Text style={styles.text}>Get Start</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </LinearGradient>
  )
}

export default Start;