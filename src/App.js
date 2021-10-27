import './App.css';
import Form from './Components/Form';
import Homepage from './Components/Homepage';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Temp from './Components/Temp';
import Harvesting from './Components/Harvesting';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from "react-router-dom";

function App() {



  const [name, setName] = useState('');
  const [states, setStates] = useState('');


  const [title, setTitle] = useState('');
  const [climate, setClimate] = useState('');
  const [pic, setPic] = useState('');
  const [method, setMethod] = useState('');


  const handlePages = () => {
    // console.log('hello noob Joey');
    console.log(title);

    if (states === '1') {
      console.log('I am state 1');
      setTitle('Andhra Pradesh');

    }
    else if (states === '2') {
      setTitle('Arunachal Pradesh');
    }
    else if (states === '3') {
      setTitle('Assam');
    
    }
    else if (states === '4') {
      setTitle('Bihar');
    
    }
    else if (states === '5') {
      setTitle('Chhattisgarh');
    
    }
    else if (states === '6') {
      setTitle('Delhi');
    
    }
    else if (states === '7') {
      setTitle('Goa');
    
    }
    else if (states === '8') {
      setTitle('Gujarat');
    
    }
    else if (states === '9') {
      setTitle('Haryana');
    
    }
    else if (states === '10') {
      setTitle('Himachal Pradesh');
      
    }
    else if (states === '11') {
      setTitle('Jammu and Kashmir');
      
    }
    else if (states === '12') {
      setTitle('Jharkhand');
      
    }
    else if (states === '13') {
      setTitle('Karnataka');
      
    }
    else if (states === '14') {
      setTitle('Kerala');
      
    }
    else if (states === '15') {
      setTitle('Madhya Pradesh');
      
    }
    else if (states === '16') {
      setTitle('Maharashtra');
      
    }
    else if (states === '17') {
      setTitle('Manipur');
      
    }
    else if (states === '18') {
      setTitle('Meghalaya');
      
    }
    else if (states === '19') {
      setTitle('Mizoram');
      
    }
    else if (states === '20') {
      setTitle('Nagaland');
      
    }
    else if (states === '21') {
      setTitle('Odisha');
      
    }
    else if (states === '22') {
      setTitle('Punjab');
      
    }
    else if (states === '23') {
      setTitle('Rajasthan');
      
    }
    else if (states === '24') {
      setTitle('Sikkim');
      
    }
    else if (states === '25') {
      setTitle('Tamil Nadu');
      
    }
    else if (states === '26') {
      setTitle('Telangana');
      
    }
    else if (states === '27') {
      setTitle('Tripura');
      
    }
    else if (states === '28') {
      setTitle('Uttar Pradesh');
      
    }
    else if (states === '29') {
      setTitle('Uttarakhand');
      
    }
    else if (states === '30') {
      setTitle('West Bengal');
      
    }
    
    // <Harvesting />
  }


  const handleName = (event) => {
    setName(event.target.value);
  }

  const handleDropDown = (event) => {
    setStates(event.target.value);
  }






  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          {/* <Form/> */}
          {/* <p>Outside value {a}</p> */}

          <Switch>


          <Route exact path="/harvesting">
              <Harvesting heading={title}/>
            </Route>

            <Route exact path="/">
              {/* <Harvesting /> */}
              <Intro />
              <Homepage />
              {/* <Form /> */}

              {/* <Route exact path="/harvesting">
                <Harvesting heading={title} />
              </Route> */}

                


              <div className="formPage">
                <div className="form">

                  <h1>Enter your details</h1>
                  <br />
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Name" value={name} onChange={handleName} />
                    <label htmlFor="floatingInput">Enter your name</label>
                  </div>
                  <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <select class="form-select my-3" aria-label="Default select example" onChange={handleDropDown}>
                    <option selected> --- Select your State -- </option>
                    <option value="1">Andhra Pradesh</option>
                    <option value="2">Arunachal Pradesh</option>
                    <option value="3">Assam</option>
                    <option value="4">Bihar</option>
                    <option value="5">Chhattisgarh</option>
                    <option value="6">Delhi</option>
                    <option value="7">Goa</option>
                    <option value="8">Gujarat</option>
                    <option value="9">Haryana</option>
                    <option value="10">Himachal Pradesh</option>
                    <option value="11">Jammu and Kashmir</option>
                    <option value="12">Jharkhand</option>
                    <option value="13">Karnataka</option>
                    <option value="14">Kerala</option>
                    <option value="15">Madhya Pradesh</option>
                    <option value="16">Maharashtra</option>
                    <option value="17">Manipur</option>
                    <option value="18">Meghalaya</option>
                    <option value="19">Mizoram</option>
                    <option value="20">Nagaland	</option>
                    <option value="21">Odisha</option>
                    <option value="22">Punjab</option>
                    <option value="23">Rajasthan</option>
                    <option value="24">Sikkim</option>
                    <option value="25">Tamil Nadu</option>
                    <option value="26">Telangana</option>
                    <option value="27">Tripura</option>
                    <option value="28">Uttar Pradesh</option>
                    <option value="29">Uttarakhand</option>
                    <option value="30">West Bengal</option>
                  </select>
                  <br />
                  <Link className="btn-form btn-dark" onClick={handlePages} to="/harvesting">Submit</Link>
                  {/* <p>value = {a}</p> */}
                  {/* <button type="button" class="btn btn-outline-success" onClick={handlePages}>Success</button> */}


                  {/* <button type="button" class="btn btn-outline-success" onClick={() => {
                    <Harvesting title="hi" />
                  }}>Success</button> */}
                  {/* <Link to={{
                    pathname: "/harvesting",
                    state: {
                        title : "abc"
                    }
                }}>Click</Link> */}
                  {/* <button type="button" class="btn btn-outline-success" >Success</button> */}

                </div>
              </div>










            </Route>

            <Route exact path="/home">
              <Homepage />
            </Route>
            <Route exact path="/form">
              {/* <Form /> */}
            </Route>


            
            {/* <Route exact path="/harvesting">
              <Harvesting heading={title}/>
            </Route> */}

          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
