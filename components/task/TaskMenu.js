import { View, Text, StyleSheet, Pressable } from 'react-native';
import Colors from '../../constants/Colors';
function TaskMenu({ children, onPress, color, taskNumber }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.taskMenuContainer} onPress={onPress}>
        <Text style={styles.taskText}>
          {children}
          <Text>{taskNumber}</Text>
        </Text>
      </Pressable>
    </View>
  );
}

export default TaskMenu;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginVertical: 10,
  },
  taskMenuContainer: {
    height: 150,
    flexDirection: 'column',
    backgroundColor: Colors.bgDarkColor,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation:2
  },
  taskText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'roboto-bold',
  },
});
