import { View, Text, Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import styles from './task.styles';
import { useSelector } from 'react-redux';

const Task = props => {

  const statusStyle = props.color ? { ...styles.status, backgroundColor: props.color } : styles.status;
  const types = useSelector(state => state.taskReducer);

  const sendNotification = () => {
    const sms = types[0];
    const email = types[1];
    const push = types[2];

    if (sms) {
      sendSMS(props.text);
    }
    if (email) {
      sendEmail(props.text);
    }
    if (push) {
      sendPushNotification(props.text);
    }
  }

  const sendSMS = (phoneNumber=1234556778, message) => {
    const link = `sms:${phoneNumber}&body=${message}`;
    Linking.canOpenURL(link)
      .then(supported => {
        if (!supported) {
          console.error('Can\'t handle link: ' + link);
        } else {
          return Linking.openURL(link);
        }
      })
      .catch(err => console.error('An error occurred: ', err));
  };

  const sendEmail = (email='tech-solutions@sample-mail.com', text) => {
    const link = `mailto:${email}?subject=${"Reminder: ToDo's List App"}&body=${text}`;
    Linking.canOpenURL(link)
      .then(supported => {
        if (!supported) {
          console.error('Can\'t handle link: ' + link);
        } else {
          return Linking.openURL(link);
        }
      })
      .catch(err => console.error('An error occurred: ', err));
  };

  const sendPushNotification = (text) => {
    console.log('Send push notification');
  }

  const handleDeadLineNotification = () => {
    const now = new Date();
    const deadline = new Date(props.deadline);
    const diff = deadline - now;
    const diffInDays = diff / (1000 * 3600 * 24);

    if (diffInDays < 1) {
      sendNotification();
    }
  }

  handleDeadLineNotification();

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
            <FontAwesome5 name="calendar-alt" style={styles.calendarIcon} />
            <Text style={styles.deadlineText}>{props.deadline}</Text>
          </View>
        )
      }
    </View>
  );
}

export default Task;