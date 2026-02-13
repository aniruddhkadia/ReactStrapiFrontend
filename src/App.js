import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Offerbanner from "./components/Footer/Offerbanner/Offerbanner";
import AppContext from "./utils/context";

// import About from "./components/Pages/About";
import Success from "./components/Pages/Success";
import Login from "./components/Pages/Login";

function App() {

    return (
    
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/success" element={<Success />} />
                </Routes>
                <Offerbanner />
                <Footer />
            </AppContext>
        </BrowserRouter>


    );
}

export default App;
