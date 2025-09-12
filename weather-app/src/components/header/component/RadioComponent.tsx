type propsAttribute = {
  name: string;
  labelTitle: string;
  value: string;
};

export const RadioComponent = ({ name, labelTitle, value }: propsAttribute) => {
  return (
    <>
      <label htmlFor={labelTitle}> {labelTitle}</label>
      <input
        type="radio"
        name={name}
        id={labelTitle}
        value={value}
        onChange={() => {}}
      />
    </>
  );
};
