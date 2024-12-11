import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types'; 
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; 
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'; 
import app from '../config/firebaseConfig'; 


type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  // Maneja el inicio de sesión
  const handleLogin = async () => {
    const auth = getAuth(app); 
    const db = getFirestore(app); 

    if (id !== '' && password !== '') {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, id, password);
        const user = userCredential.user; 

        
        const userDoc = doc(db, 'users', user.uid);
        const docSnapshot = await getDoc(userDoc);

        if (!docSnapshot.exists()) {
          
          await setDoc(userDoc, {
            email: user.email,
            name: 'Nombre por defecto', 
            createdAt: new Date().toISOString(),
          });
          console.log('Usuario guardado en Firestore.');
        }

        
        navigation.replace('Home');
      } catch (error: any) {
        console.error('Error al iniciar sesión:', error.message);
        alert('Error al iniciar sesión: ' + error.message);
      }
    } else {
      alert('Por favor, ingresa tu correo y contraseña.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ANÁHUAC</Text>
      <Text style={styles.subtitle}>INICIAR SESIÓN AHORA</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#B0B0B0"
        value={id}
        onChangeText={setId}
        keyboardType="email-address" 
      />
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu contraseña"
        placeholderTextColor="#B0B0B0"
        secureTextEntry 
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#F56A00',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 30,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#B0B0B0',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 15,
    color: '#000',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#F56A00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
