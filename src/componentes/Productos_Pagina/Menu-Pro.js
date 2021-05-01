import React, { Component } from 'react';

import MenProductos from './Productos';
import List from './List';
class Menu extends React.Component{

        constructor(props){
            super(props);

            this.state= {
                productos:[
                {id:0, rating:5 , title:'Producto 1', image:'/Productos Amazon/Colchon 1.jpg'}
                ]
            };
        }

    render(){
        return(
            <div className="Menu">
            <MenProductos/>
            <List items={this.state.productos}/>
            </div>
        );
    }
}

export default Menu;