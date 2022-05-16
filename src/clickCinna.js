import React from "react";
import 'reactjs-popup/dist/index.css';


function Cinna() {
    const cinnaClick = () =>
    {
      alert('Cinnamoroll Plush: $15 \n A floppy-eared dog who loves napping. He is white and fluffy just like a cloud.');
    } 
  
    return (
        <img src={require('./cinna.jpg')} height={300} width={300} onClick={cinnaClick} alt="Cinnamoroll plushie" data-tip="Cinnamoroll Plush: $15"/>
    );
  }

  export default Cinna;