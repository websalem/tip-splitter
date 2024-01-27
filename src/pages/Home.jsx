import '../assets/scss/style.scss';
import dollar from '../assets/images/icon-dollar.svg';
import person from '../assets/images/icon-person.svg';
import { useState , useEffect} from 'react';
const Home = () => {
  const [billAmount, setBillAmount] = useState('');
  const [tipPerc, setTipPerc] = useState('');
  const [people, setPeople] = useState('');
  const [customTip, setCustomTip] = useState('');
  const [total, setTotal] = useState('0.00');
  const [tipPerPerson, setTipPerPerson] = useState('0.00');

  const resetBtn = ()=>{
    setBillAmount('');
    setPeople('');
    setTotal('0.00');
    setTipPerPerson('0.00');
    setCustomTip('');
  }
  const calculateTip = ()=>{
    if (billAmount && (tipPerc || customTip) && people) {
      const newBill = parseFloat(billAmount);
      const newTip = parseInt(tipPerc) || parseInt(customTip);
      const newPeople = parseInt(people);
      const tipAmount =( newBill * newTip) / 100;
      const tipAmountPerPerson = tipAmount/newPeople;
      setTipPerPerson(tipAmountPerPerson.toFixed(2));
      setTotal(tipAmount.toFixed(2));
    }
  }
  useEffect(()=>{
    calculateTip();
  });
  return (
    <main>
    <h1 className='title'>Splitter</h1>
    <div className="tip-calculator">
    <div className="tip">
      <form>
       <div className="form-field">
       <label className='title' htmlFor="bill">Bill</label>
        <input type="text" name='bill' id='bill' placeholder='0' onChange={(e)=>{setBillAmount(e.target.value)}} value={billAmount} />
        <img className='input-icon' src={dollar} alt="icon dollar" />
       </div>
      <div className="form-field">
        <p className='title'>Select Tip %</p>
       
       <div className="radio-form-field">
       <input className='radio-input' type="radio" name="tip" id="tip-1" value={'5'} onChange={(e)=>{setTipPerc(e.target.value)}} />
        <label className='radio-label' htmlFor="tip-1">5%</label>
       </div>
      <div className="radio-form-field">
      <input className='radio-input' type="radio" name="tip" id="tip-2"  value={10} onChange={(e)=>{setTipPerc(e.target.value)}}/>
        <label className='radio-label' htmlFor="tip-2">10%</label>
      </div>
        
       <div className="radio-form-field">
       <input className='radio-input' type="radio" name="tip" id="tip-3" value={15} onChange={(e)=>{setTipPerc(e.target.value)}} />
        <label className='radio-label' htmlFor="tip-3">15%</label>
       </div>
        
      <div className="radio-form-field">
      <input className='radio-input' type="radio" name="tip" id="tip-4" value={25} onChange={(e)=>{setTipPerc(e.target.value)}} />
        <label className='radio-label' htmlFor="tip-4">25%</label>
      </div>
      
       <div className="radio-form-field">
       <input className='radio-input' type="radio" name="tip" id="tip-5" value={50} onChange={(e)=>{setTipPerc(e.target.value)}} />
        <label className='radio-label' htmlFor="tip-5">50%</label>
       </div>
        
        <div className="radio-form-field">
        <input className='custom-field' type="text" name="tip" id="tip-6" value={customTip} onChange={(e)=>{setCustomTip(e.target.value)}} placeholder='Custom'  />
        </div>
        
      </div>
      <div className="form-field">
        <label className='title' htmlFor="people">Number of People</label>
        <input type="text" name='people' id='people' placeholder='0' onChange={(e)=>{setPeople(e.target.value)}} value={people} />
        <img className='input-icon' src={person} alt="icon person" />
      </div>
      </form>
    </div>
    <div className="result">
    <div className="result-field">
      <div className="text">
        <p>Tip Amount</p>
        <span>/ person</span>
      </div>
      <div className="amount">
        <p>${tipPerPerson}</p>
      </div>
    </div>
    <div className="result-field">
      <div className="text">
        <p>Total</p>
        <span>/ person</span>
      </div>
      <div className="amount">
        <p>${total}</p>
      </div>
    </div>
<button onClick={resetBtn} type='reset' className='reset-btn'>RESET</button>
    </div>
    </div>
    </main>
  )
}
export default Home