import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../App.css'

const bmiCalculator = () => {

// to navigate from bmi-calculator to help page
  const navigate = useNavigate();

  // useState to set the values
    const [weight,setWeight] = useState(0)
    const [height,setHeight] = useState(0)
    const [bmi,setBmi] = useState(0)
     const [message,setMessage] = useState("")
    
  
  //  to set weight
    const onSetWeight = e =>{
          const value =e.target.value;
          setWeight(value);
    }
  
    // to set height
    const onSetHeight = e =>{
      const value = e.target.value;
      setHeight(value);
    }
  

    // to calculate the  bmi
    var result=0;
    const onBMI = () =>{
      const height2 = ((height)/(39.37)*(height)/(39.37))
      result = weight/height2
      const num2 = parseFloat(result).toFixed(3) // to set the bmi result upto 3 decimal 
      setBmi(num2)
      if(result <= 18.5)
      {
        setMessage("You are UnderWeight")
      }
      else if(result >=18.5 && result <=24.9)
      {
        setMessage("You are Healthy")
      }
      else if(result >=25 && result <= 39.9)
      {
        setMessage("You are Overweight")
      }
      else
      {
        setMessage("You are Obese")
      }
    }
  
    // reset the fields 
    const reset = () =>{
      setHeight(0)
      setWeight(0)
      setMessage('')
      setBmi(0)
    }

  return (
    <div className='App'> 
<div className='heading'>
  <h1>BMI Calculator</h1>
    
</div>
<div className='container'>
 <div className='main-label'>

    <div className='label'>
      <label>Weight (Kg)</label>
      <input  type='number' placeholder='Enter Weight' value={weight} onChange={onSetWeight} ></input>
    </div>
    <div className='label'>
      <label>Height (Inch)</label>
      <input  type='number' placeholder='Enter Height' value={height} onChange={onSetHeight}></input>
    </div>
 </div>
    <div className='btn'>
      <button disabled={!weight || !height}  type='submit' onClick={onBMI}>Submit</button>
      <button  type='submit' onClick={reset}>Reload</button>
    </div>
    <div className='status'>
      <h1>Your BMI is : {bmi}</h1>  
      <div className='message'>
      {/* <p>You are </p>        */}
      <p className='p'> {message}</p>    
      </div>
    </div>
</div>
    <div className='help'>

    <p onClick={() => navigate('/help')}>Help!</p>
    </div>

</div>
  )
}

export default bmiCalculator









