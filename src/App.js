import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

import Contact from './components/Contact';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Stack from './components/Stack';


function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Stack />
      <Projects />
      <Contact />
      <MessengerCustomerChat
    pageId="1426621030897994"
    appId="808434113401414"
   
  />
  
    </div>
  );
}

export default App;
