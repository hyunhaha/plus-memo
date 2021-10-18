import React, { useEffect, useState } from 'react';

const Item = ({ label, value, editItemLabel, editItemValue, id }) => {
  const [inputLabel, setInputLabel] = useState('');
  const [inputText, setInputText] = useState(0);

  useEffect(() => {
    setInputText(value);
    setInputLabel(label);
  }, [value, label])
  const onChangeHandler = (event) => {

    setInputText(Number(event.target.value))
    editItemValue(Number(event.target.value), id)
  }

  const onChangeLabelHandler = (event) => {
    setInputLabel(event.target.value)
    editItemLabel(event.target.value, id)
  }
  return (
    <li>
      <input value={inputLabel} onChange={onChangeLabelHandler}></input>
      <input value={inputText} onChange={onChangeHandler}></input>

    </li>
  )
};

export default Item;