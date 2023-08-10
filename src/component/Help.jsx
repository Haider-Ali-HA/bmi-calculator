import React, { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';
const Help = () => {

  // to navigate from help page to back bmi-calcuator page
  const navigate = useNavigate();

  // useState to set the foot
  const [foot,setFoot] = useState(0);
  const [message,setMessage] = useState(0)

  const onSetFoot = e =>{
    const value = e.target.value;    
    setFoot(value);
  }

  // convert foot to inches function
  var result=0;
    const onConvertFoot = () =>{
      let value1 = foot
      result = value1*12 
      const num2 = parseFloat(result).toFixed(3)
      setMessage(num2)   
    }
  
    // to reset the field
    const reset = () =>{
      setFoot(0)
      setMessage(0)
      
    }
  return (
    <div>
      <div className="App">

         <div className='heading'>
          <h1>Help!</h1>    
        </div>
            <div className='container'>
              <div className="text">

              <h4>
                        You can enter weight in kiligrams(KG)
                        Eg. weight = 50, 60, 70 etc
                        </h4>
                        <h4>
                        You can calculate height in inches Eg. 5.4 foot = 64.8 inches                      
                        </h4>      
              </div>
                 <div className='main-label'>
                    <div className='label'>
                      <label>Height(foot)</label>
                      <input  type='number' placeholder='Enter height in foot' value={foot} onChange={onSetFoot} ></input>
                    </div>
                 </div>
                 <div className='btn'>
                    <button disabled={!foot}  type='submit' onClick={onConvertFoot}>Submit</button>
                    <button  type='submit' onClick={reset}>Reload</button>
                 </div>
                 <div className='status'>
                    <h1>Height in inches : {message}</h1>  
                 </div>
                        
              </div>
      <div className='help'>

    <p onClick={() => navigate('/')}>Back!</p>
    </div>
      </div>
    </div>
   
  )
}

export default Help


