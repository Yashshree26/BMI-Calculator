import React, { useState } from "react";
import "./App.css";

function App() {

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calBmi = (e) => {
    e.preventDefault();

    if (!weight || !height || weight <= 0 || height <= 0) {
      alert("Please enter valid weight and height");
      return;
    }

    // Convert cm into meter
    const heightMeter = height / 100;

    // BMI calculation
    const bmiValue = weight / (heightMeter * heightMeter);

    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) {
      setMessage("🔵 You are Underweight");
    }
    else if (bmiValue >= 18.5 && bmiValue < 25) {
      setMessage("🟢 You have Normal Weight");
    }
    else if (bmiValue >= 25 && bmiValue < 30) {
      setMessage("🟠 You are Overweight");
    }
    else {
      setMessage("🔴 You are Obese");
    }

  };


  const reload = () => {
    setWeight("");
    setHeight("");
    setBmi("");
    setMessage("");
  };

  return (

    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>

        <form onSubmit={calBmi}>

          <div className="input-group">

            <label>
              Weight (KG)
            </label>

            <input
              type="number"
              placeholder="Enter weight in kg"
              value={weight}
              onChange={(e)=>setWeight(e.target.value)}
            />

          </div>

          <div className="input-group">

            <label>
              Height (CM)
            </label>

            <input
              type="number"
              placeholder="Enter height in cm"
              value={height}
              onChange={(e)=>setHeight(e.target.value)}
            />

          </div>

          <button className="btn" type="submit">
            Calculate BMI
          </button>

          <button 
            className="btn btn-outline"
            type="button"
            onClick={reload}
          >
            Reset
          </button>

          {
            bmi &&

            <div className="center">

              <h3>Your BMI</h3>

              <div className="bmi-circle">
                {bmi}
              </div>

              <p>{message}</p>

            </div>
          }

        </form>
      </div>
    </div>
  );
}

export default App;