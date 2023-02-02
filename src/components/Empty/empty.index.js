import { View, Text } from 'react-native';

import styles from './empty.styles';

const Empty = props => {
    return (
        <View style={styles.empty}>
            <Text style={styles.emptyText}>{props.text}</Text>
        </View>
    );
}

export default Empty;