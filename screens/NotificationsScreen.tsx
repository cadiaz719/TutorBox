import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NotificationsScreenNavigationProp } from '../types';  

type Props = {
  navigation: NotificationsScreenNavigationProp;
};

const notifications = [
  {
    id: '1',
    title: 'Leonel te ha invitado a una reunión',
    date: 'Miércoles 2 de octubre 2024',
    time: '15:00 h',
    timeAgo: 'Ahora',
    avatar: require('../assets/lion.png'),
  },
  {
    id: '2',
    title: 'Leonel te ha invitado a una reunión',
    date: 'Miércoles 2 de octubre 2024',
    time: '15:00 h',
    timeAgo: 'Hace 1 semana',
    avatar: require('../assets/lion.png'),
  },
  {
    id: '3',
    title: 'Leonel te ha invitado a una reunión',
    date: 'Miércoles 2 de octubre 2024',
    time: '15:00 h',
    timeAgo: 'Hace 3 meses',
    avatar: require('../assets/lion.png'),
  },
  {
    id: '4',
    title: 'Leonel te ha invitado a una reunión',
    date: 'Miércoles 2 de octubre 2024',
    time: '15:00 h',
    timeAgo: 'Hace 4 meses',
    avatar: require('../assets/lion.png'),
  },
];

const NotificationsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.topBar}>
        <Text style={styles.title}>Notificaciones</Text>
      </View>

      
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationContainer}>
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>{item.title}</Text>
              <Text style={styles.notificationDate}>{item.date}</Text>
              <Text style={styles.notificationTime}>{item.time}</Text>
              <Text style={styles.timeAgo}>{item.timeAgo}</Text>
            </View>
          </View>
        )}
        ListFooterComponent={
          <View style={styles.footer}>
            <Text style={styles.footerText}>¡Es todo por hoy!</Text>
            <Text style={styles.footerText}>No tienes más notificaciones</Text>
          </View>
        }
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
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  notificationDate: {
    fontSize: 14,
    color: '#555',
  },
  notificationTime: {
    fontSize: 14,
    color: '#555',
  },
  timeAgo: {
    fontSize: 12,
    color: '#888',
  },
  footer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#888',
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

export default NotificationsScreen;
