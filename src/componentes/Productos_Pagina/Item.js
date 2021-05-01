import React, {Component} from 'react';
import './Item.css';
class Item extends React.Component{

        constructor(props){
            super(props);
            this.state = {
                stars: []
            };
        }

        componentDidMount(){
            this.setState({
                stars: Array(parseInt(this.props.rating)).fill(0)
            });
        }

    render(){
        return(
        <div className="item">
            <div className="image"><img src={'img/' + this.props.image} width="100%"/></div>
            <div className="title">{this.props.title}</div>
            <div className="rating" style={{ color: '#20c997' }}>
                <p>
                {
                    this.state.stars.map(x =>
                        <img src='img/Productos Amazon/star.png' width="32"/>
                        )
                }
                </p>
                Calificacion: 
                <select value={this.props.rating}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <div className="actions">
                    <button>Eliminar</button>
                </div>
                
            </div>
            
        </div>
    );
}
    }
export default Item;