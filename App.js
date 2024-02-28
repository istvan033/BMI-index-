/*
* File: app.java
* Author: Pásztor István
* Copyright: 2024, Pásztor Istvan 
* Group: I2/N
* Date: 2024-02-28
* Github: https://github.com/istvan033
* Licenc: GNU GPL
*/


import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);

  const weight = (text) => {
    setNumber1(text);
  };

  const height = (text) => {
    setNumber2(text);
  };

  const handleDivideBySquare = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Érvénytelen bemenet');
    } else {
      const squaredNum2 = num2 * num2;

      if (squaredNum2 === 0) {
        setResult('A négyzet értéke nem lehet nulla');
      } else {
        const divisionResult = num1 / squaredNum2;
        setResult(`Eredmény: ${num1} / ${num2}² = ${divisionResult}`);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Index Számláló:</Text>
      <Text style={styles.label}>Súly:</Text>
      <TextInput
        style={styles.input}
        onChangeText={weight}
        value={number1}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Magasság:</Text>
      <TextInput
        style={styles.input}
        onChangeText={height}
        value={number2}
        keyboardType="numeric"
      />

      <Button
        title="Osztás a négyzettel"
        onPress={handleDivideBySquare}
      />

      {result && <Text style={styles.result}>{result}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    backgroundColor: '#e3f2fd', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    width: '25%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    padding: 8,
    backgroundColor: '#fff', 
  },
  result: {
    fontSize: 24,
    marginTop: 16,
    color: 'blue',
  },
});

export default App;
