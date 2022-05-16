import React from "react";
import 'reactjs-popup/dist/index.css';

function Tux() {
    const samClick = () =>
    {
      alert('Tuxedo Sam Plush: $15 \n A clumsy penguin who loves collecting bowties. He loves to eat.')
    }
  
    return (
        <img src={require('./sam.png')} height={300} width={300} onClick={() => samClick()} alt="Tuxedo Sam plushie" data-tip="Tuxedo Sam Plush: $15"/>
    );
  }

  export default Tux;