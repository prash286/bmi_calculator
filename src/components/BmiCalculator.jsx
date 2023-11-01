import { Card, InputAdornment, Radio, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const idealHeightWeightData = [
  { height: 137, femaleWt: "28.5 - 34.9", maleWt: "28.5 - 34.9" },
  { height: 140, femaleWt: "30.8 - 37.6", maleWt: "30.8 - 38.1" },
  { height: 142, femaleWt: "32.6 - 39.9", maleWt: "33.5 - 40.8" },
  { height: 145, femaleWt: "34.9 - 42.6", maleWt: "35.8 - 43.9" },
  { height: 147, femaleWt: "36.4 - 44.9", maleWt: "38.5 - 46.7" },
  { height: 150, femaleWt: "39 - 47.6", maleWt: "40.8 - 49.9" },
  { height: 152, femaleWt: "40.8 - 49.9", maleWt: "43.1 - 53" },
  { height: 155, femaleWt: "43.1 - 52.6", maleWt: "45.8 - 55.8" },
  { height: 157, femaleWt: "44.9 - 54.9", maleWt: "48.1 - 58.9" },
  { height: 160, femaleWt: "47.2 - 57.6", maleWt: "50.8 - 61.6" },
  { height: 163, femaleWt: "49 - 59.9", maleWt: "53 - 64.8" },
  { height: 165, femaleWt: "51.2 - 62.6", maleWt: "55.3 - 68" },
  { height: 168, femaleWt: "53 - 64.8", maleWt: "58 - 70.7" },
  { height: 170, femaleWt: "55.3 - 67.6", maleWt: "60.3 - 73.9" },
  { height: 173, femaleWt: "57.1 - 69.8", maleWt: "63 - 76.6" },
  { height: 175, femaleWt: "59.4 - 72.6", maleWt: "65.3 - 79.8" },
  { height: 178, femaleWt: "61.2 - 74.8", maleWt: "67.6 - 83" },
  { height: 180, femaleWt: "63.5 - 77.5", maleWt: "70.3 - 85.7" },
  { height: 183, femaleWt: "65.3 - 79.8", maleWt: "72.6 - 88.9" },
  { height: 185, femaleWt: "67.6 - 82.5", maleWt: "75.3 - 91.6" },
  { height: 188, femaleWt: "69.4 - 84.8", maleWt: "77.5 - 94.8" },
  { height: 191, femaleWt: "71.6 - 87.5", maleWt: "79.8 - 98" },
  { height: 193, femaleWt: "73.5 - 89.8", maleWt: "82.5 - 100.6" },
  { height: 195, femaleWt: "75.7 - 92.5", maleWt: "84.8 - 103.8" },
  { height: 198, femaleWt: "77.5 - 94.8", maleWt: "87.5 - 106.5" },
  { height: 201, femaleWt: "79.8 - 97.5", maleWt: "89.8 - 109.7" },
  { height: 203, femaleWt: "81.6 - 99.8", maleWt: "92 - 112.9" },
  { height: 205, femaleWt: "83.9 - 102.5", maleWt: "94.8 - 115.6" },
  { height: 208, femaleWt: "85.7 - 104.8", maleWt: "97 - 118.8" },
  { height: 210, femaleWt: "88 - 107.5", maleWt: "99.8 - 121.5" },
  { height: 213, femaleWt: "89.8 - 109.7", maleWt: "102 - 124.7" },
];

export default function BmiCalculator() {
  const [unit, setUnit] = useState("metric");
  const [gender, setGender] = useState("male");
  const [calculatedBMI, setCalculatedBMI] = useState(0);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [status, setStatus] = useState("");
  const [idealWeight, setIdealWeight] = useState("");
  const [error, setError] = useState("");
  let bmiId = useRef();

  const resetField = (event) => {
    setHeight("");
    setWeight("");
    setCalculatedBMI(0);
    setError("");
  };

  function findWeightRange(height, gender) {
    for (let index = 0; index < idealHeightWeightData.length; index++) {
      if (index === idealHeightWeightData.length - 1) {
        return;
      } else if (height === idealHeightWeightData[index].height) {
        switch (gender) {
          case "male":
            setIdealWeight(idealHeightWeightData[index].maleWt);
            break;
          case "female":
            setIdealWeight(idealHeightWeightData[index].femaleWt);
            break;
          default:
            break;
        }
      } else if (
        height >= idealHeightWeightData[index].height &&
        height < idealHeightWeightData[index + 1].height
      ) {
        switch (gender) {
          case "male":
            setIdealWeight(idealHeightWeightData[index + 1].maleWt);
            break;
          case "female":
            setIdealWeight(idealHeightWeightData[index + 1].femaleWt);
            break;
          default:
            break;
        }
      }
    }
  }

  useEffect(() => {
    if (height && weight) {
      function calBMI(height, gender, weight, unit) {
        let bmi;
        switch (unit) {
          case "metric":
            const heightInMeter = height / 100;
            bmi = Number((weight / (heightInMeter * heightInMeter)).toFixed(1));
            findWeightRange(height, gender);
            setCalculatedBMI(bmi);
            break;
          case "imperial":
            const heightInCm = height * 2.54;
            bmi = Number((703 * (weight / (height * height))).toFixed(1));
            findWeightRange(heightInCm, gender);
            setCalculatedBMI(bmi);
            break;
          default:
            break;
        }

        if (bmi <= 18.4) {
          setStatus("Under");
        } else if (bmi >= 18.5 && bmi <= 24.9) {
          setStatus("Normal");
        } else if (bmi >= 25.0 && bmi <= 39.9) {
          setStatus("Over");
        } else if (bmi >= 40.0) {
          setStatus("Obese");
        }
      }
      bmiId.current = setTimeout(
        () => calBMI(height, gender, weight, unit),
        500
      );
    } else if (!height && !weight) {
      setCalculatedBMI(0);
    }
    return () => clearTimeout(bmiId.current);
  }, [height, weight, unit, gender]);

  return (
    <Card
      variant="outlined"
      sx={{ borderRadius: "12px" }}
      className="lg:absolute lg:right-[-15rem] lg:w-[450px]"
      data-aos="fade-left"
    >
      <div className="p-5">
        <h3 className="text-lg font-bold leading-9">
          Enter your details below
        </h3>

        <div className="flex flex-row gap-5 text-sm">
          <div>
            <div>
              <Radio
                sx={{ paddingLeft: "0px" }}
                checked={unit === "metric"}
                onChange={() => {
                  setUnit("metric");
                  resetField();
                }}
                value="metric"
                name="radio-buttons"
              />
              <span className="text-md font-bold">Metric</span>
            </div>
            <div>
              <Radio
                sx={{ paddingLeft: "0px" }}
                checked={gender === "male"}
                onChange={() => {
                  setGender("male");
                  resetField();
                }}
                value="male"
                name="radio-buttons"
              />
              <span className="text-md font-bold">Male</span>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <span>Height</span>
              <TextField
                autoComplete="off"
                error={error ? true : false}
                helperText={error}
                key={unit}
                type="number"
                value={height}
                sx={{
                  "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
                    fontSize: "18px",
                    fontWeight: 700,
                  },
                }}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <span className="text-blue-700 font-semibold">
                        {unit === "metric" ? "cm" : "in"}
                      </span>
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => {
                  const height = Number(e.target.value);
                  if (height === 0) {
                    setError("");
                  } else if (
                    unit === "metric"
                      ? height < 137 || height > 213
                      : height < 53 || height > 85
                  ) {
                    setError(
                      `Height must be between ${
                        unit === "metric" ? "137 - 213 cm" : "53 - 85 inch"
                      }`
                    );
                  } else {
                    setError("");
                  }
                  setHeight(height === 0 ? "" : height);
                }}
              />
            </div>
          </div>
          <div>
            <div>
              <Radio
                sx={{ paddingLeft: "0px" }}
                checked={unit === "imperial"}
                onChange={() => {
                  setUnit("imperial");
                  resetField();
                }}
                value="imperial"
                name="radio-buttons"
              />
              <span className="text-md font-bold">Imperial</span>
            </div>
            <div>
              <Radio
                sx={{ paddingLeft: "0px" }}
                checked={gender === "female"}
                onChange={() => {
                  setGender("female");
                  resetField();
                }}
                value="female"
                name="radio-buttons"
              />
              <span className="text-md font-bold">Female</span>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <span>Weight</span>
              <TextField
                autoComplete="off"
                type="number"
                value={weight}
                sx={{
                  "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
                    fontSize: "18px",
                    fontWeight: 700,
                  },
                }}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <span className="text-blue-700 font-semibold">
                        {unit === "metric" ? "kg" : "lb"}
                      </span>
                    </InputAdornment>
                  ),
                }}
                onChange={(e) =>
                  setWeight(
                    Number(e.target.value) === 0 ? "" : Number(e.target.value)
                  )
                }
              />
            </div>
          </div>
        </div>

        {!calculatedBMI ? (
          <div className="bg-blue-700 mt-2 p-4 rounded-tl-2xl rounded-bl-2xl rounded-tr-[150px] rounded-br-[150px]">
            <h3 className="text-lg font-semibold text-[#fff] mb-2">Welcome!</h3>
            <p className="text-xs text-[#fff] font-[100]">
              Enter your height & weight & you will see your BMI result here
            </p>
          </div>
        ) : (
          <div className="bg-blue-700 mt-2 p-4 rounded-2xl grid grid-cols-[0.7fr_1fr] gap-[5px] text-[#fff]">
            <div className="flex flex-col justify-center">
              <span className="text-[1.3rem]">Your BMI is...</span>
              <b className="text-[2rem]">{calculatedBMI}</b>
            </div>
            <div className="flex items-center justify-center text-[0.8rem] ">
              <span>
                Your BMI suggests you're {status} weight. Your ideal weight is
                between <b>{idealWeight} kg</b>
              </span>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
