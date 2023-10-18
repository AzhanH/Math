import React from 'react';
import HomeView from '../../views/HomeView';
import useHomeModelView from '../../viewmodels/useHomeModelView';
const Home = () => {
  const {functions} = useHomeModelView();
  const {onPressRegister} = functions;
  return <HomeView onPressRegister={onPressRegister} />;
};

export default Home;
