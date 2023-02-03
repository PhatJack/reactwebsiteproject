import React from "react"
import Navbar from "./components/Navbar.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./components/pages/Home"
import Services from "./components/pages/Services.js"
import SignUp from "./components/pages/SignUp.js"
import Products from "./components/pages/Products.js"

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/services" element={<Services />} />
                    <Route exact path="/products" element={<Products />} />
                    <Route exact path="/sign-up" element={<SignUp />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
