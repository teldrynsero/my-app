import React from "react";
import 'reactjs-popup/dist/index.css';


function Twi() {
    const twinClick = () =>
    {
      alert('Little Twin Stars Plushies: $30 \n Lala and Kiki are mythical siblings who were born on a star. They are very close.')
    }
  
    return (
        <img src={require('./twin.jpg')} height={300} width={300} onClick={() => twinClick()} alt="Twin Stars plushie" data-tip="Twin Stars Plushies: $30"/>
    );
  }

  export default Twi;