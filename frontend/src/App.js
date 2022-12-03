import React from 'react';

// Import for Footer and Header Components:

import Footer from './componenets/partials/footer';
import Header from './componenets/partials/header';

// CSS for Footer and Header:
import './css/App.css';

// App:

const App = () => {
    return (
        <>
            <Header logo='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp' />

            <Footer text='Shop' />
        </>
    );
}

export default App;