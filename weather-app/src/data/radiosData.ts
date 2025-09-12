export interface RadioOption {
  name: string;
  value: string;
  labelTitle: string;
}

export interface RadioGroup {
  id: string;
  titleName: string;
  radios: RadioOption[];
}


export const radiosData: RadioGroup[] = [
  {
    id: crypto.randomUUID(),
    titleName: "Temperature",
    radios: [
      { name: "temp", value: "celsius", labelTitle: "Celsius(°C)" },
      { name: "temp", value: "fahrenheit", labelTitle: "Fahrenheit (°F)" },
    ],
  },
  {
    id: crypto.randomUUID(),
    titleName: "Wind Speed",
    radios: [
      { name: "wind", value: "kilometer", labelTitle: "km/h" },
      { name: "wind", value: "miles", labelTitle: "mph" },
    ],
  },
  {
    id: crypto.randomUUID(),
    titleName: "Precipitation",
    radios: [
      { name: "rain", value: "millimeters", labelTitle: "Millimeters (mm)" },
      { name: "rain", value: "inches", labelTitle: "Inches (in)" },
    ],
  },
];
