import React, { useContext, useRef } from 'react'
import { ClientContext } from '../context/context';
import { BsArrowDownUp } from 'react-icons/bs';


export default function CheckBox() {

    const name = useRef();
    const name2 = useRef();

    const { ar, setCoinVal, setCoinVal2, setCoinName, setCoinName2, changeBtn, setChangeBtn } = useContext(ClientContext);

    const sendSelectInfo = (e) => {
        let value1 = ar.find(item => { return item.coin == e.currentTarget.value })
        setCoinVal(value1.value);
        setCoinName(e.currentTarget.value);
    }

    const sendSelectInfo2 = (e) => {
        let value2 = ar.find(item => { return item.coin == e.currentTarget.value })
        setCoinVal2(value2.value);
        setCoinName2(e.currentTarget.value);
    }

    return (
        <div className='m-2'>
            <select className='m-2' onChange={(e) => sendSelectInfo(e)} >
                <option>Pls Choose Coin</option>
                {ar.map((item, i) => {
                    return (
                        <option ref={name} name={item.coin} key={i}>{item.coin}</option>

                    )
                })}
            </select>

            <br />

            <BsArrowDownUp onClick={() => setChangeBtn(!changeBtn)} className='btn BsArrowDownUp' />

            <br />

            <select className='m-2' onChange={(e) => sendSelectInfo2(e)}>
                <option>Pls Choose Coin</option>
                {ar.map((item, i) => {
                    return (
                        <option ref={name2} name={item.coin} key={i}>{item.coin}</option>)
                })}
            </select>
        </div>
    )
}
