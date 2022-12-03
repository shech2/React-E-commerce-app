import React from 'react';

// Add Router to App.js:
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// Import for Footer and Header Components:

import Footer from './componenets/partials/footer';
import Header from './componenets/partials/header';
import Home from './componenets/pages/Home';

// CSS for Footer and Header:
import './css/App.css';

// App:

const App = () => {
    return (
        <Router>
            <>
                <Header logo='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp' />


                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>


                <Footer text='Shop' />
            </>
        </Router>
    );
}

export default App;