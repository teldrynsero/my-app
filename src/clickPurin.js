import React from "react";
import 'reactjs-popup/dist/index.css';


function Purin() {
    const purinClick = () =>
    {
      alert('Pompompurin Plush: $15 \n A friendly golden retriever who loves desserts. He looks just like a caramel pudding.');
    }
  
    return (
        <img src={require('./purin.jpg')} height={300} width={300} onClick={() => purinClick()} alt="Pompompurin plushie" data-tip="Pompompurin Plush: $15"/>
    );
  }

  export default Purin;