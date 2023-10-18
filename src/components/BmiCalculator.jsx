import { Card, InputAdornment, Radio, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const idealHeightWeightData = [
  { height: 137.16, weight: "28.5 - 34.9" },
  { height: 139.7, weight: "30.8 - 37.6" },
  { height: 142.24, weight: "32.6 – 39.9" },
  { height: 144.78, weight: "34.9 – 42.6" },
  { height: 147.32, weight: "36.4 – 44.9" },
  { height: 149.86, weight: "39 – 47.6" },
  { height: 152.4, weight: "40.8 – 49.9" },
  { height: 154.94, weight: "43.1 – 52.6" },
  { height: 157.48, weight: "44.9 – 54.9" },
  { height: 160.02, weight: "47.2 – 57.6 " },
  { height: 162.56, weight: "49 – 59.9" },
  { height: 165.1, weight: "51.2 – 62.6" },
  { height: 167.64, weight: "53 – 64.8 " },
  { height: 170.18, weight: "55.3 – 67.6" },
  { height: 172.72, weight: "57.1 – 69.8 " },
  { height: 175.26, weight: "59.4 – 72.6" },
  { height: 177.8, weight: "61.2 – 74.8" },
  { height: 180.34, weight: "63.5 – 77.5" },
  { height: 182.88, weight: "65.3 – 79.8" },
];

export default function BmiCalculator() {
  const [unit, setUnit] = useState("metric");
  const [calculatedBMI, setCalculatedBMI] = useState(0);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [status, setStatus] = useState("");
  const [idealWeight, setIdealWeight] = useState("");
  const [error, setError] = useState("");
  let bmiId = useRef();

  const handleChange = (event) => {
    setUnit(event.target.value);
    setHeight("");
    setWeight("");
    setCalculatedBMI(0);
    setError("");
  };

  function findWeightRange(height) {
    for (let index = 0; index < idealHeightWeightData.length; index++) {
      if (index === idealHeightWeightData.length - 1) {
        return;
      }
      if (
        height >= idealHeightWeightData[index].height &&
        height < idealHeightWeightData[index + 1].height
      ) {
        setIdealWeight(idealHeightWeightData[index].weight);
      }
    }
  }

  useEffect(() => {
    if (height && weight) {
      function calBMI(height, weight, unit) {
        let bmi;
        switch (unit) {
          case "metric":
            const heightInMeter = height / 100;
            bmi = Number((weight / (heightInMeter * heightInMeter)).toFixed(1));
            findWeightRange(height);
            setCalculatedBMI(bmi);
            break;
          case "imperial":
            const heightInCm = height * 2.54;
            bmi = Number((703 * (weight / (height * height))).toFixed(1));
            findWeightRange(heightInCm);
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
      bmiId.current = setTimeout(() => calBMI(height, weight, unit), 500);
    } else if (!height && !weight) {
      setCalculatedBMI(0);
    }
    return () => clearTimeout(bmiId.current);
  }, [height, weight, unit]);

  return (
    <Card
      variant="outlined"
      sx={{ borderRadius: "12px" }}
      className="lg:absolute lg:right-[-15rem] lg:w-[450px] "
    >
      <div className="p-5">
        <h3 className="text-lg font-bold leading-9">
          Enter your details below
        </h3>

        <div className="flex flex-row gap-5 text-sm">
          <div>
            <Radio
              sx={{ paddingLeft: "0px" }}
              checked={unit === "metric"}
              onChange={handleChange}
              value="metric"
              name="radio-buttons"
            />
            <span className="text-md font-bold">Metric</span>
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
                      ? height < 137 || height > 182
                      : height < 53 || height > 71
                  ) {
                    setError(
                      `Height must be between ${
                        unit === "metric" ? "137-182 cm" : "53-71 inch"
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
            <Radio
              sx={{ paddingLeft: "0px" }}
              checked={unit === "imperial"}
              onChange={handleChange}
              value="imperial"
              name="radio-buttons"
            />
            <span className="text-md font-bold">Imperial</span>
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
                between <b>{idealWeight}</b>
              </span>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
