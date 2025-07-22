import { useEffect, useState } from "react";
import Freecurrencyapi from '@everapi/freecurrencyapi-js';

function useCurrencyInfo(currency) {
    const freecurrencyapi = new Freecurrencyapi('fca_live_UnrVPmxEKTkWVa7M4R012bDtfaFqFjiqjxz4oS83');
    const [data, setData] = useState({})
    // freecurrencyapi.latest({
    //     base_currency: 'USD',
    //     currencies: 'EUR'
    // }).then(response => {
    //     console.log(response);
    // });
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
    }, [currency])
    // useEffect(() => {
    //      freecurrencyapi.latest({
    //     base_currency: 'USD',
    //     currencies: 'EUR'
    // }).then(response => {
    //     console.log(response);
    // });
    // }, [currency])
    return data
}

export default useCurrencyInfo;