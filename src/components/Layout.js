import React, { useEffect } from 'react';
import AOS from 'aos';

// Components
import Navbar from './Navbar';
import Footer from './Footer';
import Seo from './Seo';

const Layout = ({ children }) => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
        // eslint-disable-next-line
    }, []);

    return (
        <React.Fragment>
            <Seo />
            <Navbar />
            <div id="content">
                {children}
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Layout;