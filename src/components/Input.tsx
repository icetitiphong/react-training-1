import React from 'react';

interface InputProps {
  title?: string;
  onChange: (value: string) => void;
  value?: any
}

export const Input = (props: InputProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value);
      };

  return (
    <div className="mb-4">
      <div className="mb-2">{props.title}</div>
      <input
        className="input is-primary"
        type="text"
        onChange={handleChange}
        value={props.value}
      ></input>
    </div>
  );
};
