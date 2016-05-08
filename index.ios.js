// Importar el código que necesitamos
import React from 'react';
import Moment from 'moment';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet
} from 'react-native';
import DayItem from './src/day-item';


// Crear un componente de react
const Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      {this.days()}
    </View>
  },
  days: function() {
    var daysItems = [];

    for(var i = 0; i < 7; i++){
      var day = Moment().add(i, 'days').format('dddd');
      daysItems.push(
        <DayItem day={day} daysUntil={i} />
      )
    }

    return daysItems
  }
});

// Estilar el componente de React
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// Mostrar el componente en la pantalla

AppRegistry.registerComponent('weekdays', () => Weekdays);
