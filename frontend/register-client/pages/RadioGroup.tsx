import React from 'react'
import { useState } from 'react';

type Props = {}

interface Option {
  label: string;
  value: string;
}

function RadioGroup({}: Props) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const options: Option[] = [
    { label: '09:00am to 6:00pm', value: '09:00am to 6:00pm' },
    { label: '06:00pm to 02:00am ', value: '06:00pm to 02:00am ' },
    { label: '02:00am to 10:00am', value: '02:00am to 10:00am' },
  ];

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const optionValue = event.target.value;
    if (event.target.checked) {
      setSelectedOptions([...selectedOptions, optionValue]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== optionValue));
    }
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option.value}>
          <input type="radio" name="options" value={option.value} checked={selectedOptions.includes(option.value)} onChange={handleOptionChange} />
          {option.label}
        </label>
      ))}
      <p>You have selected: {selectedOptions.join(', ')}</p>
    </div>
  );
}

export default RadioGroup