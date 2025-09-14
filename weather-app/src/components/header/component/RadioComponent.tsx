import { CheckedComponent } from "./CheckedComponent";

type propsAttribute = {
  name: string;
  labelTitle: string;
  value: string;
  tempValue: string;
  windValue: string;
  precipValue: string;
  handleRadioValue: (value: string) => void;
};

export const RadioComponent = ({
  name,
  labelTitle,
  value,
  tempValue,
  windValue,
  precipValue,
  handleRadioValue,
}: propsAttribute) => {
  return (
    <>
      <label htmlFor={labelTitle}> {labelTitle}</label>
      <input
        type="radio"
        name={name}
        id={labelTitle}
        value={value}
        onChange={() => handleRadioValue(value)}
        checked={
          value === tempValue || value === windValue || value === precipValue
        }
      />

      {(value === tempValue && <CheckedComponent />) ||
        (value === windValue && <CheckedComponent />) ||
        (value === precipValue && <CheckedComponent />)}
    </>
  );
};
