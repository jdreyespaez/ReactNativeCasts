// Importar el código que necesitamos
import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet
} from 'react-native';
import DayItem from './src/day-item';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Crear un componente de react
const Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <Text>
        Días de las semana:
      </Text>
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
