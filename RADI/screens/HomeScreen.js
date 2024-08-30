import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Welcome to Radi Cabs</Text>

  
      <Button
        title="Catch a Ride"
        onPress={() => navigation.navigate('MapScreen')}
      />
      <Button
        title="Parcel Delivery"
        onPress={() => navigation.navigate('ParcelDelivery')}
      />
       <Button
        title="Receipts"
        onPress={() => navigation.navigate('ParcelDelivery')}
      />
       <Button
      title="Ride History"
      onPress={() => navigation.navigate('ParcelDelivery')}
    />
     <Button
        title="Payment"
        onPress={() => navigation.navigate('ParcelDelivery')}
      />
       <Button
        title="Support"
        onPress={() => navigation.navigate('ParcelDelivery')}
      />

    </View>
  );
};

export default HomeScreen;
