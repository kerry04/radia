import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const data = [
  { id: "7", title: " Home", image: require('../assets/home.png'), screen: "HomeScreen" },
  { id: "1", title: " Catch a ride", image: require('../assets/taxi.png'), screen: "MapScreen" },
  { id: "2", title: " Parcel delivery", image: require('../assets/parcel.png'), screen: "MapScreen" },
  { id: "3", title: " Receipts", image: require('../assets/receipt.png'), screen: "" },
  { id: "4", title: " Ride history", image: require('../assets/history.png'), screen: "TravelHistory" },
  { id: "6", title: " Payment", image: require('../assets/dola.png'), screen: "PaymentOptReceiptsion" },
  { id: "5", title: " Support", image: require('../assets/phone.png'), screen: "ContactUs" },
];

const CustomDrawerContent = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const sidebarWidth = isCollapsed ? 60 : 250;
  const animation = new Animated.Value(sidebarWidth);

  const toggleSidebar = () => {
    Animated.timing(animation, {
      toValue: isCollapsed ? 250 : 60,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Animated.View style={[{ width: animation }, { backgroundColor: 'yellow', height: '100%' }]}>
      <DrawerContentScrollView {...props} style={{ padding: 16}}> 

      <TouchableOpacity 
          style={{ alignItems: 'center', marginBottom: 16 }}
          onPress={() => props.navigation.navigate('AccountSettings')}

        >
          <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#2d3748' }}>A</Text>
          </View>
          {!isCollapsed && <Text style={{ color: '#fff', marginTop: 8 }}>Account</Text>}
        </TouchableOpacity>
    
        {data.map((item) => (
          <DrawerItem
            key={item.id}
            label={() => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
               
                <Image
                  source={item.image}
                  style={{ width: 40, height: 40 }}
                  resizeMode="contain"
                />
               
                {!isCollapsed && (
                  <Text>
                    {item.title}
                  </Text>
                )}
              </View>
            )}
            onPress={() => props.navigation.navigate(item.screen)}
          />
        ))}
      </DrawerContentScrollView>
    </Animated.View>
  );
};

export default CustomDrawerContent;
