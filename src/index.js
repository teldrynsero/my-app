import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from "react";
import './index.css';
import 'reactjs-popup/dist/index.css';
import ReactTooltip from 'react-tooltip';
import Button from '@mui/material/Button';

// My React Components:
// 1. Alerts triggered by clicking images
// 2. Clickable buttons
// 3. Counters triggered by said buttons
// 4. Mouse-over tooltips on images
// 5. Check out button brings up alert then refreshes page

class Shop extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      // Counts for how many plushies are in the cart
      count: 0,
      counta: 0,
      countb: 0,
      countc: 0,
      countd: 0,
      counte: 0,
      // The total price of the plushies
      total: 0,
      // The price for each type of plushies in the cart
      cin: 0,
      pom: 0,
      ker: 0,
      kur: 0,
      tux: 0,
      twi: 0
    };
  }

  //Unused, old button component
  /*
  button()
  {
    const shoot = () =>
    {
      alert("Added to cart");
    }
  
    return (
      <button onClick={shoot}>Add to Cart</button>
    );
  } */

  render()
  {
    // When plushie images clicked, display these alerts
    const cinnaClick = () =>
    {
      alert('Cinnamoroll Plush: $15 \n A floppy-eared dog who loves napping. He is white and fluffy just like a cloud.');
    } 
    const purinClick = () =>
    {
      alert('Pompompurin Plush: $15 \n A friendly golden retriever who loves desserts. He looks just like a caramel pudding.');
    }
    const keropClick = () =>
    {
      alert('Keroppi Plush: $16 \n A talented frog who loves many sports. He is very popular and has many friends.')
    }
    const kuroClick = () =>
    {
      alert('Kuromi Plush: $18 \n A very mischevious rabbit who likes being mean. Her birthday is on Halloween.')
    }
    const samClick = () =>
    {
      alert('Tuxedo Sam Plush: $15 \n A clumsy penguin who loves collecting bowties. He loves to eat.')
    }
    const twinClick = () =>
    {
      alert('Little Twin Stars Plushies: $30 \n Lala and Kiki are mythical siblings who were born on a star. They are very close.')
    }

    // When check out button is clicked, show an alert then reload page
    const checkOut = () =>
    {
      alert('Thank you for shopping at the Plushie Shop!');
      window.location.reload(false);
    }

    // Build store front display
    return (
      <div className="App">
        <center>
          <img src={require('./cinna.jpg')} alt="cinnamoroll" height={300} width={300} onClick={() => cinnaClick()} data-tip="Cinnamoroll Plush: $15"/><ReactTooltip />
          <img src={require('./purin.jpg')} alt="pompompurin" height={300} width={300} onClick={() => purinClick()} data-tip="Pompompurin Plush: $15"/><ReactTooltip />
          <img src={require('./kerop.jpg')} alt="keroppi" height={300} width={300} onClick={() => keropClick()} data-tip="Keroppi Plush: $16"/><ReactTooltip /> <br/>

        <Button variant="contained" onClick={() => this.setState({ count: this.state.count + 1, total: this.state.total + 15, cin: this.state.cin + 15})}>
          Add to Cart
        </Button> <span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>

        <Button variant="contained" onClick={() => this.setState({ counta: this.state.counta + 1, total: this.state.total + 15, pom: this.state.pom + 15})}>
          Add to Cart
        </Button> <span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>

        <Button variant="contained" onClick={() => this.setState({ countb: this.state.countb + 1, total: this.state.total + 16, ker: this.state.ker + 16})}>
          Add to Cart
        </Button>

        <br/><br/><br/>

          <img src={require('./kuro.jpg')} alt="kuromi" height={300} width={300} onClick={() => kuroClick()} data-tip="Kuromi Plush: $18"/><ReactTooltip />
          <img src={require('./sam.png')} alt="tuxedo sam" height={300} width={300} onClick={() => samClick()} data-tip="Tuxedo Sam Plush: $15"/><ReactTooltip />
          <img src={require('./twin.jpg')} alt="twin stars" height={300} width={300} onClick={() => twinClick()} data-tip="Twin Stars Plushies: $30"/><ReactTooltip /><br/>

          <Button variant="contained" onClick={() => this.setState({ countc: this.state.countc + 1, total: this.state.total + 18, kur: this.state.kur + 18})}>
            Add to Cart
          </Button> <span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>

          <Button variant="contained" onClick={() => this.setState({ countd: this.state.countd + 1, total: this.state.total + 15, tux: this.state.tux + 15})}>
            Add to Cart
          </Button> <span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>

          <Button variant="contained" onClick={() => this.setState({ counte: this.state.counte + 1, total: this.state.total + 30, twi: this.state.twi + 30})}>
            Add to Cart
          </Button>

          <br/>
          </center>

          <p id="Cart"><strong>Your Cart:</strong></p>
          <p id="plush">Cinnamoroll Plush x{this.state.count} for ${this.state.cin}</p>
          <p id="plush2">Pompompurin Plush x{this.state.counta} for ${this.state.pom}</p>
          <p id="plush">Keroppi Plush x{this.state.countb} for ${this.state.ker}</p>
          <p id="plush2">Kuromi Plush x{this.state.countc} for ${this.state.kur}</p>
          <p id="plush">Tuxedo Sam Plush x{this.state.countd} for ${this.state.tux}</p>
          <p id="plush2">Little Twin Stars Plushies x{this.state.counte} for ${this.state.twi}</p>

          <p id="Cart">Total Price: ${this.state.total}    <Button variant="contained" onClick={() => checkOut()}>CHECK OUT</Button></p>

      </div>
    );
  }
}

//export default Header;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Shop />);

//export {Shop};
