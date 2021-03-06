import React, { useState } from 'react';
import Second from './second';

function First(){

    const[alpha, setAlpha] = useState('');

    let choice = <Second name="" />

    if (alpha !== '')
        choice = <Second name={alpha} />

    console.log(alpha);
    return(
        <div>
            <select onChange={(event) => setAlpha(event.target.value)}>
                { alpha === '' ? <option defaultValue=''> </option> : <></> }
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>
            {choice}
        </div>
    );
}

export default First;