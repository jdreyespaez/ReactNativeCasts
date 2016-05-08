import React from 'React';
import {
  StyleSheet,
  Text
} from 'react-native';

const DayItem = React.createClass({
  render: function() {
    return <Text style={styles.day}>
    {this.props.day}
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
