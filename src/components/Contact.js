import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

// Images
import telephone from '../assets/images/telephone.svg';
import person from '../assets/images/person.svg';
import geo from '../assets/images/geo-alt.svg';
import pencil from '../assets/images/pencil.svg';
import xCircle from '../assets/images/x-circle.svg';
import icon from '../assets/images/envelope.svg';
import people from '../assets/images/peoples.svg';

const Contact = () => {

    // State del Formulario
    const [nombre, guardarNombre] = useState('');
    const [correo, guardarCorreo] = useState('');
    const [mensaje, guardarMensaje] = useState('');
    const [alerta, cambiarAlerta] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        // Validar formulario
        if (nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
            cambiarAlerta(true);
            return;
        } else {
            emailjs.sendForm('service_4ihc23n', 'Discitech_ucq62ak', e.target, 'user_oxOrnvxRUluTemM6FoReu')
                .then((result) => {
                    swal(
                        '¡Enviado Correctamente!',
                        'Pronto el equipo de Discitech se pondra en contacto con ustedes.',
                        'success'
                    );
                }, (error) => {
                    console.log(error.text);
                    swal(
                        'Oops...',
                        '¡No se pudo enviar su mensaje!',
                        'error'
                    );
                    return;
                });
            guardarNombre('');
            guardarCorreo('');
            guardarMensaje('');
            cambiarAlerta(false);
        }
    }

    return (
        <div id="contacto" className="section overflow-hidden">
            <section className="container-fluid pt-5">

                <div className="row row-cols-1 pt-4">

                    <div className="col mb-4 mw-lg-70 m-auto" data-aos="fade-up" data-aos-offset="250">

                        <div className="card border-primary border-2">

                            <div className="card-header p-0 m-0">
                                <div className="bg-primary text-white text-center py-2">
                                    <h2>Contactános</h2>
                                </div>
                            </div>

                            <div className="card-body p-3">

                                {alerta ?
                                    <div className="alert alert-danger" role="alert">
                                        <img className="mx-2" src={xCircle} alt="Person" width="16" height="16" />¡Todos los campos son obligatorios!
                                    </div> : null
                                }

                                <form onSubmit={sendEmail}>
                                    <div className="form-group">
                                        <label htmlFor="user_name">Nombre</label>
                                        <div className="input-group">
                                            <div className="input-group-addon my-auto"><img className="d-block mx-2" src={person} alt="Pencil" width="20" height="20" /></div>
                                            <input
                                                type="text"
                                                className="form-control bg-white"
                                                id="user_name"
                                                placeholder="Tu Nombre"
                                                value={nombre}
                                                onChange={e => guardarNombre(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="user_email">E-mail</label>
                                        <div className="input-group mb-2 mb-sm-0">
                                            <div className="input-group-addon my-auto"><img className="d-block mx-2" src={icon} alt="Pencil" width="20" height="20" /></div>
                                            <input
                                                type="email"
                                                className="form-control bg-white"
                                                id="user_email"
                                                placeholder="Tu Correo Electrónico"
                                                value={correo}
                                                onChange={e => guardarCorreo(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Mensaje</label>
                                        <div className="input-group mb-2 mb-sm-0">
                                            <div className="input-group-addon my-auto"><img className="d-block mx-2" src={pencil} alt="Pencil" width="20" height="20" /></div>
                                            <textarea
                                                className="form-control bg-white"
                                                id="message"
                                                style={{ resize: "none", minHeight: "100px" }}
                                                value={mensaje}
                                                onChange={e => guardarMensaje(e.target.value)}>
                                            </textarea>
                                        </div>
                                    </div>

                                    <div className="text-center mt-3">
                                        <button type="submit" className="btn btn-primary btn-block btn-efecto rounded-3 py-2">Enviar Mensaje</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                    <div className="col mt-1">
                        <div className="row text-center">
                            <div className="col-md-4" data-aos="fade-up">
                                <button className="bg-primary border-0 px-3 py-2 rounded text-white mb-1 d-inline-block btn-efecto" style={{ cursor: "default" }}><img className="d-block my-1" src={geo} alt="Geo-Alt" width="20" height="20" /></button>
                                <p>San José 306, Aquiles Serdán, Santa Lucia del Camino,<br />Oaxaca, México</p>
                            </div>

                            <div className="col-md-4" data-aos="fade-up">
                                <button className="bg-primary border-0 px-3 py-2 rounded text-white mb-1 d-inline-block btn-efecto" style={{ cursor: "default" }}><img className="d-block my-1" src={telephone} alt="Telephone" width="20" height="20" /></button>
                                <p>+52 951 256 6504</p>
                            </div>

                            <div className="col-md-4" data-aos="fade-up">
                                <button className="bg-primary border-0 px-3 py-2 rounded text-white mb-1 d-inline-block btn-efecto" style={{ cursor: "default" }}><img className="d-block my-1" src={people} alt="People" width="20" height="20" /></button>
                                <p>contactodiscitech @gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;