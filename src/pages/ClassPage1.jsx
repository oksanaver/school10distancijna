import React from 'react';
import BaseLayout from '../components/BaseLayout';
import Class1 from '../components/classComponents/Class1';
import '../components/classComponents/ClassMenu.css';

function ClassPage1() {
  return <BaseLayout content={<Class1 />} />;
}

export default ClassPage1;