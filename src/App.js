import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import Footer from "./components/Footer";
import NavbarApp from "./components/Navbar";
import ProfilePage from "./components/ProfilePage";
import { BrowserRouter, Route } from "react-router-dom";
import Experience from "./components/Experience";
import OtherProfile from "./components/OtherProfile";
import FeedPage from "./components/FeedPage";

function App() {
  return (
    <BrowserRouter>
      <NavbarApp />
      <Route path="/" exact component={ProfilePage} />
      <Route path="/profile/:id" component={OtherProfile} />
      <Route path="/experience" exact component={Experience} />
      <Route path="/feed" exact component={FeedPage} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
