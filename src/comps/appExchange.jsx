import React, { useEffect, useRef, useState } from 'react'
import { ClientContext } from '../context/context'
import DateRun from './dateRun';
import InputEx from './inputEx'
import ScoreEx from './scoreEx'

export default function AppExchange() {

    const [ar, setAr] = useState([]);

    const [changeBtn, setChangeBtn] = useState(true);

    const coinRef = useRef();

    const [valueCoinRef, setValueCoinRef] = useState();

    const [coin, setCoin] = useState();

    const [coinName, setCoinName] = useState("");
    const [coinName2, setCoinName2] = useState("");


    const [coinVal, setCoinVal] = useState();
    const [coinVal2, setCoinVal2] = useState();

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        doApi();
    }, [])

    useEffect(() => {
        inputVal();
    }, [changeBtn])

    useEffect(() => {
        inputVal();
    }, [coinVal])

    useEffect(() => {
        inputVal();
    }, [coinVal2])

    useEffect(() => {
        let timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });


    const inputVal = () => {

        let coinRefVal = Number(coinRef.current.value);
        setValueCoinRef(coinRefVal);

        let totalCoinVals;

        if (changeBtn) {

            if (coinVal == coinVal2) {
                totalCoinVals = coinRefVal * 1;
                totalCoinVals = totalCoinVals.toFixed(0);
                setCoin(totalCoinVals);
                return;
            }

            if (coinVal == 1) {
                totalCoinVals = coinRefVal * (coinVal * coinVal2);
                totalCoinVals = totalCoinVals.toFixed(3);
                setCoin(totalCoinVals);
                return;
            }

            if (coinVal > 1) {
                totalCoinVals = coinRefVal * (coinVal2 / coinVal);
                totalCoinVals = totalCoinVals.toFixed(3);
                setCoin(totalCoinVals);
                return;
            }

            if (coinVal < 1) {
                totalCoinVals = coinRefVal * (coinVal2 / coinVal);
                totalCoinVals = totalCoinVals.toFixed(3);
                setCoin(totalCoinVals);
                return;
            }
        }

        else {
            if (coinVal == coinVal2) {
                totalCoinVals = coinRefVal * 1;
                totalCoinVals = totalCoinVals.toFixed(0);
                setCoin(totalCoinVals);
                return;
            }

            if (coinVal2 == 1) {
                totalCoinVals = coinRefVal * (coinVal * coinVal2);
                totalCoinVals = totalCoinVals.toFixed(3);
                setCoin(totalCoinVals);
                return;
            }

            if (coinVal2 > 1) {
                totalCoinVals = coinRefVal * (coinVal / coinVal2);
                totalCoinVals = totalCoinVals.toFixed(3);
                setCoin(totalCoinVals);
                return;
            }

            if (coinVal2 < 1) {
                totalCoinVals = coinRefVal * (coinVal / coinVal2);
                totalCoinVals = totalCoinVals.toFixed(3);
                setCoin(totalCoinVals);
                return;
            }
        }


    }



    const doApi = async () => {
        let apiUrl = `https://api.currencyapi.com/v2/latest?apikey=f2dce500-45f0-11ec-9860-7954a32a920b`;
        let localUrl = "/localUrl/coins.json";
        //                      coins -- easyCoins

        let resp = await fetch(apiUrl);

        if (resp != true) {
            resp = await fetch(localUrl);
        }

        let data = await resp.json();
        let tempObj = data.data;
        let coins_ar = [];

        for (const key in tempObj) {
            coins_ar.push({ coin: key, value: tempObj[key] });
        }
        setAr(coins_ar);
    }

    return (
        <ClientContext.Provider value={
            {
                changeBtn, setChangeBtn,
                coinRef,
                valueCoinRef,
                ar, setAr,
                coin, setCoin,
                coinName, setCoinName,
                coinName2, setCoinName2,
                coinVal, setCoinVal,
                coinVal2, setCoinVal2,
                inputVal, date
            }
        }>
            <div className='container row mx-md-auto align-items-center'>
                <h1 className='text-center m-3'>EXCHANGE CURRENCY</h1>

                <InputEx />
                <ScoreEx />
                <DateRun />

                <small className='text-center mt-3 small'>© Aharoni Yovel</small>
            </div>
        </ClientContext.Provider>
    )
}
