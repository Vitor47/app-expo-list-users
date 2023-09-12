import { View, Text, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useState, useEffect } from "react";
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons';

import api from '../../services/api';
import Users from '../../components/Users';

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadUsers() {
      const response = await api.get('users');
      setUsers(response.data);
      setLoading(false);
    }

    loadUsers();

  }, [])

  const [filter, setFilter] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleFilterChange = text => {
    setFilter(text);
    const filtered = users.filter(user => {
      const userName = user.name.toLowerCase();
      return userName.includes(text.toLowerCase());
    });
    setFilteredUsers(filtered);
  };

  const handleSearch = () => {
    const filtered = users.filter(user => {
      const userName = user.name.toLowerCase();
      return userName.includes(filter.toLowerCase());
    });
    setFilteredUsers(filtered);
  };

  if (loading) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color="#121212" size={45} />
      </View>
    )
  } else {
    return (
      <LinearGradient
        colors={["#111017", "#090320"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input}
              placeholder="Search here"
              value={filter}
              onChangeText={handleFilterChange}
            />
            <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
              <AntDesign name="search1" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Your Employes</Text>

          <FlatList
            data={filteredUsers.length > 0 ? filteredUsers : users}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <Users data={item} />}
          />

        </View>
      </LinearGradient>
    )
  }
}

export default Home;