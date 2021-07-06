import Rreact from "react";

import Home from "./../page/home/home.jsx";
import PlatformChoice from "./../page/platformChoice/platformChoice.jsx";
import PriceChoose from './../page/priceChoose/priceChoose.jsx'
import DetailedConfiguration from './../page/detailedConfiguration/detailedConfiguration.jsx'

import { BrowserRouter as Router, Route } from "react-router-dom";

function router() {
  return(
    <Router >
      
  
    <Route path="/" component={PlatformChoice} exact={true} />
    <Route path="/detailedConfiguration" component={DetailedConfiguration}  /> 
    <Route path="/priceChoose" component={PriceChoose}  />
    </Router>
  );
}


export default router;