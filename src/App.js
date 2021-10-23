import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, {useState} from 'react';

import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Education } from './components/education/education';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar';
import { Projects } from './components/projects/projects';

function App() {
  const [isOpen, setOpen] = useState(false);
  
  
  return (
      <main id="home"> 
        <Navbar isOpen={isOpen} setOpen={setOpen}/>
        <Home />
        <Projects />
        <Contact />
      </main>
  );
}

export default App;
