import { View, Text, StyleSheet, Image } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import TaskMenu from '../components/task/TaskMenu';

function HomeScreen() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.button}>
        <PrimaryButton>
          <Ionicons name="md-add-circle-outline" size={24} />
        </PrimaryButton>
        {/* <Text>Add new task</Text> */}
      </View>
      {/* <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/avatar.png')}
        />
      </View> */}

      <Text style={styles.appHelloText}>Hello!</Text>
      <Text style={styles.appNameText}>Shahadot</Text>

      <TaskMenu color={Colors.bgDarkColor} taskNumber={' (22)'}>Work</TaskMenu>
      <TaskMenu color={Colors.secondary500} taskNumber={' (10)'}>Home</TaskMenu>
      <TaskMenu color={Colors.secondary500} taskNumber={' (24)'}>Gym</TaskMenu>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 70,
  },
  appHelloText: {
    fontFamily: 'roboto',
    fontSize: 28,
    marginLeft: 15,
  },
  appNameText: {
    fontFamily: 'roboto-bold',
    fontSize: 32,
    color: Colors.bgDarkColor,
    marginLeft: 15,
    marginBottom:24
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 150,
    marginHorizontal: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 24,
  },
});
