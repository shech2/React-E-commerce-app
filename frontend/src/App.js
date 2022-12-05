import React from 'react';

// Add Router to App.js:
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// Import for Footer and Header Components:

import Footer from './componenets/partials/footer';
import Header from './componenets/partials/header';
import Home from './componenets/pages/Home';
import Cart from './componenets/pages/Cart';


// App:

const App = () => {
    return (
        <Router>
            <>
                <Header logo='https://cdn.bitrix24.com/b2414835/landing/2c6/2c67a8aaa9039c5b02ecc1b1f44f1bda/Ayala_Malls_Logo_2x.png' />


                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='*' element={<h1>Page Not Found</h1>} />
                </Routes>


                <Footer text='Shop' />
            </>
        </Router>
    );
}

export default App;