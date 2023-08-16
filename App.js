import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import db from '../config'; // Importe a configuração do banco de dados

const QuestionnaireResultsScreen = () => {
  const [buttonPresses, setButtonPresses] = useState([]);

  useEffect(() => {
    // Recupere as informações do banco de dados
    const fetchData = async () => {
      const snapshot = await db.ref('teams').once('value');
      const teamsData = snapshot.val();

      // Organize as pressões dos botões em ordem
      const buttonPressOrder = [];
      for (const teamColor in teamsData) {
        if (teamsData[teamColor].isButtonPressed) {
          buttonPressOrder.push({
            color: teamColor,
            timestamp: teamsData[teamColor].timestamp,
          });
        }
      }

      // Ordene as pressões dos botões pela hora do timestamp
      buttonPressOrder.sort((a, b) => a.timestamp - b.timestamp);

      setButtonPresses(buttonPressOrder);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ordem das Pressões de Botão</Text>
      {buttonPresses.map((press, index) => (
        <Text key={index} style={styles.pressInfo}>
          Equipe: {press.color}, Hora: {new Date(press.timestamp).toLocaleString()}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pressInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default QuestionnaireResultsScreen;
