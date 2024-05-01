import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  buttonText: {
    color: '#333',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    margin: 10,
  },
  imageContainer: {
    marginBottom: 30,
    alignItems: 'center', // Ensure images are centered
  },
  image: {
    width: 300, // Specify a fixed width or use a responsive width
    height: 300, // Specify height to maintain aspect ratio
  }
});

