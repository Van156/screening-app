import { View, Text } from 'react-native';

import styles from './header.styles';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.text}</Text>
        </View>
    );
}

export default Header;