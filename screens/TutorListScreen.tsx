import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type TutorListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TutorList'
>;

type Props = {
  navigation: TutorListScreenNavigationProp;
};

const tutors = [
  { id: '1', name: 'Juan Pérez', subject: 'Matemáticas', image: require('../assets/juan.jpg') },
  { id: '2', name: 'María López', subject: 'Física', image: require('../assets/maria.jpg') },
  { id: '3', name: 'Carlos Sánchez', subject: 'Química', image: require('../assets/carlos.jpg') },
  { id: '4', name: 'Ana González', subject: 'Biología', image: require('../assets/ana.jpg') },
];

const TutorListScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tutores</Text>
      <FlatList
        data={tutors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.tutorCard}>
           
            <Image source={item.image} style={styles.tutorImage} />
            <View style={styles.textContainer}>
              <Text style={styles.tutorName}>{item.name}</Text>
              <Text style={styles.tutorSubject}>{item.subject}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  tutorCard: {
    flexDirection: 'row',
    padding: 20,
    marginBottom: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    alignItems: 'center',
  },
  tutorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  tutorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tutorSubject: {
    fontSize: 16,
    color: '#666',
  },
});

export default TutorListScreen;
