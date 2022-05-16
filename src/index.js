import ReactDOM from 'react-dom/client';
import React from "react";
import './index.css';
import 'reactjs-popup/dist/index.css';
import ReactTooltip from 'react-tooltip';
import Button from '@mui/material/Button';
import App from './App';
import Cinna from './clickCinna';
import Purin from './clickPurin';
import Kerop from './clickKerop';
import Kuro from './clickKuro';
import Tux from './clickTux';
import Twi from './clickTwi';
import Checkout from './checkout';

// My React Components:
// 1. Alerts triggered by clicking images
// 2. Clickable buttons
// 3. Counters triggered by said buttons
// 4. Mouse-over tooltips on images
// 5. Check out button brings up alert then refreshes page
// 6. App.js stores store title and introduction texts to display them

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

  render()
  {
    // Build store front display
    return (
      <div className="App">
        <App />
        <center>
          <Cinna />
          <Purin />
          <Kerop />
        <br/>
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
          <Kuro />
          <Tux />
          <Twi />
          <ReactTooltip />
          <br/>

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

          <p id="Cart"><strong>Your Cart:</strong></p>
          <p id="plush">Cinnamoroll Plush x{this.state.count} for ${this.state.cin}</p>
          <p id="plush2">Pompompurin Plush x{this.state.counta} for ${this.state.pom}</p>
          <p id="plush">Keroppi Plush x{this.state.countb} for ${this.state.ker}</p>
          <p id="plush2">Kuromi Plush x{this.state.countc} for ${this.state.kur}</p>
          <p id="plush">Tuxedo Sam Plush x{this.state.countd} for ${this.state.tux}</p>
          <p id="plush2">Little Twin Stars Plushies x{this.state.counte} for ${this.state.twi}</p>

          <p id="Cart">Total Price: ${this.state.total}  <Checkout /> </p>
          </center>
      </div>
    );
  }
}

//export default Header;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Shop />);

//export {Shop};
