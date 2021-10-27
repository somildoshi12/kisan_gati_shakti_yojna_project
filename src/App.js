import './App.css';
import Form from './Components/Form';
import Homepage from './Components/Homepage';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Temp from './Components/Temp';
import Harvesting from './Components/Harvesting';
import React, { useState } from 'react'

// import img from './Images/andhra.jpg';

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
  const [title2, setTitle2] = useState('');
  const [title3, setTitle3] = useState('');
  const [climate, setClimate] = useState('');
  const [pic, setPic] = useState('');
  const [method, setMethod] = useState('');


  const handlePages = () => {

    if (states === '1') {
      setTitle('Andhra Pradesh');

      setTitle2('Climatic conition');

      setTitle2('Harvesting Methods');

      setClimate('The region has a tropical climate and depends on monsoons for rainfall. According to the Köppen climate classification, it has a non-arid climate with minimum mean temperatures of 18 °C (64 °F). The most humid is the tropical monsoon climate characterized by moderate to high year-round temperatures and seasonally heavy rainfall above 2,000 mm (79 in) per year. The tropical climate is experienced in a strip of south-western lowlands abutting the Malabar Coast, the Western Ghats; the islands of Lakshadweep and Andaman and Nicobar are also subject to this climate');

      setPic('./Images/andhra.jpg');

      setMethod('Rainwater harvesting (RWH) is a simple method by which rainfall is collected for future usage. The collected rainwater may be stored, utilised in different ways or directly used for recharge purposes. With depleting groundwater levels and fluctuating climate conditions, RWH can go a long way to help mitigate these effects. Capturing the rainwater can help recharge local aquifers, reduce urban flooding and most importantly ensure water availability in water-scarce zones. Though the term seems to have picked up greater visibility in the last few years, it was, and is even today, a traditional practice followed in rural India. Some ancient rainwater harvesting methods followed in India include madakas, ahar pynes, surangas, taankas and many more. This water conservation method can be easily practiced in individual homes, apartments, parks,offices and temples too, across the world. Farmers have recharged their dry borewells, createdwater banks in drought areas, greened their farms, increased sustainability of their waterresources and even created a river. Technical know how for the rooftop RWH with direct storage canbe availed for better implementation. RWH An effective method in water scarce times, it is also aneasily doable practice');
    }
    else if (states === '2') {
      setTitle('Arunachal Pradesh');

      setTitle2('Climatic conition');

      setTitle2('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '3') {
      setTitle('Assam');

      setTitle2('Climatic conition');

      setTitle2('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '4') {
      setTitle('Bihar');

      setTitle2('Climatic conition');

      setTitle2('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '5') {
      setTitle('Chhattisgarh');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '6') {
      setTitle('Delhi');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '7') {
      setTitle('Goa');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '8') {
      setTitle('Gujarat');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '9') {
      setTitle('Haryana');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '10') {
      setTitle('Himachal Pradesh');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '11') {
      setTitle('Jammu and Kashmir');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '12') {
      setTitle('Jharkhand');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '13') {
      setTitle('Karnataka');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '14') {
      setTitle('Kerala');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '15') {
      setTitle('Madhya Pradesh');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '16') {
      setTitle('Maharashtra');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '17') {
      setTitle('Manipur');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '18') {
      setTitle('Meghalaya');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '19') {
      setTitle('Mizoram');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '20') {
      setTitle('Nagaland');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '21') {
      setTitle('Odisha');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '22') {
      setTitle('Punjab');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '23') {
      setTitle('Rajasthan');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '24') {
      setTitle('Sikkim');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '25') {
      setTitle('Tamil Nadu');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '26') {
      setTitle('Telangana');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '27') {
      setTitle('Tripura');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '28') {
      setTitle('Uttar Pradesh');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '29') {
      setTitle('Uttarakhand');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }
    else if (states === '30') {
      setTitle('West Bengal');

      setTitle2('Climatic conition');

      setTitle3('Harvesting Methods');

      setClimate('');

      setPic('');

      setMethod('');
    }

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

              <Harvesting
                heading={title}
                heading2={title2}
                heading3={title3}
                method={method}
                pic={pic}
                climate={climate} />

            </Route>

            <Route exact path="/">

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
