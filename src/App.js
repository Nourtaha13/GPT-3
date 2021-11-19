import React from 'react'
import { Header, Blog, Possibility, Features, Footer, WhatGPT3 } from "./containers"
import { Navbar, Brand, CTA } from "./components"
import "./App.css"
import "./index.css"
function App() {
    return ( 
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    );
}

export default App;
