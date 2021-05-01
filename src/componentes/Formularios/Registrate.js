import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styleH.css';


class formulario extends Component {
    render() {
        return (
            <div className="container-fluid fondo" >
                <div className="card container-fluid col-md-4 logBack">
                    <div className="caja">
                        <h3 class="text-center">Registrarse en MeXzon</h3>
                    </div>

                    <div className="card-body container-fluid">
                        <a for="">Nombre(s)</a>
                        <form action="#" className="form-floating ">
                            <div class="input-group label-float mb-3">
                                <input tcd cdype="email" className="form-control" placeholder=" " required />
                                <label>Nombre y usuario</label>
                                <span class="input-group-text" id="inputGroupPrepend"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg></span>
                                <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                <div class="invalid-feedback">
                                    Por favor ingrese un usuario
      </div>
                            </div>

                            <div class="input-group label-float mb-3">
                                <input type="text" class="form-control" placeholder=" " aria-label="Username" />
                                <label>Apellido(s)</label>
                                <span class="input-group-text">-</span>
                                <input type="text" class="form-control aaa" placeholder=" " aria-label="Server" />
                            </div>
                            <div class="form-group">
                                <label for="address">Direccion :</label>
                                <input type="text" className="form-control" id="address" required="" />
                            </div>

                            <a>Genero:</a>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">Masculino</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label class="form-check-label" for="flexRadioDefault2">Femenino</label>
                            </div>

                            <form class="row g-3 needs-validation" novalidate>
                                <div class="col-md-4">
                                    <label for="validationCustom03" class="form-label">Ciudad</label>
                                    <input type="text" class="form-control" id="validationCustom03" required />
                                    <div class="invalid-feedback">Porfavor ingrese una ciudad valida.</div>
                                </div>
                                <div class="col-md-2 estado">
                                    <label for="validationCustom04" class="form-label">Estado</label>
                                    <select class="form-select" id="validationCustom04" required>
                                        <option selected disabled value="">Buscar...</option>
                                        <option value="Aguascalientes">Aguascalientes</option>
                                        <option value="Baja California">Baja California</option>
                                        <option value="Baja California Sur">Baja California Sur</option>
                                        <option value="Campeche">Campeche</option>
                                        <option value="Chiapas">Chiapas</option>
                                        <option value="Chihuahua">Chihuahua</option>
                                        <option value="CDMX">Ciudad de México</option>
                                        <option value="Coahuila">Coahuila</option>
                                        <option value="Colima">Colima</option>
                                        <option value="Durango">Durango</option>
                                        <option value="Estado de México">Estado de México</option>
                                        <option value="Guanajuato">Guanajuato</option>
                                        <option value="Guerrero">Guerrero</option>
                                        <option value="Hidalgo">Hidalgo</option>
                                        <option value="Jalisco">Jalisco</option>
                                        <option value="Michoacán">Michoacán</option>
                                        <option value="Morelos">Morelos</option>
                                        <option value="Nayarit">Nayarit</option>
                                        <option value="Nuevo León">Nuevo León</option>
                                        <option value="Oaxaca">Oaxaca</option>
                                        <option value="Puebla">Puebla</option>
                                        <option value="Querétaro">Querétaro</option>
                                        <option value="Quintana Roo">Quintana Roo</option>
                                        <option value="San Luis Potosí">San Luis Potosí</option>
                                        <option value="Sinaloa">Sinaloa</option>
                                        <option value="Sonora">Sonora</option>
                                        <option value="Tabasco">Tabasco</option>
                                        <option value="Tamaulipas">Tamaulipas</option>
                                        <option value="Tlaxcala">Tlaxcala</option>
                                        <option value="Veracruz">Veracruz</option>
                                        <option value="Yucatán">Yucatán</option>
                                        <option value="Zacatecas">Zacatecas</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Porfavor selecccione un estado valido.
    </div>
                                </div>

                                <div class="col-md-3 codigo">
                                    <label for="validationCustom05" class="form-label">Código</label>
                                    <input type="text" class="form-control" id="validationCustom05" required />
                                    <div class="invalid-feedback">
                                        Por favor ingrése un código postal valido.
    </div>
                                </div>

                                <div class="col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                        <label class="form-check-label" for="invalidCheck">
                                            Acepto los términos y condiciones
      </label>
                                        <div class="invalid-feedback">
                                            Tu has sido registrado correctamente seras redirigido
      </div>
                                    </div>
                                </div>
                            </form>

                            <br></br>
                            <br></br>
                            <div class="text-center ">
                                <button type="submit" className="btn btn-danger btn-lg">Registrarse</button>
                            </div>
                            <br></br>

                        </form>
                        <label className="forgot-password text-left ">
                            <Link to="./Iniciar Sesion">Ya tengo un usuario
                            </Link>
                        </label>
                        
                    </div>
                </div>
            </div>

        )
    }
}

export default formulario;