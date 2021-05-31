import "./App.css";
import Routes from "./components/routes"
import Header from "./components/Header/Header";
import React from "react";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes/>
            <Footer/>
        </div>
    );
}

export default App;
