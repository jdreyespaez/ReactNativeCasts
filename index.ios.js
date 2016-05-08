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

const DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

// Crear un componente de react
const Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      {this.days()}
    </View>
  },
  days: function() {
    return DAYS.map(function(day){
      return <DayItem day={day} />
    });
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
