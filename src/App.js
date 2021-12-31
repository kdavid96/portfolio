import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, {useState} from 'react';

import { Contact } from './components/contact/contact';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar';
import { Projects } from './components/projects/projects';
import { Blog } from './components/blog/blog';

function App() {
  const [isOpen, setOpen] = useState(false);
  const [isDark, setDark] = useState(true);
  const Theme = {
    cardDark: '#03040B',
    cardLight: 'rgb(169, 215, 255)',
    textDark: 'white',
    textLight: 'black'
  }
  return (
    <main id="outerHome" style={{backgroundColor: isDark ? 'rgb(8,12,31)' : 'rgb(230, 246, 255)'}}> 
      <Navbar isOpen={isOpen} setOpen={setOpen} isDark={isDark} setDark={setDark} theme={Theme} />
      <Home isDark={isDark} theme={Theme} />
      <Projects isDark={isDark} theme={Theme} />
      <Contact isDark={isDark} theme={Theme} />
    </main>
  );
}

export default App;
