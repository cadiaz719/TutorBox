import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ReservationScreenNavigationProp } from '../types';

type Props = {
  navigation: ReservationScreenNavigationProp;
};

const ReservationScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Reservar</Text>
      </View>

      
      <View style={styles.professorInfo}>
        <Image source={require('../assets/lion.png')} style={styles.avatar} />
        <Text style={styles.professorName}>Profesor Rafael Villegas</Text>
        <Text style={styles.professorTitle}>Lic. Programación</Text>
      </View>

      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Acerca de</Text>
        <Text style={styles.sectionContent}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </Text>
      </View>

      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Selecciona tu fecha de reserva</Text>
        
        <View style={styles.calendarPlaceholder}>
          <Text>Marzo 2024</Text>
        </View>
      </View>

      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Selecciona tu horario</Text>
        
        <View style={styles.timePickerPlaceholder}>
          <Icon name="access-time" size={20} color="#333" />
          <Text style={styles.time}>6:30 PM - 7:30 PM</Text>
        </View>
      </View>

      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Wacom</Text>
        <Text style={styles.footerSubText}>Jueves 28 de marzo de 2024{'\n'}De 6:30 PM - 7:30 PM</Text>
        <TouchableOpacity style={styles.reserveButton} onPress={() => navigation.navigate('Confirmation')}>
            <Text style={styles.reserveButtonText}>Reservar</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F56A00',
    padding: 15,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  professorInfo: {
    alignItems: 'center',
    backgroundColor: '#F56A00',
    paddingVertical: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  professorName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  professorTitle: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 14,
    color: '#555',
  },
  calendarPlaceholder: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  timePickerPlaceholder: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
    marginTop: 10,
  },
  time: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  footer: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  footerSubText: {
    fontSize: 12,
    color: '#888',
  },
  reserveButton: {
    backgroundColor: '#F56A00',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  reserveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReservationScreen;
