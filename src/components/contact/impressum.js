import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const Impressum = () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Impressum</div>
  </Popup>
);