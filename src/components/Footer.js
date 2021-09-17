import React from 'react';

// Images
import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';
import whatsapp from '../assets/images/whatsapp.svg';

const Footer = () => {
    return (
        <div className="container-fluid p-0">

            <footer className="bg-black text-center text-white">
                {/*-- Copyright --*/}
                <section className="py-2 px-4">
                    <div className="row d-flex align-items-center">

                        <div className="col-md-7 col-lg-8 text-center text-md-start">

                            <div className="p-3">
                                © 2020, Discitech. Todos los Derechos Reservados.
                            </div>

                        </div>

                        <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">

                            {/*-- Facebook --*/}
                            <a
                                className="btn m-2 border-0 p-0 img-efecto rounded-circle"
                                href="https://www.instagram.com/discitech.academy/"
                                role="button"
                                target="_blank"
                                rel="noopper noreferrer"
                            ><img className="d-block m-0" src={facebook} alt="Logo-Facebook" width="16" height="16" /></a>

                            {/*-- Instagram --*/}
                            <a
                                className="btn m-2 border-0 p-0 img-efecto rounded-circle"
                                href="https://www.instagram.com/discitech.academy/"
                                role="button"
                                target="_blank"
                                rel="noopper noreferrer"
                            ><img className="d-block m-0" src={instagram} alt="Logo-Instagram" width="16" height="16" /></a>

                            {/*-- Whatsapp --*/}
                            <a
                                className="btn m-2 border-0 p-0 img-efecto rounded-circle"
                                target="_blank"
                                rel="noopper noreferrer"
                                href="https://wa.me/529512566504?text=Hola%20Discitech%20necesito%20más%20información%20sobre..."
                                role="button"
                            ><img className="d-block m-0" src={whatsapp} alt="Logo-Whatsapp" width="16" height="16" /></a>

                        </div>
                    </div>
                </section>
            </footer>

        </div>
    );
}

export default Footer;