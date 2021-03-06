import React, { useState } from 'react';
import Third from './quiz';

function Second(props) {

    const[numeric, setNumeric] = useState([])

    let data = [
        {
            'numeric': numeric, 
            'name': props.name
        }
        ];
    console.log(data);

    return(
        <div>
            <h1>{props.name}</h1>
            <select multiple={true} onChange={(event) => setNumeric(arra => [arra, event.target.value])} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <Third data={data} />
        </div>
    );
}

export default Second;