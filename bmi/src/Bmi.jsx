import { useState } from "react";
import './styles.css';

function Bmi() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBmiResult] = useState("");
  const [category, setCategory] = useState("");

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const calculateBMI = () => {
    const weightValue = parseFloat(weight);
    const heightValueCm = parseFloat(height);

    if (isNaN(weightValue) || isNaN(heightValueCm)) {
      setBmiResult("Invalid input");
      setCategory("");
      return;
    }

    // Convert height from centimeters to meters
    const heightValue = heightValueCm / 100;

    const result = weightValue / heightValue ** 2;

    if (result < 18.5) {
      setCategory("Underweight");
    } else if (result < 25) {
      setCategory("Normal weight");
    } else if (result < 30) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }

    setBmiResult(result.toFixed(2));
    setWeight("");
    setHeight("");
  };

  return (
    <div className="container">
      <div className="wrapper">
        <input
          type="number"
          placeholder="Enter weight (kg)"
          onChange={handleWeightChange}
          value={weight}
        />
        <input
          type="number"
          placeholder="Enter height (cm)"
          onChange={handleHeightChange}
          value={height}
        />
        <button onClick={calculateBMI} className="btn">Calculate BMI</button>
        <p>
          BMI: {bmiResult} {category && `${category}`}
        </p>
      </div>
    </div>
  );
}

export default Bmi;
