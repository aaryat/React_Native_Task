import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal, Dimensions, Image } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from '../App';
import axios from 'axios';

type MovieProps = NativeStackScreenProps<RootStackParamList, 'MovieScreen'>;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface Movie {
  title: string;
  releaseYear: string;
}

const MovieScreen = ({ route, navigation }: MovieProps) => {
  const { email } = route.params;
  const name = email.substring(0, email.indexOf('.'));

  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [currentTime, setCurrentTime] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Fetch movie list from the API
    const fetchMovieList = async () => {
      try {
        const response = await axios.get('https://reactnative.dev/movies.json');
        setMovieList(response.data.movies);
      } catch (error) {
        console.error('Error fetching movie list:', error);
      }
    };

    // Get current date and time
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleString());
    }, 1000);

    fetchMovieList();

    return () => clearInterval(intervalId);
  }, []);

  const openModal = (movie: Movie) => {
    setSelectedMovie(movie);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const getCardColor = (movie: Movie) => {
    if (email === 'shreyash.b@sankeysolutionscom') {
      // Change card color dynamically based on the user's email
      return '#ADD8E6';
    } else {
      return '#F4C2C2';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>{`Welcome ${name}`}</Text>
      <Text style={styles.currentTime}>{currentTime}</Text>
      <ScrollView contentContainerStyle={[styles.movieList, { paddingBottom: 20 }]}>
        {movieList.map((movie, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.movieCard, { backgroundColor: getCardColor(movie) }]}
            onPress={() => openModal(movie)}
          >
            <Image source={require('./movie.png')} style={styles.movieIcon} />
            <View style={styles.movieContent}>
              <Text style={styles.movieTitle}>{movie.title}</Text>
              <Text style={styles.movieYear}>{movie.releaseYear}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView >
      <View style={[styles.backButton, { marginBottom: 20 }]}>
        <Button
          title='Back'
          onPress={() => navigation.navigate('AppPro')}
        />
      </View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>Movie Details</Text>
            <Text style={styles.modalText}>Movie name: {selectedMovie?.title}</Text>
            <Text style={styles.modalText}>Release year: {selectedMovie?.releaseYear}</Text>
            <Button title="Close" onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor:'#E5E4E2',

  },
  welcomeText: {
    marginTop: 25,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black',
  },
  currentTime: {
    fontSize: 16,
    marginBottom: 20,
    color:'black',
  },
  movieList: {
    width: '100%',
    alignItems: 'center',
  },
  movieCard: {
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth - 40,
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    color:'black',
    borderColor:'black',
    borderWidth:1,
  },
  movieIcon: {
    width: 65,
    height: 65,
    marginRight: 20,
  },
  movieContent: {
    flex: 1,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black',
  },
  movieYear:{
    fontSize: 15,
    //fontWeight: 'bold',
    color:'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#f6f6f6',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    
  },
  modalHeading: {
    padding: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color:'black',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color:'black',
  },
  backButton: {
    padding: 30,
    marginTop: 20, 
    fontWeight:'bold'
  },
});

export default MovieScreen;

