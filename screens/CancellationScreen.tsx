import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CancellationScreenNavigationProp } from '../types';

type Props = {
  navigation: CancellationScreenNavigationProp;
};

const CancellationScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.iconContainer}>
        <Icon name="cancel" size={60} color="#FFFFFF" />
      </View>

      
      <Text style={styles.cancelMessage}>Tu reserva ha sido cancelada</Text>

      
      <View style={styles.infoContainer}>
        <Image source={require('../assets/lion.png')} style={styles.avatar} />
        <Text style={styles.professorName}>Profesor Rafael Villegas</Text>
        <Text style={styles.professorTitle}>Lic. Programación</Text>
        <Text style={styles.sessionDate}>Martes 19 de febrero</Text>
        <Text style={styles.sessionTime}>De 6:30 PM a 7:30 PM</Text>
      </View>

      
      <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.primaryButtonText}>Inicio</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D32F2F',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    backgroundColor: '#D32F2F',
    padding: 20,
    borderRadius: 50,
    marginBottom: 20,
  },
  cancelMessage: {
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
    backgroundColor: '#D32F2F',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CancellationScreen;
