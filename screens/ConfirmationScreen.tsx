import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ConfirmationScreenNavigationProp } from '../types';

type Props = {
  navigation: ConfirmationScreenNavigationProp;
};

const ConfirmationScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.iconContainer}>
        <Icon name="check-circle" size={60} color="#FFFFFF" />
      </View>
      
      
      <Text style={styles.successMessage}>¡Tu reserva ha sido exitosa!</Text>

      
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Información de tu asesoría</Text>
        <Image source={require('../assets/lion.png')} style={styles.avatar} />
        <Text style={styles.professorName}>Profesor Rafael Villegas</Text>
        <Text style={styles.professorTitle}>Lic. Programación</Text>
        <Text style={styles.sessionDate}>Martes 19 de febrero</Text>
        <Text style={styles.sessionTime}>De 6:30 PM a 7:30 PM</Text>
      </View>

      
      <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.primaryButtonText}>Inicio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('Cancellation')}>
        <Text style={styles.secondaryButtonText}>Cancelar reserva</Text>
        </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Reservation')}>
        <Text style={styles.editButton}>Editar</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 50,
    marginBottom: 20,
  },
  successMessage: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  infoContainer: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    alignItems: 'center',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  professorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  professorTitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  sessionDate: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  sessionTime: {
    fontSize: 14,
    color: '#333',
  },
  primaryButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginBottom: 10,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginBottom: 10,
  },
  secondaryButtonText: {
    color: '#666',
    fontSize: 16,
  },
  editButton: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default ConfirmationScreen;
