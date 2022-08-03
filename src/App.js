import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
function App() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')

  const BMICalculate = (e) => {
    e.preventDefault()
    var heightInMeter = height * 0.3048;
    var value = (weight / (heightInMeter * 2));
    setBmi(value.toFixed(1));


  }
  return <>
    <div className="container bmiCalculator">
      <h1>BMI Calculator</h1>
      <div className="main">
        <div>
          <label >Unit</label>
          <input type="text" value="Standard" disabled style={{ marginLeft: "55px", textAlign: "center" }} />

        </div>

        <div>
          <label >Weight</label>
          <input type="number" style={{ marginLeft: "35px" }} onChange={(e) => setWeight(e.target.value)} />
          <label >kg</label>
        </div>

        <div>
          <label >Height</label>
          <input type="number" style={{ marginTop: "20px", marginLeft: "35px" }} onChange={(e) => setHeight(e.target.value)} />
          <label >feet.inches</label>

        </div>
        <div >
          <button className="btn btn-primary" onClick={BMICalculate}>Calculate</button>
        </div>
      </div>
      <div className="row" style={{ marginTop: "20px", width: '35rem', marginLeft: "1px" }}>
        <div className="col-3" style={{ backgroundColor: "lightgrey", padding: "10px", textAlign: "center" }}>Your BMI:</div>
        <div className="col-9" style={{ backgroundColor: "green", textAlign: "center", color: "white", padding: "10px" }}>
          {bmi}
        </div>
      </div>
      <div className="row" style={{ marginTop: "20px", width: '35rem', marginLeft: "1px" }}>
        <div className="col-3" style={{ backgroundColor: "orange", padding: "10px", color: "white" }}>
          <p>Underweight</p>
          <p>Less then 18.5</p>

        </div>
        <div className="col-3" style={{ backgroundColor: "green", padding: "10px", color: "white" }}>
          <p>Normal weight</p>
          <p>18.5 - 25</p>
        </div>
        <div className="col-3 " style={{ backgroundColor: "orangered", padding: "10px", color: "white" }}>
          <p>Overweight</p>
          <p>25-30</p>
        </div>
        <div className="col-3" style={{ backgroundColor: "red", padding: "10px", color: "white" }}>
          <p>Obese</p>
          <p>Greater then 30</p>
        </div>
      </div>
    </div>
  </>;
}

export default App;
