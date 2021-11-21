import React from 'react';
import Popup from 'reactjs-popup';
import './modal.css';

const ImpressumPopUp = () => (
    <Popup trigger={<span className="button">Impresszum</span>} modal>
        <div className="outer-container">
            <div className="modal-container">
                <span><span className="highlighted">Név:</span> Koppány Dávid</span><br/>
                <span><span className="highlighted">Cím:</span> 6000 Kecskemét, Batthyány utca 26</span><br/>
                <span><span className="highlighted">Email:</span> kopppanydavid@gmail.com</span><br/>
                <span><span className="highlighted">Telefon:</span> +36302554257</span><br/>
            </div>
        </div>
    </Popup>
);

export default ImpressumPopUp;