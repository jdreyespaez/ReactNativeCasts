import React from 'React';
import {
  Text,
  StyleSheet
} from 'react-native';

const DayItem = React.createClass({
  render: function() {
    return <Text style={styles.day}>
      Un día de la semana
    </Text>
  }
});

var styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#0000FF'
  }
});

export default DayItem;
