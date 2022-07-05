import React, { useContext } from 'react'
import { ClientContext } from '../context/context';
import "./dateStyle.css"

export default function DateRun() {

    const { date } = useContext(ClientContext);

    return (
        <div className='col-md-3 mx-auto green date'>
            <h3>Time : {date.toLocaleTimeString()}</h3>
            <h4>Date : {date.toLocaleDateString()}</h4>
        </div>
    )
}
