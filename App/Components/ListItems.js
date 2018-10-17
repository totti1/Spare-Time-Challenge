import React from 'react'
import {View, Text,} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import PropTypes from 'prop-types'

// import styles from './stle'
// import Icon from './icon'

const ListItem = (
    text, 
    onPress, 
) => (
<View style={{flexDirection: 'row'}}>
    <Text>{text}</Text>
    <TouchableOpacity onPress={onPress}>
        <Icon   name = "trash"
                size={30}
                color="#E74C3C"
             // style = {styles.iconStyle}
        />
    </TouchableOpacity>
</View>
)

ListItem.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
}


export default ListItem