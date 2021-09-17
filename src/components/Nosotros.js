import React from 'react';

// Images
import chat from '../assets/images/chat.png';
import think from '../assets/images/thinking.svg';

const Nosotros = () => {

    return (
        <div id="nosotros" className="section overflow-hidden">
            <div className="container-fluid my-5">
                <div className="row d-flex align-items-center pt-2">

                    <div
                        className="col-md-6 col-lg-6 px-5"
                        data-aos="fade-right"
                        data-aos-offset="400"
                    >
                        <div className="row d-flex align-items-center text-start p-3 pb-0 mb-0">
                            <img
                                className="h-auto w-auto"
                                src={think}
                                alt="web-design"
                            ></img>
                        </div>
                        <div className="row d-flex align-items-center text-start px-5 text-white mt-0">

                            <div className="content-fluid py-4 gr-1" style={{ borderRadius: "1.4rem" }}>
                                <p className="fst-italic">"Discitech fue creado para expandir conocimiento y ayudar a las pequeñas y medianas empresas a posicionarse en internet"</p>

                                <div className="d-flex">
                                    <img className="rounded-circle mb-2" src={chat} alt="chat" width="50" height="50"></img>

                                    <div className="row row-cols-1">
                                        <p className="col ms-3 mb-0"><strong>Jonathan Ramírez</strong></p>
                                        <p className="col ms-3" style={{ fontSize: ".7rem" }}>CEO DISCITECH</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6 text-center text-md-center p-5" data-aos="fade-left" data-aos-offset="300">

                        <div style={{ color: "#343666" }}>
                            <div className="row d-flex align-items-center text-start pb-1">
                                <h1><strong>Sobre Nosotros</strong></h1>
                            </div>

                            <div className="row d-flex align-items-center text-start pb-1">
                                <p className="fs-5">Discitech</p>
                            </div>

                            <div className="row d-flex align-items-center text-start pb-5">
                                <p>Discitech es una empresa mexicana comprometida con el desarrollo tecnológico. Somos un grupo de jóvenes que comparte sus habilidades y conocimientos para el futuro.</p>
                                <p>Además brindamos servicios digitales para tu negocio.</p>
                            </div>
                        </div>

                        <div className="row d-flex align-items-center">
                            <a
                                className="col-lg-6 btn btn-outline-primary rounded-pill border-2 position-relative btn-efecto"
                                href="https://wa.me/529512566504?text=Hola%20Discitech%20necesito%20más%20información%20sobre..."
                                role="button"
                            ><strong>QUIERO UNA PAGINA WEB</strong></a>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Nosotros;