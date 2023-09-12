import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

function Card({ data }) {
    const navigation = useNavigation();

    function back() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image
                    source={{ uri: data.image }}
                    style={{ width: 80, height: 80 }}
                />
            </View>

            <View style={styles.containerCard}>
                <View style={styles.containerInfo}>
                    <Text style={styles.label}>Name</Text>
                    <Text style={styles.value}>{data.name}</Text>
                </View>

                <View style={styles.containerInfo}>
                    <Text style={styles.label}>Email</Text>
                    <Text style={styles.value}>{data.email}</Text>
                </View>

                <View style={styles.containerInfo}>
                    <Text style={styles.label}>Contact Number</Text>
                    <Text style={styles.value}></Text>
                </View>

                <View style={styles.containerInfo}>
                    <Text style={styles.label}>DOB</Text>
                    <Text style={styles.value}></Text>
                </View>

                <View style={styles.containerInfo}>
                    <Text style={styles.label}>Location</Text>
                    <Text style={styles.value}>{data.city}</Text>
                </View>
            </View>

            <View style={styles.containerButton}>
                <LinearGradient style={styles.buttonGoBack}
                    colors={["#179AC3", "#4A4A4A"]}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <Pressable onPress={back}>
                        <Text style={styles.text}>Return</Text>
                    </Pressable>
                </LinearGradient>
            </View>
        </View>
    );
}

export default Card;