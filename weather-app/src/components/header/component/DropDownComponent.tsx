import { RadioComponent } from "./RadioComponent";
import { radiosData } from "../../../data/radiosData";
import "./dropdown.css";
import { useState } from "react";

type datatype = {
  isShow: boolean;
};

export const DropDownComponent = ({ isShow }: datatype) => {
  const [tempValue, setTempValue] = useState("");
  const [windValue, serWindValue] = useState("");
  const [precipValue, serPrecipValue] = useState("");

  const handleRadioValue = (value: string) => {
    if (value === "celsius" || value === "fahrenheit") {
      setTempValue((prev) => (prev = value));
    } else if (value === "kilometer" || value === "miles") {
      serWindValue((prev) => (prev = value));
    } else {
      serPrecipValue((prev) => (prev = value));
    }
    console.log(tempValue);
    console.log(windValue);
    console.log(precipValue);
  };

  return (
    <div className="dropdown-container">
      <h5>Switch to Imperial</h5>

      {isShow &&
        radiosData.map((groupData) => {
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
