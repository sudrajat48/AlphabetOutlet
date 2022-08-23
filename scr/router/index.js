import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Splash from "../pages/Splash"
import SignIn from "../pages/SignIn"
import SignUp from '../pages/SignUp';
import SignUpAddress from '../pages/SignUpAddress';
import SuccessSignUp from '../pages/SuccessSignUp';
import Home from '../pages/Home';
import Notification from '../pages/Notification';
import Profile from '../pages/Profile';
import { BottomNavigation } from '../components';
import ProductDetail from '../pages/ProductDetail';
import OrderSummary from '../pages/OrderSummary';
import SuccessOrder from '../pages/SuccessOrder';
import OrderDetail from '../pages/OrderDetail';
import Chat from '../pages/Chat';
import Keranjang from '../pages/Keranjang';
import ChatAddress from '../pages/ChatAddress';
import Chatting from '../pages/Chatting';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} />} screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

const Stacks = () => {

  return (
    <>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Spalsh" component={Splash} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignUpAddress" component={SignUpAddress} />
        <Stack.Screen name="SuccessSignUp" component={SuccessSignUp} />
        <Stack.Screen name="MainApp" component={MainApp} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="OrderSummary" component={OrderSummary} />
        <Stack.Screen name="SuccessOrder" component={SuccessOrder} />
        <Stack.Screen name="OrderDetail" component={OrderDetail} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Keranjang" component={Keranjang} />
        <Stack.Screen name="ChatAddress" component={ChatAddress} />
        <Stack.Screen name="Chatting" component={Chatting} />
    </Stack.Navigator>
    </>
  );
};

export default Stacks;

