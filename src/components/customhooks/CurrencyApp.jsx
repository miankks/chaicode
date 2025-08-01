import { useState } from 'react'
import {InputBox} from '..'
import useCurrencyInfo from './InputBox'
import Freecurrencyapi from '@everapi/freecurrencyapi-js';



const CurrencyApp = () => {
  let backGroundImage = 'https://images.pexels.com/photos/366551/pexels-photo-366551.jpeg'
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  // const freecurrencyapi = new Freecurrencyapi('fca_live_UnrVPmxEKTkWVa7M4R012bDtfaFqFjiqjxz4oS83');
  //  freecurrencyapi.latest({
  //       base_currency: 'USD',
  //       currencies: 'EUR'
  //   }).then(response => {
  //       console.log(response);
  //   });
  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  } 
    
  return (
    <div 
      className='w-full h-screen flex flex-wrap justify-center items-center 
        bg-cover bg-no-repeat'
        style={{backgroundImage: `url('${backGroundImage}')`}}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60
            rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox 
                label='From' amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}/>
            </div>
            <div className='relative w-full h-0.5'>
              <button type='button' className='absolute left-1/2 -translate-y-1/2 border-2
                  border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                  onClick={swap}>
                    Swap
              </button>
            </div>
            <div className='w-full mb-1'>
              <InputBox 
                label='To' 
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={currency => setTo(currency)}
                selectCurrency={from}
                amountDisable
                />
            </div>
            <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg' 
                >
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CurrencyApp