import React, {Component, isValidElement} from 'react';
import Item from './Item';

function List(props){
    return(
        <div className="list">
            {
                props.items.map(item =>
                    <Item id={item.id}
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        rating={item.rating}/>
                    )
            }
        </div>
    );
}

export default List;