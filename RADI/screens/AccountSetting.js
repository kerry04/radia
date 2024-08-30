
import React from 'react';
import { View, Text, Button } from 'react-native';

const AccountSettings = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Account Settings</Text>
      
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default AccountSettings;
