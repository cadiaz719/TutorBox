import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HomeScreenNavigationProp } from '../types';  

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="menu" size={28} color="#FFF" />
        </TouchableOpacity>
        <Image source={require('../assets/lion.png')} style={styles.profileImage} />
        <Text style={styles.profileName}>Leonel Anahuac</Text>
        <Text style={styles.profileRole}>Diseño multimedia</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search" size={28} color="#FFF" />
        </TouchableOpacity>
      </View>

      
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.sessionCard}>
          <Text style={styles.sessionTitle}>DISEÑO PARA DISPOSITIVOS MÓVILES MUL4401</Text>
          <Text style={styles.sessionInfo}>Docente: Villegas Velasco Rafael</Text>
          <Text style={styles.sessionInfo}>23/10/2024 14:00 hrs mx</Text>
          <TouchableOpacity style={styles.joinButton}>
            <Text style={styles.joinButtonText}>Unirse a zoom</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="home" size={28} color="#FFF" />
          <Text style={styles.navLabel}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Messages')}  
        >
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
    paddingVertical: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 20,
  },
  menuButton: {
    position: 'absolute',
    left: 20,
    top: 30,
  },
  searchButton: {
    position: 'absolute',
    right: 20,
    top: 30,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 10,
  },
  profileRole: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 20,
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  sessionCard: {
    width: '90%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  sessionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#F56A00',
  },
  sessionInfo: {
    fontSize: 14,
    marginBottom: 5,
    color: '#555555',
  },
  joinButton: {
    backgroundColor: '#F56A00',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  joinButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
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

export default HomeScreen;
