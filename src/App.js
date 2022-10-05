import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;


// import "./App.css";
// import Navbar from "./components/Navbar";

/* function App() {
//   return <Navbar />;
// }

// export default App;*/

// import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; it is giving error at switch
// import Navbar from "./component/Navbar";
// import Home from "./pages/home";
// import Services from "./pages/services";
// import How_it_works from "./pages/how_it_works";
// import Contact from "./pages/contact";
// import Login from "./pages/login";


// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/services" component={Services} />
//         <Route path="/how_it_works" component={How_it_works} />
//         <Route path="/contact" component={Contact} />
//         <Route path="/login" component={Login} />
//       </Switch>
//     </Router>
//   );
// }
// export default App;