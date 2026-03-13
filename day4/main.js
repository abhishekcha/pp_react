import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);


const App = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
};
reactRoot.render(App());
