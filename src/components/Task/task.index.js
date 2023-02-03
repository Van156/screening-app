import { View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import styles from './task.styles';

const Task = props => {

  const statusStyle = props.color ? { ...styles.status, backgroundColor: props.color } : styles.status;

  return (
    <View style={styles.item}>
      {
        props.type && (
          <View style={styles.type}>
            <Text style={styles.typeText}>{props.type}</Text>
          </View>
        )
      }
      <View style={styles.itemContent}>
        <View style={statusStyle}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      {
        props.deadline && (
          <View style={styles.deadline}>
            <FontAwesome5 name="calendar-alt" style={styles.calendarIcon}/>
            <Text style={styles.deadlineText}>{props.deadline}</Text>
          </View>
        )
      }
    </View>
  );
}

export default Task;