import React from 'react';
import BaseLayout from '../components/BaseLayout';
import NavigationBar from '../components/NavigationBar';

function HomePage() {
  return <BaseLayout content={<NavigationBar />} />;
}

export default HomePage;