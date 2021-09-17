import React from 'react';

// Images
import laptop from '../assets/images/laptop.svg';
import phone from '../assets/images/phone.svg';
import gear from '../assets/images/gear.svg';
import bar from '../assets/images/bar-chart-line.svg';

const Servicios = () => {
    return (

        <div id="servicios" className="section overflow-hidden">
            <div className="container-fluid text-white pt-3" style={{ backgroundColor: "#1c1b40" }}>
                <div className="row align-items-center">

                    <div className="col text-center text-md-center p-5">

                        <div className="row d-flex align-items-center text-center mb-1" data-aos="fade-up" data-aos-offset="400">
                            <h1><strong>Servicios</strong></h1>
                        </div>

                        <div className="row d-flex align-items-center text-center mb-4" data-aos="fade-up" data-aos-offset="400">
                            <p>Pongo a su disposición los diferentes servicios que realizamos para sus expectativas de trabajo.</p>
                        </div>

                        <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-3">
                            <div className="col" data-aos="fade-up-right" data-aos-offset="400">
                                <div className="card gr-2 card-efecto" style={{ height: "100%" }}>
                                    <div className="d-block">
                                        <img className="mt-3" src={laptop} alt="Icono-Laptop" width="50" height="50" />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-title fs-5 pt-2">DISEÑO WEB</p>
                                        <p className="card-text pt-4">¿Tienes una PYME y necesitas hacer crecer tu negocio?</p>
                                        <p className="card-text pb-4">Ofrecemos diseño de páginas web para darle más profesionalidad y confianza a tu negocio.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col" data-aos="fade-up" data-aos-offset="400">
                                <div className="card gr-2 card-efecto" style={{ height: "100%" }}>
                                    <div className="d-block">
                                        <img className="mt-3" src={phone} alt="Icono-Phone" width="50" height="50" />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-title fs-5 pt-2">RESPONSIVE DESIGN</p>
                                        <p className="card-text py-4">Hoy en día la mayoría de las personas consultan internet a través de su celular, por esta razón se ha vuelto tan importante adaptar los sitios web a su versión móvil, nosotros lo entendemos y creamos la mejor experiencia para el usuario tanto en celular, tableta, laptop y computadora.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col" data-aos="fade-up-left" data-aos-offset="400">
                                <div className="card gr-2 card-efecto" style={{ height: "100%" }}>
                                    <div className="d-block">
                                        <img className="mt-3" src={gear} alt="Icono-Gear" width="50" height="50" />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-title fs-5 pt-2">MANTENIMIENTO</p>
                                        <p className="card-text py-4">Servicio de soporte técnico especializado para tu pagina web, resolución de dudas, problemas, actualizaciones, nuevo contenido etc.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col" data-aos="fade-up-right" data-aos-offset="400">
                                <div className="card gr-2 card-efecto" style={{ height: "100%" }}>
                                    <div className="d-block">
                                        <img className="mt-3" src={bar} alt="Icono-Bar" width="50" height="50" />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-title fs-5 pt-2">SEO</p>
                                        <p className="card-text py-4">(Search Engine Optimization) Para todas la empresas es importante el que su producto se conozca y una de las formas en que se da a conocer en internet es gracias a los buscadores (Google,Bing,Yahoo) y para que estos motores de búsqueda puedan mostrar el contenido correspondiente necesitan que la página esté optimizada de manera que puedan leer la información de la misma.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Servicios;