import React from "react";
import Button from '@mui/material/Button';
import 'reactjs-popup/dist/index.css';


function CheckOut() {
    const checkOut = () =>
    {
      alert('Thank you for shopping at the Plushie Shop!');
      window.location.reload(false);
    }
  
    return (
        <Button variant="contained" onClick={() => checkOut()}>CHECK OUT</Button>
    );
  }

  export default CheckOut;