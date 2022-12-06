import * as React from 'react';
import {Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Welcome from '../../screens/Welcome';
import images from '../../assets/images';
import {Text} from '../../components';
import styles from './styles';
import Home from '../../screens/Home';
import MyClass from '../../screens/MyClass';

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  const CustomTabItem = ({icon, name, focused}) => {
    return (
      <View style={styles.customTabContainer}>
        <Image style={styles.tabImage} source={icon} />
        <Text style={styles.tabBarLabel} text={name.toUpperCase()} />
        {focused && <View style={styles.horizontalLine} />}
      </View>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTabItem name={'Home'} icon={images.home} focused={focused} />
          ),
        }}
        name="HOME"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTabItem
              name={'My Class'}
              icon={images.classes}
              focused={focused}
            />
          ),
        }}
        name="MY CLASS"
        component={MyClass}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTabItem
              name="contest"
              icon={images.contest}
              focused={focused}
            />
          ),
        }}
        name="CONTEST"
        component={Welcome}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTabItem
              name={'my team'}
              icon={images.team}
              focused={focused}
            />
          ),
        }}
        name="MY TEAM"
        component={Welcome}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTabItem
              name={'scoreboard'}
              icon={images.scoreboard}
              focused={focused}
            />
          ),
        }}
        name="SCOREBOARD"
        component={Welcome}
      />
    </Tab.Navigator>
  );
};
export default BottomNavigation;
