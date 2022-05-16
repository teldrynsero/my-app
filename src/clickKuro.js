import React from "react";
import 'reactjs-popup/dist/index.css';

function Kuro() {
    const kuroClick = () =>
    {
      alert('Kuromi Plush: $18 \n A very mischevious rabbit who likes being mean. Her birthday is on Halloween.')
    }
  
    return (
        <img src={require('./kuro.jpg')} height={300} width={300} onClick={() => kuroClick()} alt="Kuromi plushie" data-tip="Kuromi Plush: $18"/>
    );
  }

  export default Kuro;