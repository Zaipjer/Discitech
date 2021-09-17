import { Link } from 'gatsby';
import React, { useEffect } from 'react';
import $ from 'jquery';

// Images
import logo from '../assets/images/discitech.png';
import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';
import whatsapp from '../assets/images/whatsapp.svg';

const Navbar = () => {

    // Script Detectar el scroll
    useEffect(() => {
        // Obtener el objeto nav del DOM
        var nav = $('nav');
        // Obtener la altura de Nav
        var navHeight = nav.outerHeight();

        $(window).scroll(() => {

            // Desplazamiento de las secciones activas en el menu (activateCurrentSection)
            var id; // Inicializar el id del elemento que de desea activar

            // Obtener todas las secciones
            var sections = $('.section');

            // Almacenar la posición actual en la página cuando se activa el desplazamiento
            var pos = $(document).scrollTop();

            /*
            * Exception: Si la última sección es <100% de la altura de la pantalla
            * Hágalo activo cuando el 50% sea visible.
            * De lo contrario, la última sección nunca se activaría.
            */
            var lastSection = sections[sections.length - 1];  // Obtener ultima seccion
            var lastSectionTooSmall = $(lastSection).height() < $(window).height();

            if (lastSectionTooSmall) {
                var lastSectionTopPos = $(lastSection).offset().top;
                // lastSectionTriggerPos es verdadero si el 50% de la última sección es visible
                var lastSectionTriggerPos = $(window).height() + $(document).scrollTop() - ($(lastSection).height() / 2);
                var lastSectionInView = lastSectionTriggerPos > lastSectionTopPos;
            }

            if (lastSectionTooSmall && lastSectionInView) {
                id = $(lastSection).attr('id');
            } else {  // de lo contrario, la última sección es > = 100% de la vista, verifique todas las secciones para encontrar la superior
                sections.each(function () {
                    var top = $(this).offset().top - navHeight; // Obtener la posición superior e inferior de la sección
                    var bottom = top + $(this).outerHeight();

                    /*
                    * Si la posición actual es más alta (más profunda en la página) que la parte superior de la sección
                    * y es más pequeño (más grande en la página) que la parte inferior de la sección
                    * se activa la seccion.
                    */
                    if (pos >= top && pos <= bottom) {
                        id = $(this).attr('id');       // almacenar el id de esta sección
                    }

                    if (pos < 300) {
                        id = "home";       // almacenar el id de esta sección
                    }
                });
            }

            /*
            Si se estableció una identificación antes, active la sección en el nav
            */
            if (id) {
                nav.find('a').removeClass('activo');
                nav.find('a[href="#' + id + '"]').addClass('activo');
            }


        });

        // eslint-disable-next-line
    }, [])

    return (
        <React.Fragment>
            {/*-- Grid container --*/}
            <div id="home" className="container-fluid bg-primary section" >
                {/*-- Section: Social media --*/}
                <section className="text-end px-4" >
                    {/*-- Facebook --*/}
                    <a
                        className="btn m-2 border-0 p-0 img-efecto rounded-circle"
                        target="_blank"
                        rel="noopper noreferrer"
                        href="https://www.instagram.com/discitech.academy/"
                        role="button"
                    > <img className="d-block m-0" src={facebook} alt="Logo-Facebook" width="16" height="16" /></a >

                    {/*-- Instagram --*/}
                    <a
                        className="btn m-2 border-0 p-0 img-efecto rounded-circle"
                        target="_blank"
                        rel="noopper noreferrer"
                        href="https://www.instagram.com/discitech.academy/"
                        role="button"
                    > <img className="d-block m-0" src={instagram} alt="Logo-Instagram" width="16" height="16" /></a >

                    {/*-- Whatsapp --*/}
                    <a
                        className="btn m-2 border-0 p-0 img-efecto rounded-circle"
                        target="_blank"
                        rel="noopper noreferrer"
                        href="https://wa.me/529512566504?text=Hola%20Discitech%20necesito%20más%20información%20sobre..."
                        role="button"
                    > <img className="d-block m-0" src={whatsapp} alt="Logo-Whatsapp" width="16" height="16" /></a >

                </section>
            </div>

            {/* Menu */}
            <nav id="menu" className="navbar navbar-expand-lg navbar-dark bg-black px-4 position-sticky"
                style={{ Color: '#6f4bf1', zIndex: '2000', top: '0' }}>
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand">
                        {/* LOGO */}
                        <img src={logo} alt="logo-discitech" width="100" height="40" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-expanded="false"
                        aria-controls="navbarResponsive"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto fs-navlink">
                            <li className="nav-item">
                                <a className="nav-link activo" href="#home">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#nosotros">Sobre Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#servicios">Servicios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contacto">Contactos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;