import React, { useEffect } from 'react';
import Typed from 'typed.js';

// Images
import whatsapp from '../assets/images/whatsapp.svg';
import business from '../assets/images/business.svg';

const Header = () => {

    useEffect(() => {
        //consoleText(['Adquiere Las Habilidades Y Herramientas Del Futuro.', 'En Discitech podrás adquirir las habilidades tecnológicas más demandadas.'], 'text', ['tomato', 'rebeccapurple', 'lightblue']);
        const typed = new Typed('#texto', {
            strings: ['Desarrollo Web', 'Mantenimiento'],
            typeSpeed: 80,
            backSpeed: 30,
            backDelay: 1200,
            loop: true
        });

        // Destropying
        return () => {
            typed.destroy();
        };

        // eslint-disable-next-line
    }, [])

    return (
        <React.Fragment>
            <div
                id="imagen-menu"
                className="text-center w-100 position-relative bg-black overflow-hidden"
                style={{
                    height: "88vh"
                }}>{/*,
                    minHeight: 500,
                    backgroundImage: `url(${header})`,
                    backgroundPosition: '50% 50%',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'*/}

                <div className="d-flex justify-content-center align-items-center ff-poppins h-100" data-aos="fade-down">
                    <div className="text-white position-relative" style={{ zIndex: '1500' }}>

                        <h1 className="ff-poppins fw-bolder neon mb-3 fs-big">Discitech</h1>
                        <p className="fs-4 font-monospace fw-bold mb-5 pb-5">
                            <span id="texto" style={{ color: 'crimson' }}></span>
                            {/*<strong className="terminal-cursor">&#95;</strong>*/}
                        </p>

                    </div>

                    <img
                        className="imgheader"
                        src={business}
                        alt="Working"
                    ></img>
                </div>

            </div>

            <a href="https://wa.me/529512566504?text=Hola%20Discitech%20necesito%20más%20información%20sobre..." className="whatsapp" target="_blank" rel="noopper noreferrer"><img src={whatsapp} alt="Logo-Whatsapp" width="30" height="30" style={{ marginTop: "-4px", fill: "#fff" }} /></a>
        </React.Fragment>
    );
}

export default Header;