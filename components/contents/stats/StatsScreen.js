import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ref, onValue, query, orderByChild, limitToLast } from 'firebase/database';
import { database } from '../../database/FirebaseConfig';
import BarCharts from './BarChart';


export default function StatsScreen() {
  const [entries, setEntries] = useState([]);

  // Searches last 7 entries
  useEffect(() => {
    const entriesRef = query(ref(database, 'entries/'), 
      orderByChild('entryDate'),
      limitToLast(7)
    );
    onValue(entriesRef, (snapshot) => {
      if (snapshot.val() !== null) {
        const data = snapshot.val();
        setEntries(Object.values(data));
      }
    });
  }, []);


  return (
    <View style={styles.container}>
      <BarCharts entries={entries} />  
    </View>
  );    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});