import React, { useContext } from 'react'
import { ClientContext } from '../context/context'

export default function ScoreEx() {

    const { coin, coinName, coinName2, valueCoinRef, changeBtn } = useContext(ClientContext);

    return (
        <>
            {changeBtn ?
                <div className='green col-md-6 d-inline-block'>

                    <h2>You insert: {valueCoinRef ? valueCoinRef : "X"} {coinName}</h2>

                    <h2>The value of {valueCoinRef ? valueCoinRef : "X"} {coinName ? coinName : "X"}  is: {coin} {coinName2}</h2>

                </div>
                :
                <div className='green col-md-6 d-inline-block'>

                    <h2>You insert: {valueCoinRef ? valueCoinRef : "X"}  {coinName2}</h2>

                    <h2>The value of {valueCoinRef ? valueCoinRef : "X"} {coinName2 ? coinName2 : "X"}  is: {coin} {coinName}</h2>

                </div>

            }
        </>
    )
}
