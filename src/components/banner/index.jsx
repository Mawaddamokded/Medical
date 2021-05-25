import React from "react";
import Header from "../header";
import Inscription from "./Inscription"
import Banner from "./Banner";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Team from "../team";





function index() {
 
//  const [NameSearch, setNameSearch] = useState("")
  // const handelChange=(e)=>{
  //    setNameSearch(e.target.value)
  //  }
  return (
    <div>
      <Router>
        
         <Header />
         {/* <Filter handelChange={handelChange}
         NameSearch={NameSearch} /> */}
          <Route path="/" component={Banner} exact />
          <Route path="/Inscription" component={Inscription} />
                   {/* Team Part */}
		    	<Route path="/" component={Team} exact />
      </Router>
    </div>
  );
}

export default index;
