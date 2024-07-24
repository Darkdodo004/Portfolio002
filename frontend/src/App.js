import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import contact from "./components/contact";


import "./styles/app.scss";
import "./styles/head.scss";
import "./styles/Home.scss";
import "./styles/mediaquery.scss";



function app(){
  return(
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<contact />} /> */}
      </Routes>
      <footer />
    </Router>
  );
}

export default app;