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
                <Header logo='https://seeklogo.com/images/E/e-commerce-concept-logo-5146F23CC5-seeklogo.com.png' />

                <div className='flex-wrapper'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='*' element={<h1>Page Not Found</h1>} />
                    </Routes>


                    <Footer text='Shop' />
                </div>
            </>
        </Router>
    );
}

export default App;