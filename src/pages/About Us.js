import React, { Component } from 'react';

class Nosotros extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <h1 className="text-center " style={{ color: '#20c997' }}>Sobre Nosotros</h1>
                </div>
                <div className="row">
                    <div className="card-group col">
                        { }
                        <div className="card">
                        </div>
                    </div>
                </div>

                <div class="ml-3 mt-2 backC">
                    <div class="row g-0">

                        <div class="embed-responsive embed-responsive-16by9 col-md-3 " alt="21" autoplay loop muted>
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/1mdDtSciTmo" allowfullscreen></iframe>
                        </div>

                        <div class="col-md-9 mt-1">
                            <div class="card text-white bg-danger" style={{ color: '#20c997' }}>
                                <h5 class="card-title">Historia</h5>
                                <p class="card-text">
                                    Hola nosotros Somos una empresa se fundo a principio de 2021 por un grupo de estudiantes del Tecnologico Nacional de México
                                    Campus de los Ríos que comenzo como un proyecto de estudiantil y fue creciendose aun mas Hasta llegar a ser conocido como MeXzone
                                    la pagina web donde podras encontrar una variedad de productos.
                                        </p>
                                <p class="card-text font-italic"><small class="text-warning">
                                    <abbr title="Esto se actualizo desde mi Pc aun en prueba">
                                        Actualizado hace 3 minutos antes
                                    </abbr>
                                </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <br></br>
                <h1 className="text-center " style={{ color: '#20c997' }}>Equipo de Trabajo</h1>

                <div className="container text-center mt-5">
                    <div class="card">
                        <div className="img_P">
                            <img src="/img/mich.png" class="card-img-top" alt="..." />
                        </div>
                            <h5 class="card-title">Fredy Ivan</h5>
                            <p class="card-text">

                            </p>
                            <p>
                                
                                </p>
                            <p class="card-text"><small class="text-muted">Estudiante</small>
                            </p>
                        
                    </div>

                    <div class="card">
                        <div className="img_P">
                            <img src="/img/licho.jpg" class="card-img-top" alt="..." />
                        </div>
                        <h5 class="card-title">Luis Fernando</h5>
                            <p class="card-text">
                                        </p>
                            <p>
                                
                                        </p>
                        <p class="card-text"><small class="text-muted">Estudiante</small>
                        </p>
                    </div>


                    <div class="card">
                        <div className="img_P">
                            <img src="/img/castro.jpg" class="card-img-top" alt="..." />
                        </div>
                        
                            <h5 class="card-title">Andy Castro</h5>
                            <p class="card-text">.</p>

                            <p class="card-text"><small class="text-muted">Estudiante</small></p>
                        
                    </div>
                </div>
            </div>



        );
    }
}

export default Nosotros;