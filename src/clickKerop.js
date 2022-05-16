import React from "react";
import 'reactjs-popup/dist/index.css';

function Kerop() {
    const keropClick = () =>
    {
      alert('Keroppi Plush: $16 \n A talented frog who loves many sports. He is very popular and has many friends.')
    }
  
    return (
        <img src={require('./kerop.jpg')} height={300} width={300} onClick={() => keropClick()} alt="Keroppi plushie" data-tip="Keroppi Plush: $16"/>
    );
  }

  export default Kerop;