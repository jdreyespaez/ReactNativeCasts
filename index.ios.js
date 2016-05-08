// Importar el código que necesitamos
import React from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

// Crear un componente de react

var Weekdays = React.createClass({
  render: function() {
    return <View>
      <Text>
        Días de las semana:
      </Text>
    </View>
  }
});

// Mostrar el componente en la pantalla

AppRegistry.registerComponent('weekdays', () => Weekdays);
