import React from 'react';
import BaseLayout from '../components/BaseLayout';
import ClassMenu from '../components/classComponents/ClassMenu';
import '../components/classComponents/ClassMenu.css';

function ClassPage() {
  return <BaseLayout content={<ClassMenu />} />;
}

export default ClassPage;