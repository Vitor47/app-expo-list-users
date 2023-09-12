import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient'

function Users({ data }) {
    const imageUrl = data.image
    const navigation = useNavigation();

    function handlePress() {
        navigation.navigate("Detail", { userData: data });
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerCard}>
                <Image
                    source={{ uri: imageUrl }}
                    style={{ width: 50, height: 50 }}
                />
                <Text style={styles.name}>{data.name}</Text>
                <LinearGradient style={styles.buttonDetails}
                    colors={["#179AC3", "#4A4A4A"]}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <Pressable onPress={handlePress}>
                        <Text style={styles.text}>Details</Text>
                    </Pressable>
                </LinearGradient>
            </View>
        </View>
    );
}

export default Users;