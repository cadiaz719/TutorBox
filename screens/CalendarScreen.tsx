import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CalendarScreenNavigationProp } from '../types';

type Props = {
    navigation: CalendarScreenNavigationProp;
  };

  const CalendarScreen: React.FC<Props> = ({ navigation }) => {
  const dates = [
    { day: '13', weekday: 'Lun' },
    { day: '14', weekday: 'Mar', selected: true },
    { day: '15', weekday: 'Mié' },
    { day: '16', weekday: 'Jue' },
    { day: '17', weekday: 'Vie' },
    { day: '18', weekday: 'Sáb' },
    { day: '19', weekday: 'Dom' },
  ];

  const upcomingSessions = [
    {
      id: '1',
      title: 'DISEÑO PARA DISPOSITIVOS MÓVILES MUL4401',
      teacher: 'Docente: Villegas Velasco Rafael',
      date: '17/11/2024 14:00 hrs mx',
    },
    {
      id: '2',
      title: 'DISEÑO PARA DISPOSITIVOS MÓVILES MUL4401',
      teacher: 'Docente: Villegas Velasco Rafael',
      date: '23/10/2024 14:00 hrs mx',
    },
  ];

  return (
    <View style={styles.container}>
      
      <View style={styles.topBar}>
        <Text style={styles.title}>Calendario</Text>
      </View>

      
      <View style={styles.datesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {dates.map((date, index) => (
            <TouchableOpacity key={index} style={[styles.dateItem, date.selected && styles.selectedDate]}>
              <Text style={[styles.dateText, date.selected && styles.selectedDateText]}>{date.day}</Text>
              <Text style={[styles.weekdayText, date.selected && styles.selectedDateText]}>{date.weekday}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      
      <View style={styles.todayContainer}>
        <Text style={styles.sectionTitle}>Hoy</Text>
        <Text style={styles.noSessionsText}>No hay asesorías</Text>
      </View>

      
      <View style={styles.upcomingContainer}>
        <Text style={styles.sectionTitle}>Próximas asesorías</Text>
        <FlatList
          data={upcomingSessions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.sessionCard}>
              <Text style={styles.sessionTitle}>{item.title}</Text>
              <Text style={styles.sessionTeacher}>{item.teacher}</Text>
              <Text style={styles.sessionDate}>{item.date}</Text>
            </View>
          )}
        />
      </View>

      
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
      paddingVertical: 10,
      alignItems: 'center',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    datesContainer: {
      flexDirection: 'row',
      marginVertical: 5,
      paddingHorizontal: 10,
      backgroundColor: '#FFFFFF',
    },
    dateItem: {
      alignItems: 'center',
      marginHorizontal: 8,
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 10,
      backgroundColor: '#EEEEEE',
    },
    selectedDate: {
      backgroundColor: '#F56A00',
    },
    dateText: {
      fontSize: 16,
      color: '#333',
    },
    selectedDateText: {
      color: '#FFFFFF',
    },
    weekdayText: {
      fontSize: 12,
      color: '#666',
    },
    todayContainer: {
      paddingHorizontal: 15,
      marginVertical: 10,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 5,
    },
    noSessionsText: {
      fontSize: 14,
      color: '#888',
    },
    upcomingContainer: {
      paddingHorizontal: 15,
      marginVertical: 10,
    },
    sessionCard: {
      backgroundColor: '#F0F0F0',
      borderRadius: 10,
      padding: 15,
      marginVertical: 5,
    },
    sessionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#F56A00',
    },
    sessionTeacher: {
      fontSize: 14,
      color: '#555',
      marginTop: 5,
    },
    sessionDate: {
      fontSize: 14,
      color: '#555',
      marginTop: 5,
    },
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#F56A00',
      paddingVertical: 10,
      position: 'absolute', 
      bottom: 0,             
      left: 0,
      right: 0,
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


export default CalendarScreen;
