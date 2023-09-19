import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [barcodeData, setBarcodeData] = useState(null);


  //asking permission when loaded
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


  //function call when barcoDe scans
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setBarcodeData({ type, data });
  };

  if (hasPermission === null) {
    return <Text>Requesting for Camera Permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No Access to Camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <View>
          <Text style={styles.text}>Bar CODE with type {barcodeData.type}</Text>
          <Text style={styles.text}>and data {barcodeData.data}</Text>
          <Button title="Tap to Scan Again" onPress={() => setScanned(false)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text:{
    textAlign: 'center',
  }
});
