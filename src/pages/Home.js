import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListaCard from './Productos_Presentacion/producto_Card';


import Example from './slid'

class home extends Component {
    render() {
        return (
        <div>
            <div className="container-fluid ml-2">
                <Example/>
            </div>
            <div class="container-fluid" >
                <ListaCard/>
                <br></br>
            </div>

            </div>

        );
    }
}

export default home;