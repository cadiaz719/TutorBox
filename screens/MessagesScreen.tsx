import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HomeScreenNavigationProp } from '../types';  

type Props = {
  navigation: HomeScreenNavigationProp;
};

const messages = [
  {
    id: '1',
    name: 'Leonel Anahuac',
    message: 'Hola! ¿cómo estás?',
    avatar: require('../assets/lion.png'),
  },
  {
    id: '2',
    name: 'Leonel Anahuac',
    message: 'Hola! ¿cómo estás?',
    avatar: require('../assets/lion.png'),
  },
];

const MessagesScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.topBar}>
        <Text style={styles.title}>Mensajes</Text>
      </View>

      
      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color="#B0B0B0" />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar"
          placeholderTextColor="#B0B0B0"
        />
      </View>

      
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.messageContainer}>
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.messageContent}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={28} color="#FFF" />
          <Text style={styles.navLabel}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Messages')}>
          <Icon name="chat" size={28} color="#FFF" />
          <Text style={styles.navLabel}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('TeacherSearch')}>
          <Icon name="add" size={35} color="#F56A00" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Notifications')}>
          <Icon name="notifications" size={28} color="#FFF" />
          <Text style={styles.navLabel}>Notificaciones</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Calendar')}>
            <Icon name="calendar-today" size={28} color="#FFF" />
            <Text style={styles.navLabel}>Calendario</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topBar: {
    backgroundColor: '#F56A00',
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 20,
    paddingHorizontal: 10,
    margin: 15,
    height: 40,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: '#000',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    marginHorizontal: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageContent: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  message: {
    fontSize: 14,
    color: '#777777',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F56A00',
    paddingVertical: 15,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
  },
  navLabel: {
    color: '#FFF',
    fontSize: 12,
    marginTop: 5,
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
  },
});

export default MessagesScreen;
