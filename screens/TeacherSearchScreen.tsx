import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TeacherSearchScreenNavigationProp } from '../types';

type Props = {
    navigation: TeacherSearchScreenNavigationProp;
  };

  const TeacherSearchScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
          
          <View style={styles.searchContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={24} color="#F56A00" />
            </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar maestro"
              placeholderTextColor="#B0B0B0"
            />
          </View>
    
          <TouchableOpacity style={styles.resultContainer} onPress={() => navigation.navigate('Reservation')}>
                <Image source={require('../assets/lion.png')} style={styles.avatar} />
                <View>
                    <Text style={styles.teacherName}>Rafael Villegas</Text>
                    <Text style={styles.teacherTitle}>Lic. Programación</Text>
                </View>
            </TouchableOpacity>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginVertical: 20,
      },
      searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: '#333',
      },
      resultContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: '#F8F8F8',  
      },
      avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
      },
      teacherName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
      },
      teacherTitle: {
        fontSize: 14,
        color: '#888',
      },
    });
    
    export default TeacherSearchScreen;
