import { RadioComponent } from "./RadioComponent";
import { radiosData } from "../../../data/radiosData";
import "./dropdown.css";
import { useState } from "react";

export const DropDownComponent = () => {
  const [tempValue, setTempValue] = useState("celsius");
  const [windValue, serWindValue] = useState("kilometer");
  const [precipValue, serPrecipValue] = useState("millimeters");

  const handleRadioValue = (value: string) => {
    if (value === "celsius" || value === "fahrenheit") {
      setTempValue(value);
    } else if (value === "kilometer" || value === "miles") {
      serWindValue(value);
    } else if (value === "millimeters" || value === "inches") {
      serPrecipValue(value);
    } else {
      console.log("no data value");
    }
  };

  return (
    <div className="dropdown-container">
      <h5>Switch to Imperial</h5>

      {radiosData.map((groupData) => {
        return (
          <div key={groupData.id} className="temp-container">
            <p>{groupData.titleName}</p>

            {groupData.radios.map((radio, index) => {
              return (
                <div
                  className="radio-container"
                  key={index}
                  onClick={() => handleRadioValue(radio.value)}
                >
                  <RadioComponent
                    name={radio.name}
                    labelTitle={radio.labelTitle}
                    value={radio.value}
                    tempValue={tempValue}
                    windValue={windValue}
                    precipValue={precipValue}
                    handleRadioValue={handleRadioValue}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
