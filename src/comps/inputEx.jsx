import React, { useContext } from 'react'
import { ClientContext } from '../context/context';
import CheckBox from './checkBox';

export default function InputEx() {

    const { coinRef, setCoinVal, setCoinVal2, inputVal } = useContext(ClientContext);

    return (
        <div className='col-md-6 text-center mt-5'>

            <input ref={coinRef} type="number" placeholder='Enter amount...' onChange={inputVal} />

            <CheckBox setCoinVal={setCoinVal} setCoinVal2={setCoinVal2} />

        </div >
    )
}
