import React, {useEffect} from 'react';
import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import ProfileCreation from './src/screens/ProfileCreation';
import SubscriptionPlans from './src/screens/SubscriptionPlans';
import Payment from './src/screens/Payment';
import InviteStudent from './src/screens/InviteStudent';
import ForgotPassword from './src/screens/ForgotPassword';
import AuthStack from './src/navigation/AuthStack';
import AnimatedSplash from 'react-native-animated-splash';
const App = () => {
  useEffect(() => {
    AnimatedSplash.hide();
  }, []);

  return <AuthStack />;
};
export default App;
