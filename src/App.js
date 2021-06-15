import React from 'react'; 
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/pages/home/Home';
import Features from './components/pages/Features/Features';
import ProductDetail from './components/elements/pages/ProductDetail/ProductDetail';
import Cart from './components/pages/cart/Cart';
import Compare from './components/pages/compare/Compare';
import Wishlist from './components/pages/wishlist/Wishlist';
import "./assets/css/mystyle.css";
import "./assets/css/style.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.css";
import "./assets/css/googlefont.css";
import "./assets/icons8/css/line-awesome.min.css";


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/features"><Features/></Route>
        <Route exact path="/productdetail/:id"><ProductDetail/></Route>
        <Route exact path="/cart"><Cart/></Route>
        <Route exact path="/compare"><Compare/></Route>
        <Route exact path="/wishlist"><Wishlist/></Route>
        {/*<Route exact path="/productdetail/:id"><Productdetail/></Route>*/}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
