import { View, Text, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './taskInfo.styles';
import { FontAwesome5 } from '@expo/vector-icons';
import { selectCheckbox } from '../../context/slices/setting.slice';

const TaskInfo = props => {

    const types = useSelector(state => selectCheckbox(state));

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

    const sendSMS = (text) => {
        Alert.alert("SMS Notification", text, [
            { text: "OK" },
        ]);
    };

    const sendEmail = (text) => {
        Alert.alert("Email Notification", text, [
            { text: "OK" },
        ]);
    };

    const sendPushNotification = (text) => {
        Alert.alert("Push Notification", text, [
            { text: "OK" },
        ]);
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
        <View style={styles.container}>
            <View style={styles.info}>
                <View style={styles.type}>
                    <View style={styles.status} backgroundColor={props.color} />
                    <Text style={styles.typeText}>{props.type}</Text>
                </View>
                <View style={styles.deadline}>
                    <FontAwesome5 name="calendar-alt" style={styles.calendarIcon} />
                    <Text style={styles.deadlineText}>Deadline: {props.deadline}</Text>
                </View>
                <Text style={styles.itemText}>{props.text}</Text>
                <View style={styles.description}>
                    <Text style={styles.descriptionText}>{props.description}</Text>
                </View>
            </View>
        </View>
    );
}

export default TaskInfo;