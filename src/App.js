import { useState } from 'react';
import './App.css';
// import MainPage from './components/MainPage/index.jsx';
import BasketPage from './components/BasketPage/index.jsx';

function App() {
  const [amountItems, setAmountItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  
  function addAmountAndPrice(AddAmount, AddPrice){
    setAmountItems(totalAmount => totalAmount + AddAmount);
    setTotalPrice(() => AddPrice);
  }

  function subAmountAndPrice(subAmount, subPrice){
    setAmountItems(totalAmount => totalAmount - subAmount);
    setTotalPrice(() => subPrice);
  }

  return (
    <>
      {/* <MainPage addAmount={addAmountAndPrice} subAmount={subAmountAndPrice} amount={amountItems} price={totalPrice}/> */}
      <BasketPage/>
    </>
  );
}

export default App;
